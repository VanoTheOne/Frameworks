const { test, expect } = require('@playwright/test');
const Base = require('../page-objects/base');
const ForumsPage = require('../page-objects/forumsPage');
const Header = require('../page-objects/components/header');

test.describe('Genius forums tests', function () {
  let base;
  let header;
  let forumsPage;

  test.beforeEach(async ({ page }) => {
    base = new Base(page);
    header = new Header(page);
    forumsPage = new ForumsPage(page);
    await base.navigate('https://genius.com/');
  });

  test.describe('Genius forums positive tests', function () {
    test('Should check if user following rock genius forum', async ({ page }) => {
      await header.forumsButton.click();
      await forumsPage.openRockGeniusForum();
      await expect(await forumsPage.followingRockGeniusForum).toHaveText('Following');
    });

    test('Should check if search in forums works', async ({ page }) => {
      await header.forumsButton.click();
      const searchText = 'slipknot';
      await forumsPage.searchInAllForums(searchText);
      await expect(await forumsPage.searchForumsResult).toContainText(`Slipknot`);
    });
  });

  test.describe('Genius forums negative tests', function () {
    test('Should remain at the same page and alert should apper if search query contains less than 3 characters', async ({ page }) => {
      await header.forumsButton.click();
      const searchText = '';
      await forumsPage.searchInAllForums(searchText);
      await expect(await page.url()).toBe('https://genius.com/forums');
      await expect(await forumsPage.searchForumsAlert).toBeVisible();
    });
  });
});
