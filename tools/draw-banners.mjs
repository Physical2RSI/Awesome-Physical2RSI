// Draw the README banner (assets/readme-banner.png) and the social preview (assets/social-preview.png) from the
// teaser painting (assets/teaser.webp), the project mark and the site's font, with a headless Chrome, Chromium or
// Edge. The website hero shows the painting itself, laid out by site/styles.css.
//
//   node tools/draw-banners.mjs
//
// Run by hand after changing the wording or the teaser, then commit the images. They carry no counts or dates,
// so they do not go stale when the bibliography changes.
import { execFileSync } from "node:child_process";
import { existsSync } from "node:fs";
import { mkdtemp, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { ROOT } from "./public-files.mjs";
import { SURVEY } from "./survey-content.mjs";

const BANNERS = [
  // [output file, width, height, title size, teaser width]
  ["assets/readme-banner.png", 1600, 600, 48, 860],
  ["assets/social-preview.png", 1200, 630, 40, 590],
];

function findBrowser() {
  const candidates = [
    process.env.CHROME_PATH,
    "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/usr/bin/google-chrome",
    "/usr/bin/chromium",
    "/usr/bin/chromium-browser",
  ];
  const found = candidates.find((candidate) => candidate && existsSync(candidate));
  if (!found) throw new Error("No Chrome, Chromium or Edge found; set CHROME_PATH");
  return found;
}

function page(width, height, titleSize, teaserWidth) {
  const asset = (file) => pathToFileURL(path.join(ROOT, file)).href;
  return `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face { font-family: Manrope; src: url("${asset("assets/fonts/manrope-latin.woff2")}") format("woff2"); font-weight: 200 800; }
html, body { margin: 0; }
body { width: ${width}px; height: ${height}px; overflow: hidden; font-family: Manrope, sans-serif; color: #172b28;
  background: #f2f6f2; position: relative; }
.copy { position: absolute; left: ${Math.round(width * 0.045)}px; top: 50%; transform: translateY(-50%); width: ${Math.round(width - teaserWidth - width * 0.06)}px; }
.brand { display: flex; align-items: center; gap: 14px; font-size: ${Math.round(titleSize * 0.42)}px; font-weight: 800; color: #125b50; margin-bottom: ${Math.round(titleSize * 0.75)}px; }
.brand img { width: ${Math.round(titleSize * 0.72)}px; height: ${Math.round(titleSize * 0.72)}px; border-radius: 7px; }
.brand span { background: linear-gradient(170deg, #f2b33a 10%, #d8641c 90%); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; font-weight: 800; }
h1 { margin: 0; font-size: ${titleSize}px; line-height: 1.12; font-weight: 700; letter-spacing: -0.01em; }
h1 em { font-style: normal; color: #125b50; }
.rule { width: 300px; height: 1px; background: #dce4df; margin-bottom: ${Math.round(titleSize * 0.42)}px; }
.status { display: flex; align-items: center; gap: 14px; font-size: ${Math.round(titleSize * 0.35)}px; color: #566760; }
.status strong { color: #125b50; font-weight: 700; }
.status i { width: 6px; height: 6px; background: #914252; display: inline-block; }
.teaser { border-radius: 14px; box-shadow: 0 16px 38px rgba(23, 43, 40, 0.22), 0 0 0 2px rgba(255, 255, 255, 0.6); position: absolute; right: ${Math.round(width * 0.025)}px; top: 50%; transform: translateY(-50%); width: ${teaserWidth}px; }
</style></head><body>
<div class="copy">
  <div class="brand"><img src="${asset("assets/mark.png")}" alt=""><div>Physical<span>2</span>RSI</div></div>
  <h1>${SURVEY.title.replace("Recursive Self-Improvement", "<em>Recursive<br>Self&#8209;Improvement</em><br>")}</h1>
</div>
<img class="teaser" src="${asset("assets/teaser.webp")}" alt="">
</body></html>`;
}

const browser = findBrowser();
const temp = await mkdtemp(path.join(os.tmpdir(), "banners-"));
const run = (args) =>
  execFileSync(browser, ["--headless=new", "--disable-gpu", "--hide-scrollbars", "--force-device-scale-factor=1",
    "--allow-file-access-from-files", `--user-data-dir=${path.join(temp, "profile")}`, "--virtual-time-budget=5000", ...args], { stdio: "ignore" });
try {
  for (const [file, width, height, titleSize, teaserWidth] of BANNERS) {
    const html = path.join(temp, "banner.html");
    await writeFile(html, page(width, height, titleSize, teaserWidth));
    run([`--window-size=${width},${height}`, `--screenshot=${path.join(ROOT, file)}`, pathToFileURL(html).href]);
    console.log(`Wrote ${file} (${width}x${height})`);
  }
} finally {
  await rm(temp, { recursive: true, force: true });
}
