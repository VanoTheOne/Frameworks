const Base = require('./base');

class MainPage extends Base {
  constructor(page) {
    super(page);
  }

  get chartsFilterButton() {
    return this.page.locator('.SquareManySelects__Container-sc-1kktot3-1.dqbVnf');
  }

  get songSelected() {
    return this.page.locator('//div[@class and contains(text(),"Songs")]/child::*');
  }

  get allSelected() {
    return this.page.locator('//div[@class and contains(text(),"All")]/child::*');
  }

  get daySelected() {
    return this.page.locator('//div[@class and contains(text(),"Day")]/child::*');
  }

  get rockSelected() {
    return this.page.locator('//div[@class and contains(text(),"Rock")]');
  }

  get allTimeSelected() {
    return this.page.locator('//div[@class and contains(text(),"All Time")]');
  }

  get loadMoreButton() {
    return this.page.locator('div.PageGridCenter-bmkh37-0.Charts__LoadMore-sc-1re0f44-0.fwSRli > div');
  }

  get lastChartSong() {
    return this.page.locator('//div[@class and contains (text(),"100")]');
  }

  async chartsFilterButtonClick() {
    await this.chartsFilterButton.click();
  }

  async fullSongsList(page) {
    while (await this.loadMoreButton.isEnabled()) {
      await this.loadMoreButton.click();
      await page.waitForTimeout(2000);
      if (await this.loadMoreButton.isHidden()) {
        break;
      }
    }
  }
}

module.exports = MainPage;
