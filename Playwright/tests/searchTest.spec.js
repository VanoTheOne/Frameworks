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

  test('Should check if graph artists contains satysfying link to artist', async ({ page }) => {
    const searchInput = 'slipknot';
    await search.searchByText(searchInput);
    const searchResultLink = 'https://genius.com/artists/Slipknot';
    await expect(search.searchResult).toHaveAttribute('ng-href', searchResultLink);
  });
});
