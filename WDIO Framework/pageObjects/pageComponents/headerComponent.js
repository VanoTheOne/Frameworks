import { BaseComponents } from './baseComponents.js';

class HeaderComponent extends BaseComponents {
  constructor() {
    super();
  }

  get pageModeButton() {
    return $('.clean-btn.toggleButton_gllP');
  }

  get lightModeButtonAttribute() {
    return $('html[data-theme]');
  }

  get searchButton() {
    return $('.DocSearch');
  }

  async switchLightMode() {
    await this.pageModeButton.click();
  }

  async lightModeChosen() {
    const lightMode = await this.lightModeButtonAttribute.getAttribute('data-theme');
    return lightMode;
  }

  async searchButtonClick() {
    await this.searchButton.click();
  }
}

export default new HeaderComponent();
