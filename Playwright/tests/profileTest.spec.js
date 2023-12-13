const { test, expect } = require('@playwright/test');
const Base = require('../page-objects/base');
const Header = require('../page-objects/components/header');
const ProfilePage = require('../page-objects/profilePage');

test.describe('Genius user profile tests', function () {
  let base;
  let header;
  let profilePage;

  test.beforeEach(async ({ page }) => {
    base = new Base(page);
    header = new Header(page);
    profilePage = new ProfilePage(page);
    await base.navigate('https://genius.com/');
  });

  test('Should check if user changed default avatar to new', async ({ page }) => {
    await header.openUserProfile();
    const newUserAvatarUrl = 'https://cs14.pikabu.ru/post_img/big/2022/02/01/10/1643732781178859636.png';
    await profilePage.changeUserAvatar(newUserAvatarUrl);
    const defaultUserAvatarUrl = 'https://assets.genius.com/images/default_avatar_300.png';
    await expect(await profilePage.userProfileAvatar.getAttribute('style')).not.toEqual(defaultUserAvatarUrl);
  });

  test('Should check if user bio is displayed in profile after creating', async ({ page }) => {
    await header.openUserProfile();
    const userBio = 'This is my test bio';
    await profilePage.createUserBio(userBio);
    await expect(await profilePage.userDisplayedBio).toHaveText(userBio);
  });
});
