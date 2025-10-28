import { Page } from "@playwright/test";

export class LoginPage {
  constructor(private page: Page) {}

  async loadUrl() {
    await this.page.goto("https://login.salesforce.com/?locale=in");
  }

  async loginInfo(username: string, password: string) {
    await this.page.fill("#username", username);
    await this.page.fill("#password", password);
  }

  async clickLogin() {
    await this.page.click("#Login");
  }
}
