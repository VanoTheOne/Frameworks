import { expect } from 'chai';
import { Key } from 'webdriverio';
import homePage from '../pageObjects/homePage.js';
import getStartedPage from '../pageObjects/getStartedPage.js';
import announceBarComponent from '../pageObjects/pageComponents/announceBarComponent.js';
import headerComponent from '../pageObjects/pageComponents/headerComponent.js';
import copilotComponent from '../pageObjects/pageComponents/copilotComponent.js';
import searchComponent from '../pageObjects/pageComponents/searchComponent.js';

describe(`Announcement bar test`, async () => {
  it(`Announcement should not be displayed after page refreshing if it was closed`, async () => {
    await homePage.navigate('https://webdriver.io/');
    await announceBarComponent.closeAnnouncement(announceBarComponent.closeAnnounceButton);
    await homePage.refreshPage();
    const announcementBar = await announceBarComponent.announceBar.isExisting(announceBarComponent.doesAnnounceBarExist);
    expect(announcementBar).to.be.false;
  });
});

describe(`Switch light theme test`, async () => {
  it(`Should change the light theme to the dark or viseversa`, async () => {
    await homePage.navigate('https://webdriver.io/');
    const currentMode = await headerComponent.lightModeChosen();
    if (currentMode === 'light') {
      await headerComponent.switchLightMode(headerComponent.pageModeButton);
      expect(await headerComponent.lightModeChosen()).to.equal('dark');
    } else {
      await headerComponent.switchLightMode(headerComponent.pageModeButton);
      expect(await headerComponent.lightModeChosen()).to.equal('light');
    }
  });

  it(`Should change the light theme back or viseversa`, async () => {
    const currentMode = await headerComponent.lightModeChosen();
    if (currentMode === 'dark') {
      await headerComponent.switchLightMode(headerComponent.pageModeButton);
      expect(await headerComponent.lightModeChosen()).to.equal('light');
    } else {
      await headerComponent.switchLightMode(headerComponent.pageModeButton);
      expect(await headerComponent.lightModeChosen()).to.equal('dark');
    }
  });
});

describe(`WebdriverIO AI Copilot test`, async () => {
  it(`WebdriverIO AI Copilot should give response containing function "setTimeout" to proposed request "How to set session script timeout?"`, async () => {
    await homePage.navigate('https://webdriver.io/');
    await copilotComponent.copilotButtonClick(copilotComponent.copilotButton);
    await copilotComponent.copilotAskQuestion(copilotComponent.copilotQuestion);
    await copilotComponent.copilotWaitForAnswer(copilotComponent.copilotAnswer);
    const searchedText = await copilotComponent.copilotAnswerContainment();
    expect(await copilotComponent.copilotAnswer.getText(copilotComponent.copilotWaitForAnswer)).to.contain(searchedText);
  });
});

describe(`Get started with WDIO tab test`, async () => {
  it(`Should check if code line was copied the right way`, async () => {
    await homePage.navigate('https://webdriver.io/');
    await getStartedPage.getStardedButtonCLick(getStartedPage.getStartedButton);
    await getStartedPage.scrollToObject(getStartedPage.neededObject);
    await getStartedPage.copyButtonClick(getStartedPage.copyButton);
    await headerComponent.searchButtonClick(headerComponent.searchButton);
    await searchComponent.searchInputClick(searchComponent.searchInput);
    await getStartedPage.pressKey([Key.Ctrl, 'v']);
    const copyedCode = await getStartedPage.neededObject.getText();
    expect(await searchComponent.searchInput.getValue()).to.equal(copyedCode);
  });
});
