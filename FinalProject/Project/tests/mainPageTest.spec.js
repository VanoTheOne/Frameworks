const { test, expect } = require('@playwright/test');
const Base = require('../page-objects/base');
const MainPage = require('../page-objects/mainPage');
const Header = require('../page-objects/components/header');

test.describe('Genius main page tests', function () {
  let base;
  let header;
  let mainPage;

  test.beforeEach(async ({ page }) => {
    base = new Base(page);
    header = new Header(page);
    mainPage = new MainPage(page);
    await base.navigate('https://genius.com/');
  });

  test.describe('Genius main page positive tests', function () {
    test('Should check if default filter parameters are selected', async ({ page }) => {
      await header.chartsButton.click();
      await mainPage.chartsFilterButton.click();
      await expect((await mainPage.songSelected) && mainPage.allSelected && mainPage.daySelected).toBeEnabled();
    });

    test('Should check if top 100 songs can be displayed in charts', async ({ page }) => {
      await header.chartsButton.click();
      await mainPage.openFullSongsList(page);
      await expect(await mainPage.lastChartSong).toBeVisible();
    });
  });
});
