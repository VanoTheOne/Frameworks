import { expect } from 'chai';
import { Key } from 'webdriverio';

describe(`Announcement Bar test`, async () => {
  it(`Announcement should not be displayed after page refreshing`, async () => {
    const closeAnnouncemebt = await $('button[aria-label="Close"]');
    await closeAnnouncemebt.click();
    await driver.refresh();
    expect($('div.content_knG7.announcementBarContent_xLdY')).to.be.empty;
  });
});

describe(`Switch theme test`, async () => {
  it(`Should check if it dark theme was changed to light`, async () => {
    const searchElement = await $('.clean-btn.toggleButton_gllP');
    await searchElement.click();
    const lightThemeAttribute = await $('html[data-theme="light"]').getAttribute('data-theme');
    expect(lightThemeAttribute).to.equal('light');
  });
});

describe(`WebdriverIO AI Copilot test`, async () => {
  it(`WebdriverIO AI Copilot should give response containing function "setTimeout" to proposed request "How to set session script timeout?"`, async () => {
    const webgrioAi = await $('div.ms-rotate-0.ms-flex');
    await webgrioAi.click();
    const question = await $('//div[contains(text(),"How to set session script timeout?")]');
    await question.click();
    const productItems = await $('//div[contains(@class,"ms-prose ms-float-left")]//code[contains(text(),"setTimeout")]');
    await productItems.isDisplayed();
    expect(await $('//div[contains(@class,"ms-prose ms-float-left")]//code[contains(text(),"setTimeout")]').getText()).to.contain('setTimeout');
  });
});

describe(`Get started with WDIO tab test`, async () => {
  it(`Should copy code and check if it was copied right`, async () => {
    const getSTarted = await $('.buttons_pzbO a[href="/docs/gettingstarted"]');
    await getSTarted.click();
    const scrollingPage = await $('//span[@class="token plain" and contains(text(),"--suite exampleSuiteName")]');
    await scrollingPage.scrollIntoView({ block: 'center', inline: 'center' });
    const copyCode = await $('//span[contains(text(),"--suite exampleSuiteName")]//ancestor::*[@class="codeBlockContent_biex"]//button[@title="Copy"]');
    await copyCode.isDisplayed();
    await copyCode.click();
    const searchCode = await $('.DocSearch');
    await searchCode.click();
    const clickSearch = await $('.DocSearch-Input');
    await clickSearch.click();
    await browser.keys([Key.Ctrl, 'v']);
    const inputCode = await $('.DocSearch-Input').getValue();
    expect(inputCode).to.equal('npx wdio run ./wdio.conf.js --suite exampleSuiteName');
  });
});
