import { chromium } from '@playwright/test';
const Loginer = require('../helpers/loginer');

async function globalSetup() {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  const loginer = new Loginer(page);

  await loginer.logInUser(page);

  await page.context().storageState({ path: './LoginAuth.json' });

  await browser.close();
}

export default globalSetup;
