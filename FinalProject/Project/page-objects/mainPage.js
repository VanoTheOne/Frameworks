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

  get everyChartSong() {
    return this.page.locator('div#top-songs .PageGriddesktop-hg04e9-0.ChartItemdesktop__Row-sc-3bmioe-0.qsIlk');
  }

  get lastChartSong() {
    return this.page.locator('//div[@id="top-songs"]//div[@class and contains (text(),"100")]');
  }

  get artistsByLetter() {
    return this.page.locator('a[href="/artists-index/p"]');
  }

  get neededArtist() {
    return this.page.locator('li a[href="https://genius.com/artists/Pain-swe"]');
  }

  async openFullSongsList(page) {
    while (await this.loadMoreButton.isEnabled()) {
      await this.loadMoreButton.click();
      await page.waitForTimeout(2000);
      if (await this.lastChartSong.isVisible()) {
        break;
      }
    }
  }
}

module.exports = MainPage;