const Base = require('../base');

class Header extends Base {
  constructor(page) {
    super(page);
  }

  get profileButton() {
    return this.page.locator('div.PageHeaderMenu__Container-sc-13myo8l-0');
  }

  get viewProfileButton() {
    return this.page.locator(`a[href="https://genius.com/SmallShlepa"]`);
  }

  get chartsButton() {
    return this.page.locator('a[href="/#top-songs"]');
  }

  get forumsButton() {
    return this.page.locator('a[href="/forums"]');
  }

  async openUserProfile() {
    await this.profileButton.click();
    await this.viewProfileButton.click();
  }
}

module.exports = Header;
