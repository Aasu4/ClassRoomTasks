// pages/LoginPage.ts
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
  async navigateTo(url: string) {
    console.log("Navigating to Login Page...");
    await super.navigateTo(url); // still using base method
  }

  async login(username: string, password: string) {
    await this.page.fill('#username', username);
    await this.page.fill('#password', password);
    await this.page.click('#login');
  }
}

// pages/HomePage.ts
export class HomePage extends BasePage {
  async navigateTo(url: string) {
    console.log("Navigating to Home Page...");
    await super.navigateTo(url);
  }

  async verifyWelcomeText() {
    return await this.page.textContent('.welcome');
  }
}
