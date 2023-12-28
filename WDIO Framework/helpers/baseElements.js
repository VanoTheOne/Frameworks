// import { Key } from 'webdriverio';

class BaseElements {
  async navigate(url) {
    await browser.url(url);
  }

  async refreshPage() {
    await browser.refresh();
  }

  async click(element) {
    await element.waitForClickable();
    await element.click();
  }

  async getText(element) {
    await element.waitForDisplayed();
    return element.getText();
  }

  async getValue(element) {
    await element.waitForDisplayed();
    return element.getValue();
  }

  async getAttribute(element) {
    await element.waitForDisplayed();
    return element.getAttribute();
  }

  async isDisplayed(element) {
    await element.waitForDisplayed();
    return element.isDisplayed();
  }

  async scrollIntoView(element) {
    await element.waitForDisplayed();
    return element.scrollIntoView();
  }

  async pressKey(key) {
    await browser.keys(key);
  }
}

export { BaseElements };
