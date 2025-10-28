import { test } from '../Custom_Fixture/baseFixture';

test('Create new Account', async ({ page, loginPage, homePage, accountsPage }) => {
  await loginPage.loadUrl();
  await loginPage.loginInfo('dilipkumar.rajendran@testleaf.com', 'TestLeaf@2025');
  await loginPage.clickLogin();
  await homePage.clickOnAccounts();
  await accountsPage.clickOnNewButton();
});
