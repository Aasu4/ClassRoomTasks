import { test as base } from '@playwright/test';
import { LoginPage } from '../Custom_Fixture/LoginPage';
import { HomePage } from '../Custom_Fixture/HomePage';
import { AccountsPage } from '../Custom_Fixture/AccountsPage';

export const test = base.extend<{
  loginPage: LoginPage;
  homePage: HomePage;
  accountsPage: AccountsPage;
}>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  accountsPage: async ({ page }, use) => {
    await use(new AccountsPage(page));
  },
});
