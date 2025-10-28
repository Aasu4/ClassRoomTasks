import { Page } from "@playwright/test";

export class ContactsPage {
  constructor(private page: Page) {}

  async clickCreateContact() {
    await this.page.click("text=Create Contact");
  }

  async fillContactDetails(firstName: string, lastName: string) {
    await this.page.fill("#firstNameField", firstName);
    await this.page.fill("#lastNameField", lastName);
  }

  async saveContact() {
    await this.page.click(".smallSubmit");
  }
}
