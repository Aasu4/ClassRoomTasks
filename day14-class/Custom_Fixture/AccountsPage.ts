import { Page } from "@playwright/test";

export class AccountsPage {
  constructor(private page: Page) {}

  async clickOnNewButton() {
    await this.page.click("//div[text()='New']");
  }
}
