import { BasePage } from './basePage.js';

class GetStartedPage extends BasePage {
  constructor() {
    super();
  }

  get getStartedButton() {
    return $('.buttons_pzbO a[href="/docs/gettingstarted"]');
  }

  get neededObject() {
    return $('//span[@class="token plain" and contains(text(),"--suite exampleSuiteName")]');
  }

  get copyButton() {
    return $('//span[contains(text(),"--suite exampleSuiteName")]//ancestor::*[@class="codeBlockContent_biex"]//button[@title="Copy"]');
  }

  async getStardedButtonCLick() {
    await this.getStartedButton.click();
  }

  async scrollToObject() {
    await this.neededObject.scrollIntoView({ block: 'center', inline: 'center' });
  }

  async copyButtonClick() {
    await this.copyButton.click();
  }
}

export default new GetStartedPage();
