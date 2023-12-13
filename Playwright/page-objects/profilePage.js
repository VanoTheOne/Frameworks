const Base = require('./base');

class ProfilePage extends Base {
  constructor(page) {
    super(page);
  }

  get editButton() {
    return this.page.locator('div.square_button');
  }

  get avatarButton() {
    return this.page.locator('div.image_upload_button.image_upload_button--avatar.clipped_background_image');
  }

  get chooseLinkButton() {
    const iframeLocator = this.page.frameLocator('#filepicker_dialog');
    return iframeLocator.locator('//a[@ng-href="#/url"]');
  }

  get linkInputField() {
    const iframeLocator = this.page.frameLocator('#filepicker_dialog');
    return iframeLocator.locator('#linkAddress');
  }

  get searchImageButton() {
    const iframeLocator = this.page.frameLocator('#filepicker_dialog');
    return iframeLocator.locator('input[type="submit"]');
  }

  get selectButton() {
    const iframeLocator = this.page.frameLocator('#filepicker_dialog');
    return iframeLocator.locator('#e2e_url_select');
  }

  get saveImageButton() {
    const iframeLocator = this.page.frameLocator('#filepicker_dialog');
    return iframeLocator.locator('//button[@class="btn btn--primary ng-binding"]');
  }

  get saveProfileEdit() {
    return this.page.locator('//div/button[@class="square_button square_button--green u-small_bottom_margin"]');
  }

  get userProfileAvatar() {
    return this.page.locator('.banner_image-blurred_image');
  }

  get userBioInput() {
    return this.page.locator('textarea[ng-required="is_required"]');
  }

  get userDisplayedBio() {
    return this.page.locator('div[ng-if="$ctrl.user.about_me.html"] p');
  }

  async changeUserAvatar(imageURL) {
    await this.editButton.click();
    await this.avatarButton.click();
    await this.chooseLinkButton.click();
    await this.linkInputField.click();
    await this.linkInputField.fill(imageURL);
    await this.searchImageButton.click();
    await this.selectButton.click();
    await this.saveImageButton.click();
    await this.saveProfileEdit.click();
  }

  async createUserBio(bio) {
    await this.editButton.click();
    await this.userBioInput.click();
    await this.userBioInput.fill(bio);
    await this.saveProfileEdit.click();
  }
}

module.exports = ProfilePage;
