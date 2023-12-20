const { test, expect } = require('@playwright/test');
const Base = require('../page-objects/base');
const Header = require('../page-objects/components/header');
const ProfilePage = require('../page-objects/profilePage');

test.describe('Genius user profile edit tests', function () {
  let base;
  let header;
  let profilePage;

  test.beforeEach(async ({ page }) => {
    base = new Base(page);
    header = new Header(page);
    profilePage = new ProfilePage(page);
    await base.navigate('https://genius.com/');
  });

  test('Should check if user bio is displayed in profile after creating', async ({ page }) => {
    await header.openUserProfile();
    const userBio = 'This is Big Shlepa profile';
    await profilePage.createUserBio(userBio);
    await expect(await profilePage.userDisplayedBio).toContainText(userBio);
  });

  test('Should check if user additional image is displayed in bio', async ({ page }) => {
    await header.openUserProfile();
    const bioAddImageUrl = 'https://cs14.pikabu.ru/post_img/2022/01/31/10/1643646071166357004.jpg';
    await profilePage.addBioImage(bioAddImageUrl);
    await expect(await profilePage.userBioImage).toBeVisible();
  });
});
