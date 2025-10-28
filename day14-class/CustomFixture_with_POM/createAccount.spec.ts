import { test } from "../CustomFixture_with_POM/fixture";
import { LeadsPage } from "../CustomFixture_with_POM/leads";

test("Create Account Flow", async ({ loginPage, homePage, accountsPage, leadsPage, contactsPage }) => {
  await loginPage.gotoLoginPage();
  await loginPage.login("DemoSalesManager", "crmsfa");
  await homePage.clickCRMSFA();
  await accountsPage.createAccount();
  await leadsPage.submitLead();
  await contactsPage.saveContact();
});
