import { BaseComponents } from './baseComponents.js';

class CopilotComponent extends BaseComponents {
  constructor() {
    super();
  }

  get copilotButton() {
    return $('div.ms-rotate-0.ms-flex');
  }

  get copilotQuestion() {
    return $('//div[contains(text(),"How to set session script timeout?")]');
  }

  get copilotAnswer() {
    return $('//div[contains(@class,"ms-prose ms-float-left")]//code[contains(text(),"setTimeout")]');
  }

  async copilotButtonClick() {
    await this.copilotButton.click();
  }

  async copilotAskQuestion() {
    await this.copilotQuestion.click();
  }

  async copilotWaitForAnswer() {
    await this.copilotAnswer.isDisplayed();
  }

  async copilotAnswerContainment() {
    const searchedText = await this.copilotAnswer.getText();
    return searchedText;
  }
}

export default new CopilotComponent();
