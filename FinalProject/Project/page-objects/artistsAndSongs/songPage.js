const Base = require('../base');

class SongPage extends Base {
  constructor(page) {
    super(page);
  }

  get rockGeniusForumButton() {
    return this.page.locator('a[href="/rock-genius"]');
  }

  async openRockGeniusForum() {
    await this.rockGeniusForumButton.click();
    await this.followRockGeniusForumButton.click();
  }
}

module.exports = SongPage;
