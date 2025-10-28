//In Playwright, you have common reusable actions like:
/*navigateTo()

takeScreenshot()

waitForElement()

abstract verifyPage()

These are actions that every page needs,
so you put them once in a BasePage (abstract class). */

import { Page } from '@playwright/test';

export abstract class BasePage {
  constructor(protected page: Page) {}

  async navigateTo(url: string) {
    await this.page.goto(url);
  }

  async takeScreenshot(name: string) {
    await this.page.screenshot({ path: `${name}.png` });
  }

  abstract verifyPage(): Promise<void>;
}

//Now every page — LoginPage, DashboardPage, 
// SettingsPage — inherits this and must implement its own verifyPage().
