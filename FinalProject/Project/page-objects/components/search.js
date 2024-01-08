const Base = require('../base');

class Search extends Base {
  constructor(page) {
    super(page);
  }

  get searchField() {
    return this.page.locator('input[name="q"]');
  }

  get searchButton() {
    return this.page.locator('.PageHeaderSearchdesktop__Icon-eom9vk-1');
  }

  get searchResult() {
    return this.page.locator('//div[contains(text(),"Artists")]/following-sibling::*//a').first();
  }

  get noSearchResult() {
    return this.page.locator('div[ng-if="$ctrl.sections && !$ctrl.has_results"]');
  }

  async searchByText(searchtext) {
    await this.searchField.click();
    await this.searchField.fill(searchtext);
    await this.searchButton.click();
  }
}

module.exports = Search;
