const { test, expect } = require('@playwright/test');
const Base = require('../page-objects/base');
const Search = require('../page-objects/components/search');

test.describe('Genius search tests', function () {
  let base;
  let search;

  test.beforeEach(async ({ page }) => {
    base = new Base(page);
    search = new Search(page);
    await base.navigate('https://genius.com/');
  });

  test.describe('Genius search positive tests', function () {
    test('Should check if graph artists contains satysfying link to artist', async ({ page }) => {
      const searchInput = 'slipknot';
      await search.searchByText(searchInput);
      const searchResultLink = 'https://genius.com/artists/Slipknot';
      await expect(await search.searchResult).toHaveAttribute('ng-href', searchResultLink);
    });
  });

  test.describe('Genius search negative tests', function () {
    test('Should not search when input is empty', async ({ page }) => {
      const searchInput = '';
      await search.searchByText(searchInput);
      await expect(await page.url()).toBe('https://genius.com/');
    });

    test('Should not search when search input contains only spaces', async ({ page }) => {
      const searchInput = '     ';
      await search.searchByText(searchInput);
      await expect(await page.url()).toBe('https://genius.com/');
    });

    test('Should find no results when search by url', async ({ page }) => {
      const searchInput = 'https://playwright.dev/';
      await search.searchByText(searchInput);
      await expect(search.noSearchResult).toHaveText('No results');
    });
  });
});
