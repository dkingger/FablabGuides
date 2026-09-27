const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const puppeteer = require(process.env.PUPPETEER_MODULE || 'puppeteer');
const base = process.argv[2] || 'http://127.0.0.1:8765';
(async () => {
    const browser = await puppeteer.launch({headless:true,args:['--no-sandbox']});
    const work = fs.mkdtempSync(path.join(os.tmpdir(), 'fablab-wedo-test-'));
    try {
        const page = await browser.newPage();
        const errors = [];
        page.on('pageerror', error => errors.push(error.message));
        page.on('dialog', dialog => dialog.accept());
        await page.goto(`${base}/wedo-blokvaerksted.html`, {waitUntil:'networkidle0'});
        await page.focus('.skip-link');
        await page.keyboard.press('Enter');
        assert(await page.$eval('main', e => e === document.activeElement));
        assert(await page.$$eval('#program input, #program select', list => list.every(e => e.getAttribute('aria-label'))));
        // Add and move blocks using only focused buttons and Enter.
        const press = async selector => { await page.focus(selector); await page.keyboard.press('Enter'); };
        await press('#clear');
        await press('#palette .repeat');
        await press('#palette .wait');
        await press('#program > .wait button[title^="Flyt blok ind"]');
        assert.equal(await page.$$eval('#program > .repeat > .stack > .wait', e => e.length), 1);
        assert(await page.evaluate(() => document.activeElement.title.startsWith('Flyt blok ind')));
        await press('#program .wait button[title^="Flyt blok ud"]');
        assert.equal(await page.$$eval('#program > .wait', e => e.length), 1);
        await press('#program > .wait button[title="Flyt blok op"]');
        assert.equal(await page.$eval('#program > :first-child', e => e.dataset.type), 'wait');
        await press('#program > .wait button[title="Flyt blok ned"]');
        assert.equal(await page.$eval('#program > :last-child', e => e.dataset.type), 'wait');
        await press('#program > .wait button[title="Slet blok"]');
        assert.equal(await page.$$eval('#program > .wait', e => e.length), 0);
        assert(await page.evaluate(() => document.activeElement.tagName === 'BUTTON'));
        const blocks = [
            {type:'repeat',count:2,children:[{type:'motor',port:1,speed:50,seconds:.1},{type:'wait',seconds:.1}]},
            {type:'light',color:3},{type:'tone',freq:440,seconds:.1},{type:'halt'}
        ];
        const fixture = path.join(work, 'project.json');
        fs.writeFileSync(fixture, JSON.stringify({format:'wedo-workshop',version:1,blocks}));
        await (await page.$('#file')).uploadFile(fixture);
        await page.waitForFunction(() => document.querySelector('#status').textContent === 'Projektet er åbnet');
        await press('#demo'); // Native checkbox Space is used below if Enter does not toggle.
        if (!await page.$eval('#demo', e => e.checked)) await page.keyboard.press('Space');
        await press('#run');
        await page.waitForFunction(() => document.querySelector('#status').textContent === 'Programmet er færdigt');
        assert.equal(await page.$eval('#p1', e => e.textContent), 'A · 0 %');
        assert.equal(await page.$eval('#light-status', e => e.textContent), 'Lys: blå');
        assert.equal(await page.$eval('#run', e => e.disabled), false);
        // Check saved project remains compatible and survives a reload.
        const expected = await page.evaluate(() => JSON.parse(localStorage.getItem('wedo-workshop-v1')));
        assert.deepEqual(expected, blocks);
        const client = await page.createCDPSession();
        await client.send('Browser.setDownloadBehavior', {behavior:'allow',downloadPath:work});
        await press('#save');
        const download = path.join(work, 'Mit-WeDo-projekt.json');
        for (let i = 0; i < 100 && !fs.existsSync(download); i++) await new Promise(resolve => setTimeout(resolve, 50));
        assert.deepEqual(JSON.parse(fs.readFileSync(download, 'utf8')), {format:'wedo-workshop',version:1,blocks});
        await page.reload({waitUntil:'networkidle0'});
        assert.deepEqual(await page.evaluate(() => read(document.querySelector('#program'))), blocks);
        // A running program cannot be edited through the keyboard; Stop remains usable.
        await page.$eval('#program [data-key="seconds"]', e => e.value='10');
        await page.focus('#demo'); await page.keyboard.press('Space');
        await press('#run');
        await page.waitForFunction(() => document.querySelector('#run').disabled);
        assert(await page.$$eval('#program input, #program select, #program button, #palette button', es => es.every(e => e.disabled)));
        assert.equal(await page.$eval('#stop', e => e.disabled), false);
        await press('#stop');
        await page.waitForFunction(() => !document.querySelector('#run').disabled);
        assert.equal(await page.$eval('#p1', e => e.textContent), 'A · 0 %');
        for (const width of [320, 1280]) {
            await page.setViewport({width,height:900});
            const overflow = await page.evaluate(() => [...document.querySelectorAll('h1,h2,p,button,input,select')].filter(e => {const r=e.getBoundingClientRect();return r.width&&r.height&&(r.left< -1||r.right>innerWidth+1)}).map(e=>e.outerHTML.slice(0,100)));
            assert.deepEqual(overflow, [], `Content outside ${width}px viewport`);
            await page.screenshot({path:path.join(work, `wedo-${width}.png`),fullPage:true});
        }
        assert.deepEqual(errors, []);
        console.log(`PASS: named inputs, skip link, add/move/nest/delete, import/export, persistence, demo, stop and 320/1280px layout. Evidence: ${work}`);
    } finally { await browser.close(); }
})().catch(error => {console.error(error);process.exit(1)});
