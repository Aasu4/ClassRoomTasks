import { test } from '@playwright/test';
import { LoginPage } from '../day13-class/MethodOverLoading.spec';

test('Login using username and password', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login('Aiswarya', 'password123');
});

test('Login using token', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login('abcd12345token');
});
