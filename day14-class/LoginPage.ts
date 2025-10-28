import { ILogin } from "../day14-class/Interface";
import { BasePage } from "./BasePage";
import { Page, expect } from "@playwright/test";

export class LoginPage extends BasePage implements ILogin {
  private usernameInput = "#userEmail";
  private passwordInput = "#userPass";
  private loginButton = "#loginBtn";
  private logoutButton = "#logoutBtn";

  constructor(page: Page) {
    super(page);
  }

  async verifyPage(): Promise<void> {
    await expect(this.page.locator(this.loginButton)).toBeVisible();
    console.log("✅ User Login page loaded");
  }

  async login(username: string, password: string): Promise<void> {
    console.log("🔹 Logging in as normal user...");
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
  }

  async logout(): Promise<void> {
    console.log("🔹 Logging out user...");
    await this.page.click(this.logoutButton);
  }
}
