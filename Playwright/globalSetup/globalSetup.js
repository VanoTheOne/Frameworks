import { chromium, expect } from '@playwright/test';

async function globalSetup() {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://genius.com/');

  await page.locator('//div[@class="PageHeaderAuthLinksdesktop__Container-sc-10sr9hk-1 cDEgGV"]/child::*[2]').click();
  await page.locator('#user_session_login').click();
  await page.locator('#user_session_login').fill('CarabasBarabas');
  await page.locator('#user_session_password').click();
  await page.locator('#user_session_password').fill('veryHardPassword666');
  await page.locator('#user_session_submit').click();

  await expect(page.locator('.PageHeaderMenu__Container-sc-13myo8l-0.emAXHD')).toBeVisible({ timeout: 30000 });

  await page.context().storageState({ path: './LoginAuth.json' });

  await browser.close();
}

export default globalSetup;
