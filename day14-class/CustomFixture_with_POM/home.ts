import { Page } from "@playwright/test";

export class HomePage {
  constructor(private page: Page) {}

  async clickCRMSFA() {
    await this.page.click("text=CRM/SFA");
  }
}
