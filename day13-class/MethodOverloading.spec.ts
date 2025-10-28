import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  // 🔹 Overload signatures
  async login(username: string, password: string): Promise<void>;
  async login(token: string): Promise<void>;

  // 🔹 Actual implementation
  async login(arg1: string, arg2?: string): Promise<void> {
    if (arg2) {
      // Login with username & password
      await this.page.fill('#username', arg1);
      await this.page.fill('#password', arg2);
      await this.page.click('#loginButton');
    } else {
      // Login with token
      await this.page.evaluate((t) => localStorage.setItem('token', t), arg1);
      await this.page.goto('/home');
    }
  }
}
