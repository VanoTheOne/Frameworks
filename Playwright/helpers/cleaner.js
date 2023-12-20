const Base = require('../page-objects/base');
const { expect } = require('@playwright/test');

class Cleaner extends Base {
  constructor(page) {
    super(page);
  }

  get profileButton() {
    return this.page.locator('div.PageHeaderMenu__Container-sc-13myo8l-0');
  }

  get viewProfileButton() {
    return this.page.locator(`a[href="https://genius.com/SmallShlepa"]`);
  }

  get editButton() {
    return this.page.locator('div.square_button');
  }

  get userBioInput() {
    return this.page.locator('textarea[ng-required="is_required"]');
  }

  get saveProfileEdit() {
    return this.page.locator('//div/button[@class="square_button square_button--green u-small_bottom_margin"]');
  }

  get defaultBio() {
    return this.page.locator('div.rich_text_formatting span');
  }

  get forumsButton() {
    return this.page.locator('a[href="/forums"]');
  }

  get rockGeniusForumButton() {
    return this.page.locator('a[href="/rock-genius"]');
  }

  get followRockGeniusForumButton() {
    return this.page.locator('#discussion_list a[href="/groups/6/follows"]');
  }

  async cleanUpBio(page) {
    await page.goto('https://genius.com/');
    await this.profileButton.click();
    await this.viewProfileButton.click();
    await this.editButton.click();
    await this.userBioInput.click();
    await this.userBioInput.fill('');
    await this.saveProfileEdit.click();

    await expect(await this.defaultBio).toHaveText('SmallShlepa is keeping quiet for now');
  }

  async cleanUpRockFollowing(page) {
    await page.goto('https://genius.com/');
    await this.forumsButton.click();
    await this.rockGeniusForumButton.click();
    await this.followRockGeniusForumButton.click();

    await expect(await this.followRockGeniusForumButton).toHaveText('Follow');
  }

  //   export async function cleanUpAvatar(page) {
  //   await page.goto('https://genius.com/');
  //   await page.locator('div.PageHeaderMenu__Container-sc-13myo8l-0').click();
  //   await page.locator('a[href="https://genius.com/SmallShlepa"]').click();
  //   await page.locator('div.square_button').click();
  //   await page.locator('div.image_upload_button.image_upload_button--avatar.clipped_background_image').click();
  //   const iframeLocator = page.frameLocator('div#filepicker_shade iframe#filepicker_dialog');
  //   await iframeLocator.locator('//a[@ng-href="#/url"]').click();
  //   await iframeLocator.locator('#linkAddress').click();
  //   await iframeLocator.locator('#linkAddress').fill('https://assets.genius.com/images/default_avatar_300.png');
  //   await iframeLocator.locator('input[type="submit"]').click();
  //   await iframeLocator.locator('#e2e_url_select').click();
  //   await iframeLocator.locator('div button[once-if="vm.canS]kip"]').isVisible();
  //   await iframeLocator.locator('div button[once-if="vm.canS]kip"]').click();
  //   await page.locator('div button[ng-disabled="$ctrl.saving"]').isVisible();
  //   await page.locator('div button[ng-disabled="$ctrl.saving"]').click();

  //   await expect(await profilePage.userProfileAvatar.getAttribute('style')).toContain('https://assets.genius.com/images/default_avatar_300.png');
  // }
}

module.exports = Cleaner;
