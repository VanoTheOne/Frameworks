const Base = require('./base');

class ProfilePage extends Base {
  constructor(page) {
    super(page);
    this.iframeLocator = this.page.frameLocator('div#filepicker_shade iframe#filepicker_dialog');
  }

  get editButton() {
    return this.page.locator('div.square_button');
  }

  get addImageButton() {
    return this.page.locator('span[ng-click="ctrl.pick_image()"]');
  }

  get chooseLinkButton() {
    return this.iframeLocator.locator('//a[@ng-href="#/url"]');
  }

  get linkInputField() {
    return this.iframeLocator.locator('#linkAddress');
  }

  get searchImageButton() {
    return this.iframeLocator.locator('input[type="submit"]');
  }

  get selectButton() {
    return this.iframeLocator.locator('#e2e_url_select');
  }

  get skipImageButton() {
    return this.iframeLocator.locator('div button[once-if="vm.canSkip"]');
  }

  get saveProfileEdit() {
    return this.page.locator('//div/button[@class="square_button square_button--green u-small_bottom_margin"]');
  }

  get userBioInput() {
    return this.page.locator('textarea[ng-required="is_required"]');
  }

  get userBioImage() {
    return this.page.locator('div.white_container img');
  }

  get userDisplayedBio() {
    return this.page.locator('div[ng-if="$ctrl.user.about_me.html"] p').first();
  }

  async createUserBio(bio) {
    await this.editButton.click();
    await this.userBioInput.click();
    await this.userBioInput.fill(bio);
    await this.saveProfileEdit.click();
  }

  async addBioImage(imageURL) {
    await this.editButton.click();
    await this.addImageButton.click();
    await this.chooseLinkButton.click();
    await this.linkInputField.click();
    await this.linkInputField.fill(imageURL);
    await this.searchImageButton.click();
    await this.selectButton.click();
    await this.saveProfileEdit.click();
  }
}

module.exports = ProfilePage;
