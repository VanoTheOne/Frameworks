const Base = require('../base');

class Header extends Base {
  constructor() {
    super();
  }

  get chartsButton() {
    return cy.get('a[href="/#top-songs"]');
  }

  get forumsButton() {
    return cy.get('a[href="/forums"]');
  }

  chartsButtonClick() {
    this.chartsButton.click();
  }

  forumsButtonClick() {
    this.forumsButton.click();
  }
}

module.exports = new Header();
