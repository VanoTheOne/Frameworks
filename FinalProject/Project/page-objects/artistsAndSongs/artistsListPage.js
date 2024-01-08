const Base = require('../base');

class ArtistsListPage extends Base {
  constructor(page) {
    super(page);
  }

  get searchedArtist() {
    return this.page.locator('li a[href="https://genius.com/artists/Pain-swe"]');
  }
}

module.exports = ArtistsListPage;
