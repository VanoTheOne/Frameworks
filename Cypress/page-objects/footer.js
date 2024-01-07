const Base = require('./base');

class Footer extends Base {
  constructor() {
    super();
  }

  get allArtistsByLetter() {
    return cy.get('a[href="/artists-index/p"]');
  }

  get viewAllButton() {
    return cy.get('a[href="/hot-songs"] span');
  }

  chooseArtistByLetter() {
    this.allArtistsByLetter.click();
  }

  viewAllButtonClick() {
    this.viewAllButton.click();
  }
}

module.exports = new Footer();
