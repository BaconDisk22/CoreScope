const { chromium } = require('playwright');
const fs = require('node:fs');
const path = require('node:path');
(async () => {
  const base = process.env.SCREENSHOT_BASE_URL || 'http://127.0.0.1:8765';
  const out = process.env.SCREENSHOT_OUTPUT || 'screenshots';
  fs.mkdirSync(out, { recursive: true });
  const browser = await chromium.launch({ headless: true });
  try {
    for (const [name,width,height] of [['desktop',1440,900],['mobile',390,844]]) {
      const page = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: 1, reducedMotion: 'reduce' });
      await page.goto(base + '/demo.html', { waitUntil: 'load' });
      await page.locator('#demo-badge').waitFor();
      await page.screenshot({ path: path.join(out, 'fuggedaboutit-demo-' + name + '.png'), fullPage: true, animations: 'disabled' });
      await page.close();
    }
  } finally { await browser.close(); }
})().catch(e => { console.error(e); process.exit(1); });
