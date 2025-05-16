const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto("https://your-game-url.com");

  console.log("Bot running...");

  await new Promise(() => {}); // Keeps it alive
})();
