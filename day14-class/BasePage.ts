import { Page } from "@playwright/test";

export abstract class BasePage {
  constructor(protected page: Page) {}

  async navigateTo(url: string) {
    console.log(`Navigating to ${url}`);
    await this.page.goto(url);
  }

  async takeScreenshot(name: string) {
    await this.page.screenshot({ path: `${name}.png` });
  }

  abstract verifyPage(): Promise<void>;
}
