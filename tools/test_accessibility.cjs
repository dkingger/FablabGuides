// Run with PUPPETEER_MODULE pointing at an installed Puppeteer package.
// Serve the repository locally first; optional base URL is the first argument.
const assert = require('node:assert/strict');
const puppeteer = require(process.env.PUPPETEER_MODULE || 'puppeteer');
const base = process.argv[2] || 'http://127.0.0.1:8765';
(async () => {
    const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
    try {
        for (const path of ['index.html', 'en/index.html', 'guide-til-laserfiler.html', 'en/guide-to-laser-files.html', 'online-tools.html', 'en/online-tools.html', 'laser-aeon.html', 'en/laser-aeon.html']) {
            const page = await browser.newPage();
            const errors = [];
            page.on('pageerror', error => errors.push(error.message));
            await page.setViewport({ width: 320, height: 900 });
            await page.goto(`${base}/${path}`, { waitUntil: 'networkidle0' });
            await page.addStyleTag({ content: '* {scroll-behavior:auto!important}' });
            const overflow = await page.evaluate(() => [...document.querySelectorAll('main h1, main h2, main h3, main p, main li, main a, .top-nav a')].filter(e => {
                const r = e.getBoundingClientRect();
                return r.width && r.height && (r.right > innerWidth + 1 || r.left < -1);
            }).map(e => e.textContent.trim().slice(0, 70)));
            assert.deepEqual(overflow, [], `${path}: content clipped at 320px`);
            for (const link of await page.$$('.top-nav a')) {
                await link.focus();
                assert(await link.evaluate(e => { const r = e.getBoundingClientRect(); return r.left >= 0 && r.right <= innerWidth + 1; }), `${path}: focused navigation clipped`);
            }
            await page.focus('.skip-link');
            await page.keyboard.press('Enter');
            assert(await page.$eval('main', e => e === document.activeElement), `${path}: skip link focus`);
            await page.setViewport({ width: 1280, height: 900 });
            const opener = await page.$('.carousel-image-button, .tool-image-button');
            if (opener) {
                await opener.focus();
                await page.keyboard.press('Enter');
                assert(await page.$eval('dialog', e => e.open && e.contains(document.activeElement)), `${path}: dialog focus`);
                for (let i = 0; i < 6; i++) {
                    await page.keyboard.press('Tab');
                    assert(await page.$eval('dialog', e => e.contains(document.activeElement)), `${path}: dialog focus escaped`);
                }
                if (await page.$('[data-modal-step="1"]')) {
                    const before = await page.$eval('.modal-caption', e => e.textContent);
                    await page.click('[data-modal-step="1"]');
                    assert.notEqual(await page.$eval('.modal-caption', e => e.textContent), before);
                }
                await page.keyboard.press('Escape');
                assert(await opener.evaluate(e => e === document.activeElement), `${path}: focus not restored`);
                await page.keyboard.press('Space');
                await page.click('.modal-close, .image-lightbox-close');
                assert(await page.$eval('dialog', e => !e.open), `${path}: close button`);
            }
            assert.deepEqual(errors, [], `${path}: runtime errors`);
            console.log(`PASS ${path}: 320px layout, navigation, skip link, dialog`);
            await page.close();
        }
        const page = await browser.newPage();
        await page.goto(`${base}/garn-bandit.html`, {waitUntil:'networkidle0'});
        await page.focus('#fileInput');
        assert(await page.$eval('#uploadZone', e => getComputedStyle(e).outlineStyle === 'solid'), 'Upload focus not visible');
        assert(await page.$eval('#fileInput', e => !!e.getAttribute('aria-label')), 'Upload name missing');
        await page.click('#modeBtnSvg');
        assert(await page.$eval('#modeBtnSvg', e => e.getAttribute('aria-pressed') === 'true'));
        assert(await page.$eval('#threshold', e => e.disabled));
        await page.click('#modeBtnImg');
        assert(await page.$eval('#threshold', e => !e.disabled));
        console.log('PASS Garn Bandit: upload focus, accessible name, mode states');
        await page.close();
    } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exit(1); });
