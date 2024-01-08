const Base = require('./base');

class ProfilePage extends Base {
  constructor(page) {
    super(page);
    this.iframeLocator = this.page.frameLocator('div#filepicker_shade iframe#filepicker_dialog');
  }

  get editButton() {
    return this.page.locator('div.square_button');
  }

  get userNameField() {
    return this.page.locator('input[placeholder="Username"]');
  }

  get userNameError() {
    return this.page.locator('div[ng-if="$ctrl.errors"]');
  }

  get avatarButton() {
    return this.page.locator('div.image_upload_button.image_upload_button--avatar.clipped_background_image');
  }

  get coverArtButton() {
    return this.page.locator('image-upload-button[default-image="$ctrl.editable_user.custom_header_image_url"] div.image_upload_button');
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

  get disabledSelectButton() {
    return this.iframeLocator.locator('button[ng-if="!vm.fileItem"]');
  }

  get alertInvalidInput() {
    return this.iframeLocator.locator('span.ng-scope span');
  }

  get skipImageButton() {
    return this.iframeLocator.locator('div button[once-if="vm.canSkip"]');
  }

  get saveProfileEdit() {
    return this.page.locator('//div/button[@class="square_button square_button--green u-small_bottom_margin"]');
  }

  get userProfileAvatar() {
    return this.page.locator('.banner_image-blurred_image');
  }

  get userProfileCoverArt() {
    return this.page.locator('div.banner_image-blurred_image.clipped_background_image');
  }

  get userBioAddedImage() {
    return this.page.locator('profile-user-pane img');
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

  get defaultBio() {
    return this.page.locator('div.rich_text_formatting span');
  }

  get userEmailInput() {
    return this.page.locator('input[ng-model="$ctrl.editable_user.email"]');
  }

  async changeUserName(newUserName) {
    await this.editButton.click();
    await this.userNameField.click();
    await this.userNameField.fill(newUserName);
    await this.saveProfileEdit.click();
  }

  async searchUserAvatar(imageURL) {
    await this.editButton.click();
    await this.avatarButton.click();
    await this.chooseLinkButton.click();
    await this.linkInputField.click();
    await this.linkInputField.fill(imageURL);
    await this.searchImageButton.click();
  }

  async saveUserAvatar() {
    await this.selectButton.click();
    await this.skipImageButton.click();
    await this.saveProfileEdit.click();
  }

  async changeUserCoverArt(imageURL) {
    await this.editButton.click();
    await this.coverArtButton.click();
    await this.chooseLinkButton.click();
    await this.linkInputField.click();
    await this.linkInputField.fill(imageURL);
    await this.searchImageButton.click();
    await this.selectButton.click();
    await this.saveProfileEdit.click();
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
