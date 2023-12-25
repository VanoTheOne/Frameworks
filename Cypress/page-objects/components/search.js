const Base = require('../base');

class Search extends Base {
  constructor() {
    super();
  }

  get searchField() {
    return cy.get('input[name="q"]');
  }

  get searchButton() {
    return cy.get('.PageHeaderSearchdesktop__Icon-eom9vk-1');
  }

  get searchResultTitle() {
    return cy.get('h2.search_results_page-header');
  }

  searchByText(searchtext) {
    this.searchField.click();
    this.searchField.type(searchtext);
    this.searchButton.click();
  }
}

module.exports = new Search();
