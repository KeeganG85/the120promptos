import { chromium } from "playwright-core";
import { pathToFileURL } from "node:url";

const html = pathToFileURL("/workspace/.grok/og-card.html").href;
const exe =
  "/opt/pw-browsers/chromium_headless_shell-1234/chrome-headless-shell-linux64/chrome-headless-shell";

const browser = await chromium.launch({
  executablePath: exe,
  args: ["--no-sandbox", "--disable-dev-shm-usage", "--font-render-hinting=medium"],
});
const page = await browser.newPage({
  viewport: { width: 1200, height: 630 },
  deviceScaleFactor: 2,
});
await page.goto(html, { waitUntil: "networkidle", timeout: 15000 });
await page.waitForTimeout(200);
await page.screenshot({
  path: "/workspace/.grok/og-raw.png",
  type: "png",
  clip: { x: 0, y: 0, width: 1200, height: 630 },
});
await browser.close();
console.log("wrote /workspace/.grok/og-raw.png");
