import { Page } from "@playwright/test";

export class LeadsPage {
  constructor(private page: Page) {}

  async clickCreateLead() {
    await this.page.click("text=Create Lead");
  }

  async enterLeadDetails(name: string, company: string) {
    await this.page.fill("#createLeadForm_firstName", name);
    await this.page.fill("#createLeadForm_companyName", company);
  }

  async submitLead() {
    await this.page.click("text=Create Lead");
  }
}
