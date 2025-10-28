// pages/BasePage.ts
import { Page } from "@playwright/test";

export class BasePage {
  constructor(public page: Page) {}

  async navigateTo(url: string) {
    await this.page.goto(url);
  }

  async getTitle() {
    return await this.page.title();
  }
}
