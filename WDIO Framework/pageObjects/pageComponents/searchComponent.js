import { BaseComponents } from './baseComponents.js';

class SearchComponent extends BaseComponents {
  constructor() {
    super();
  }

  get searchInput() {
    return $('.DocSearch-Input');
  }

  async searchInputClick() {
    await this.searchInput.click();
  }

  async inputValue() {
    await this.searchInput.getValue();
  }
}

export default new SearchComponent();
