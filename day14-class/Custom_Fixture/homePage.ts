import { Page } from "@playwright/test";

export class HomePage {
  constructor(private page: Page) {}

  async clickOnAccounts() {
    await this.page.click("(//span[text()='Accounts'])[1]");
  }

  async clickOnLeads() {
    await this.page.click("(//span[text()='Leads'])[1]");
  }
}
