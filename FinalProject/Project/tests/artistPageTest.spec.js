const { test, expect } = require('@playwright/test');
const Base = require('../page-objects/base');
const MainPage = require('../page-objects/mainPage');
const ArtistPage = require('../page-objects/artistsAndSongs/artistPage');
const ArtistsListPage = require('../page-objects/artistsAndSongs/artistsListPage');

test.describe('Genius artist page tests', function () {
  let base;
  let mainPage;
  let artistPage;
  let artistsListPage;

  test.beforeEach(async ({ page }) => {
    base = new Base(page);
    mainPage = new MainPage(page);
    artistPage = new ArtistPage(page);
    artistsListPage = new ArtistsListPage(page);
    await base.navigate('https://genius.com/');
  });

  test.describe('Genius artist page positive tests', function () {
    test('Should check if user can find needed artist through All artists navigation', async ({ page }) => {
      await mainPage.artistsByLetter.click();
      await artistsListPage.searchedArtist.click();
      await expect(await artistPage.artistNameTitle).toHaveText('Pain (SWE)');
    });

    test('Should check if follower displayed at the tap Followers at artist page', async ({ page }) => {
      await base.navigate('https://genius.com/artists/Pain-swe');
      const followersCount = parseInt(await artistPage.numberOfFollowers.innerText(), 10);
      await artistPage.followArtistButton.click();
      await base.reloadPage();
      await artistPage.followersTab.click();
      await expect(await artistPage.userFollower).toHaveAttribute('href', 'https://genius.com/SmallShlepa');
      const newFollowersCount = parseInt(await artistPage.numberOfFollowers.innerText(), 10);
      await expect(await newFollowersCount).toEqual(followersCount + 1);
    });

    test('Should check if the most popular atrist albums is on the top after sorting by popularity', async ({ page }) => {
      await base.navigate('https://genius.com/artists/Pain-swe');
      await artistPage.sortArtistAlbumsByPopularity();
      await expect(await artistPage.topPopularAlbum).toContainText('Nothing Remains the Same');
    });
  });
});
