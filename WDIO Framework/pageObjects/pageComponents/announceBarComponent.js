import { BaseComponents } from './baseComponents.js';

class AnnounceBarComponent extends BaseComponents {
  constructor() {
    super();
  }

  get closeAnnounceButton() {
    return $('button[aria-label="Close"]');
  }

  get announceBar() {
    return $('div.content_knG7.announcementBarContent_xLdY');
  }

  async closeAnnouncement() {
    await this.closeAnnounceButton.click();
  }

  async doesAnnounceBarExist() {
    await this.announceBar.isExisting();
  }
}

export default new AnnounceBarComponent();
