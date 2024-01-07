const Base = require('./base');

class ArtistsListPage extends Base {
  constructor() {
    super();
  }

  get neededArtist() {
    return cy.get('li a[href="https://genius.com/artists/Pain-swe"]');
  }

  chooseArtist() {
    this.neededArtist.click();
  }
}

module.exports = new ArtistsListPage();
