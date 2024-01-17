const { browser } = require('node:test');

class Base {
  constructor(page, browser) {
    this.page = page;
    this.browser = browser;
  }

  async navigate(url) {
    await this.page.goto(url);
  }

  async reloadPage() {
    await this.page.reload();
  }

  async click() {
    await this.page.click();
  }
}

module.exports = Base;
