const { browser } = require('node:test');

class Base {
  constructor(page, browser) {
    this.page = page;
    this.browser = browser;
  }

  async navigate(url) {
    await this.page.goto(url);
  }
}

module.exports = Base;
