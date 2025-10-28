import { Page } from "@playwright/test";

export class AccountsPage {
  constructor(private page: Page) {}

  async createAccount() {
    await this.page.click("text=Create Account");
  }
}
