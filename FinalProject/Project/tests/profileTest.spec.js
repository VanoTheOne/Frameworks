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

  test.describe('Genius user profile edit positive tests', function () {
    test('Should check if user changed default avatar to new by url', async ({ page }) => {
      await header.openUserProfile();
      const newUserAvatarUrl = 'https://cs14.pikabu.ru/post_img/big/2022/02/01/10/1643732781178859636.png';
      await profilePage.searchUserAvatar(newUserAvatarUrl);
      await profilePage.saveUserAvatar();
      const defaultUserAvatarUrl = 'https://assets.genius.com/images/default_avatar_300.png';
      await expect(await profilePage.userProfileAvatar.getAttribute('style')).not.toContain(defaultUserAvatarUrl);
    });

    test('Should check if user changed default cover art to new', async ({ page }) => {
      await header.openUserProfile();
      const newUserCoverArtUrl = 'https://cs14.pikabu.ru/post_img/2021/05/07/6/1620374577165113064.png';
      await profilePage.changeUserCoverArt(newUserCoverArtUrl);
      const defaultUserCoverArtUrl = 'https://assets.genius.com/images/default_avatar_300.png';
      await expect(await profilePage.userProfileCoverArt.getAttribute('style')).not.toContain(defaultUserCoverArtUrl);
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

  test.describe('Genius user profile edit negative tests', function () {
    test('Username should not be changed to already taken username', async ({ page }) => {
      await header.openUserProfile();
      const newUserName = 'BigShlepa';
      await profilePage.changeUserName(newUserName);
      const warning = 'That nickname is taken!';
      await expect(await profilePage.userNameError).toContainText(warning);
    });

    test('User bio should not be displayed if filled only with spaces', async ({ page }) => {
      await header.openUserProfile();
      const userBio = '     ';
      await profilePage.createUserBio(userBio);
      await expect(await profilePage.defaultBio).toHaveText('SmallShlepa is keeping quiet for now');
    });

    test('Select button should be disabled when input is empty while changing avatar', async ({ page }) => {
      await header.openUserProfile();
      const emptyUserAvatarUrl = '';
      await profilePage.searchUserAvatar(emptyUserAvatarUrl);
      await expect(await profilePage.disabledSelectButton).toHaveAttribute('disabled');
    });

    test('Select button should be disabled and alert should apper when input is not a link while changing avatar', async ({ page }) => {
      await header.openUserProfile();
      const invalidUserAvatarUrl = 'hello';
      await profilePage.searchUserAvatar(invalidUserAvatarUrl);
      await expect(await profilePage.disabledSelectButton).toHaveAttribute('disabled');
      await expect(await profilePage.alertInvalidInput).toBeVisible();
    });

    test('Alert should apper when input contains link leading not to the image while changing avatar', async ({ page }) => {
      await header.openUserProfile();
      const invalidUserAvatarUrl = 'https://playwright.dev/';
      await profilePage.searchUserAvatar(invalidUserAvatarUrl);
      await profilePage.selectButton.click();
      await expect(await profilePage.alertInvalidInput).toBeVisible();
    });
  });
});