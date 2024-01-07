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
}

module.exports = Cleaner;
