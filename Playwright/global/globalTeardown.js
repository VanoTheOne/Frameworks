import { chromium } from '@playwright/test';
const Cleaner = require('../helpers/cleaner');
const Loginer = require('../helpers/loginer');

async function globalTeardown() {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  const loginer = new Loginer(page);
  const cleaner = new Cleaner(page);

  await loginer.logInUser(page);

  await cleaner.cleanUpBio(page);

  await browser.close();
}

export default globalTeardown;
