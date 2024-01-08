import { chromium } from '@playwright/test';
const { ProfileCleaner, FollowingsCleaner } = require('../helpers/cleaner');
const Loginer = require('../helpers/loginer');

async function globalTeardown() {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  const loginer = new Loginer(page);
  const profileCleaner = new ProfileCleaner(page);
  const followingsCleaner = new FollowingsCleaner(page);

  await loginer.logInUser(page);

  await profileCleaner.cleanUpBio(page);

  await profileCleaner.cleanUpUserCoverArt(page);

  await followingsCleaner.unfollowArtist(page);

  await followingsCleaner.unfollowGeniusRock(page);

  await browser.close();
}

export default globalTeardown;
