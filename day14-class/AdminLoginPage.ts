import { ILogin } from "../day14-class/Interface";
import { BasePage } from "./BasePage";
import { Page, expect } from "@playwright/test";

export class AdminLoginPage extends BasePage implements ILogin {
  private adminField = "#adminUsername";
  private adminKeyField = "#adminKey";
  private adminSubmit = "#submitAdmin";
  private logoutLink = "#adminLogout";

  constructor(page: Page) {
    super(page);
  }

  async verifyPage(): Promise<void> {
    await expect(this.page.locator(this.adminSubmit)).toBeVisible();
    console.log("✅ Admin Login page loaded");
  }

  async login(username: string, password: string): Promise<void> {
    console.log("🔹 Logging in as ADMIN...");
    // Different locators + maybe 2FA or OTP flow
    await this.page.fill(this.adminField, username);
    await this.page.fill(this.adminKeyField, password);
    await this.page.click(this.adminSubmit);
    // Maybe wait for admin dashboard
    await expect(this.page.locator("text=Admin Dashboard")).toBeVisible();
  }

  async logout(): Promise<void> {
    console.log("🔹 Logging out admin...");
    await this.page.click(this.logoutLink);
  }
}
