const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const puppeteer = require(process.env.PUPPETEER_MODULE || 'puppeteer');

const base = process.argv[2] || 'http://127.0.0.1:8765';
const systemChrome = [
    process.env.PUPPETEER_EXECUTABLE_PATH,
    '/usr/bin/google-chrome-stable',
    '/usr/bin/google-chrome',
    '/usr/bin/chromium',
    '/usr/bin/chromium-browser'
].find(candidate => candidate && fs.existsSync(candidate));

const launchOptions = { headless: true, args: ['--no-sandbox'] };
if (systemChrome) launchOptions.executablePath = systemChrome;

const currentPages = fs.readdirSync('.')
    .filter(file => file.endsWith('.html'))
    .concat(fs.readdirSync('en')
        .filter(file => file.endsWith('.html'))
        .map(file => `en/${file}`));

const carouselPages = [
    'laser-aeon.html',
    'laser-eduard.html',
    'laser-lightburn.html',
    'en/laser-aeon.html',
    'en/laser-eduard.html',
    'en/laser-lightburn.html'
];

let imageCount = 0;
for (const pagePath of currentPages) {
    const source = fs.readFileSync(pagePath, 'utf8');
    for (const match of source.matchAll(/["']([^"']*billeder\/[^"']+)["']/g)) {
        const reference = decodeURIComponent(match[1].split(/[?#]/, 1)[0]);
        if (/^https?:\/\//.test(reference)) continue;
        const assetPath = reference.startsWith('/')
            ? path.join('.', reference)
            : path.resolve(path.dirname(pagePath), reference);
        assert(fs.existsSync(assetPath), `${pagePath}: missing image ${match[1]}`);
        imageCount += 1;
    }
}
console.log(`PASS ${imageCount} image references across ${currentPages.length} current pages`);

(async () => {
    const browser = await puppeteer.launch(launchOptions);
    try {
        let guideCount = 0;
        for (const pagePath of currentPages) {
            const page = await browser.newPage();
            await page.setViewport({ width: 320, height: 900 });
            await page.goto(`${base}/${pagePath}`, { waitUntil: 'domcontentloaded' });
            const carousels = await page.$$('[data-carousel]');
            if (carousels.length) {
                assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), `${pagePath}: horizontal overflow`);
                for (const carousel of carousels) {
                    const buttons = await carousel.$$('.thumb-button');
                    const lastButton = buttons.at(-1);
                    await lastButton.click();
                    assert.equal(await lastButton.evaluate(element => element.getAttribute('aria-pressed')), 'true', `${pagePath}: last step not selected`);
                    assert.equal(await lastButton.evaluate(element => element.textContent.trim()), String(buttons.length), `${pagePath}: visible step number`);
                }
                guideCount += 1;
            }
            await page.close();
        }
        console.log(`PASS ${guideCount} guide pages: numbered step buttons, selection and 320px layout`);

        for (const pagePath of currentPages) {
            const page = await browser.newPage();
            const localFailures = [];
            page.on('response', response => {
                const url = new URL(response.url());
                if (url.origin === new URL(base).origin && response.status() >= 400 && url.pathname !== '/favicon.ico') {
                    localFailures.push(`HTTP ${response.status()} ${url.pathname}`);
                }
            });
            page.on('requestfailed', request => {
                const url = new URL(request.url());
                if (url.origin === new URL(base).origin) localFailures.push(`request failed ${url.pathname}`);
            });
            await page.goto(`${base}/${pagePath}`, { waitUntil: 'domcontentloaded' });
            await new Promise(resolve => setTimeout(resolve, 100));
            const brokenImages = await page.$$eval('img[src]', images => images
                .filter(image => image.getAttribute('src') && image.complete && image.naturalWidth === 0)
                .map(image => image.getAttribute('src')));
            assert.deepEqual(localFailures, [], `${pagePath}: local resource failures`);
            assert.deepEqual(brokenImages, [], `${pagePath}: broken rendered images`);
            await page.close();
        }
        console.log(`PASS ${currentPages.length} current pages: local resources and rendered images`);

        for (const pagePath of carouselPages) {
            const page = await browser.newPage();
            await page.goto(`${base}/${pagePath}`, { waitUntil: 'domcontentloaded' });
            for (const key of ['Enter', 'Space']) {
                await page.focus('#carouselImage');
                await page.keyboard.press(key);
                assert.equal(await page.$eval('#imageModal', element => getComputedStyle(element).display), 'block', `${pagePath}: ${key} did not open image`);
                assert(await page.$eval('#imageModal .close', element => element === document.activeElement), `${pagePath}: focus did not move into dialog`);
                await page.keyboard.press('Tab');
                assert(await page.$eval('#imageModal .close', element => element === document.activeElement), `${pagePath}: dialog focus escaped`);
                await page.keyboard.press('Escape');
                assert.equal(await page.$eval('#imageModal', element => getComputedStyle(element).display), 'none', `${pagePath}: Escape did not close image`);
                assert(await page.$eval('#carouselImage', element => element === document.activeElement), `${pagePath}: focus did not return to image`);
            }
            await page.close();
        }
        console.log(`PASS ${carouselPages.length} carousels: Enter/Space, focus containment, Escape and focus restoration`);

        for (const pagePath of ['index.html', 'en/index.html']) {
            const page = await browser.newPage();
            await page.goto(`${base}/${pagePath}`, { waitUntil: 'domcontentloaded' });
            assert(await page.$eval('.lang-switch img', image => image.complete && image.naturalWidth > 0), `${pagePath}: language flag missing`);
            await page.focus('.lang-switch a');
            assert(await page.$eval('.lang-switch a', link => link === document.activeElement), `${pagePath}: language link cannot receive focus`);
            await page.close();
        }
        console.log('PASS language links: visible images and keyboard focus');
    } finally {
        await browser.close();
    }
})().catch(error => {
    console.error(error);
    process.exit(1);
});
