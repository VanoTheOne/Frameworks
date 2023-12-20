const Base = require('../page-objects/base');

class Loginer extends Base {
  constructor(page) {
    super(page);
  }

  get sighInButton() {
    return this.page.locator('//div[@class="PageHeaderAuthLinksdesktop__Container-sc-10sr9hk-1 cDEgGV"]/child::*[2]');
  }

  get loginInputField() {
    return this.page.locator('#user_session_login');
  }

  get passwordInputField() {
    return this.page.locator('#user_session_password');
  }

  get loginButton() {
    return this.page.locator('#user_session_submit');
  }

  async logInUser(page) {
    await page.goto('https://genius.com/');
    await this.sighInButton.click();
    await this.loginInputField.click();
    const login = 'SmallShlepa';
    await this.loginInputField.fill(login);
    await this.passwordInputField.click();
    const password = 'bigshlepa666';
    await this.passwordInputField.fill(password);
    await this.loginButton.click();
  }
}

module.exports = Loginer;
