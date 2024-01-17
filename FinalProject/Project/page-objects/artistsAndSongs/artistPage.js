const Base = require('../base');

class ArtistPage extends Base {
  constructor(page) {
    super(page);
  }

  get artistNameTitle() {
    return this.page.locator('h1[class="profile_identity-name_iq_and_role_icon u-hair_bottom_margin"]');
  }

  get followArtistButton() {
    return this.page.locator('div.profile_identity_and_description-action_row follow-button a');
  }

  get followersTab() {
    return this.page.locator(`h3[ng-click="$ctrl.change_state('followers')"]`);
  }

  get userFollower() {
    return this.page.locator('profile-followers a[ng-href="https://genius.com/SmallShlepa"]');
  }

  get numberOfFollowers() {
    return this.page.locator('span[class="profile_tabs-tab-count"]');
  }

  get showAllAlbumsButton() {
    return this.page.locator('a[ng-href="/artists/Pain-swe/albums"] div');
  }

  get viewAllAlbumsButton() {
    return this.page.locator('div[set-path-on-modal="/artists/Pain-swe/albums"] a[ng-href="/artists/Pain-swe/albums"]');
  }

  get filterListButton() {
    return this.page.locator('span[type="button"]');
  }

  get popularityFilterButton() {
    return this.page.locator('//li[@class="SortSelect__Option-sc-19u5fck-1 hUbGjq" and contains(text(),"Popularity")]');
  }

  get topPopularAlbum() {
    return this.page.locator('//li[@class="ListItem__Container-sc-122yj9e-0 eRBVjI"]//h3[contains(text(),"")]').first();
  }

  async sortArtistAlbumsByPopularity() {
    await this.showAllAlbumsButton.click();
    await this.viewAllAlbumsButton.click();
    await this.filterListButton.click();
    await this.popularityFilterButton.click();
  }
}

module.exports = ArtistPage;
