const Base = require('./base');

class ForumsPage extends Base {
  constructor(page) {
    super(page);
  }

  get rockGeniusForumButton() {
    return this.page.locator('a[href="/rock-genius"]');
  }

  get followRockGeniusForumButton() {
    return this.page.locator('#discussion_list a[href="/groups/6/follows"]');
  }

  get followingRockGeniusForum() {
    return this.page.locator('#discussion_list a[href="/groups/6/follows"] span');
  }

  get searchAllForumsField() {
    return this.page.locator('input#q');
  }

  get searchForumsResult() {
    return this.page.locator('li[class="search_result"] span.song_title.search_results-title').first();
  }

  get searchForumsAlert() {
    return this.page.locator('div.alert.alert_error');
  }

  async openRockGeniusForum() {
    await this.rockGeniusForumButton.click();
    await this.followRockGeniusForumButton.click();
  }

  async searchInAllForums(searchText) {
    await this.searchAllForumsField.click();
    await this.searchAllForumsField.fill(searchText);
    await this.searchAllForumsField.press('Enter');
  }
}

module.exports = ForumsPage;
