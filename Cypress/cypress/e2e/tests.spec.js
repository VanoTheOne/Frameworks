const mainPage = require('/page-objects/mainPage');
const header = require('/page-objects/components/header');
const artistsListPage = require('/page-objects/artistsListPage');
const footer = require('/page-objects/footer');

describe('Genius main page test', function () {
  it('Should check if default filter parameters are selected', () => {
    mainPage.navigate('https://genius.com/');
    header.chartsButtonClick();
    mainPage.chartsFilterButtonClick();
    cy.wrap([mainPage.songSelected, mainPage.allSelected, mainPage.daySelected]).should('exist');
  });

  it('Should check if user can go to the page About genius from main page', () => {
    mainPage.navigate('https://genius.com/');
    mainPage.aboutGeniusButtonClick();
    cy.get('span.SongHeaderdesktop__HiddenMask-sc-1effuo1-11.iMpFIj').should('have.text', 'About Genius');
  });
});

describe('Genius footer tests', function () {
  it('Should check if user can find needed artist using footer letter navigation', () => {
    mainPage.navigate('https://genius.com/');
    footer.chooseArtistByLetter();
    artistsListPage.chooseArtist();
    cy.get('div.profile_identity h1').should('contain.text', 'Pain (SWE)');
  });

  it('Should check if user can see all hot songs using footer View all button', () => {
    mainPage.navigate('https://genius.com/');
    footer.viewAllButtonClick();
    cy.get('#main h1').should('contain.text', 'Hot Songs');
  });
});
