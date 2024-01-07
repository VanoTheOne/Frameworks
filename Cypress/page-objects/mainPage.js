const Base = require('./base');

class MainPage extends Base {
  constructor() {
    super();
  }

  get chartsFilterButton() {
    return cy.get('.SquareManySelects__Container-sc-1kktot3-1.dqbVnf');
  }

  get songSelected() {
    return cy.xpath('//div[@class and contains(text(),"Songs")]/child::*');
  }

  get allSelected() {
    return cy.xpath('//div[@class and contains(text(),"All")]/child::*');
  }

  get daySelected() {
    return cy.xpath('//div[@class and contains(text(),"Day")]/child::*');
  }

  get aboutGeniusButton() {
    return cy.get('div.PageFooterdesktop__Quarter-hz1fx1-4.hMUvCn a[href="/about"]');
  }

  chartsFilterButtonClick() {
    this.chartsFilterButton.click();
  }

  aboutGeniusButtonClick() {
    this.aboutGeniusButton.click();
  }
}

module.exports = new MainPage();
