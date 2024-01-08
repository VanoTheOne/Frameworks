const { expect } = require('@playwright/test');
const Base = require('../page-objects/base');
const Header = require('../page-objects/components/header');
const ProfilePage = require('../page-objects/profilePage');
const ForumsPage = require('../page-objects/forumsPage');
const ArtistPage = require('../page-objects/artistsAndSongs/artistPage');

class ProfileCleaner extends Base {
  constructor(page) {
    super(page);
    this.header = new Header(page);
    this.profilePage = new ProfilePage(page);
  }

  get editButton() {
    return this.page.locator('div.square_button');
  }

  get userBioInput() {
    return this.page.locator('textarea[ng-required="is_required"]');
  }

  get saveProfileEdit() {
    return this.page.locator('//div/button[@class="square_button square_button--green u-small_bottom_margin"]');
  }

  async cleanUpBio(page) {
    await page.goto('https://genius.com/');
    await this.header.openUserProfile();
    await this.profilePage.createUserBio('');
    await expect(await this.profilePage.defaultBio).toHaveText('SmallShlepa is keeping quiet for now');
  }

  async cleanUpUserCoverArt(page) {
    await page.goto('https://genius.com/');
    await this.header.openUserProfile();
    await this.profilePage.changeUserCoverArt('https://assets.genius.com/images/default_avatar_300.png');
    await expect(await this.profilePage.userProfileCoverArt).toBeVisible();
  }
}

class FollowingsCleaner extends Base {
  constructor(page) {
    super(page);
    this.header = new Header(page);
    this.forumsPage = new ForumsPage(page);
    this.artistPage = new ArtistPage(page);
  }

  async unfollowGeniusRock(page) {
    await page.goto('https://genius.com/');
    await this.header.forumsButton.click();
    await this.forumsPage.openRockGeniusForum();
    await expect(await this.forumsPage.followRockGeniusForumButton).toHaveText('Follow');
  }

  get followButtonTest() {
    return this.page.locator('follow-button span');
  }

  async unfollowArtist(page) {
    await page.goto('https://genius.com/artists/Pain-swe');
    await this.artistPage.followArtistButton.click();
    await expect(await this.followButtonTest).toHaveText('Follow');
  }
}

module.exports = { ProfileCleaner, FollowingsCleaner };
