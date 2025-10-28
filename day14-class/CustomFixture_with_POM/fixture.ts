import { test as base } from "@playwright/test";
import { LoginPage } from "../CustomFixture_with_POM/login";
import { HomePage } from "../CustomFixture_with_POM/home";
import { AccountsPage } from "../CustomFixture_with_POM/accounts";
import { LeadsPage } from "../CustomFixture_with_POM/leads";
import { ContactsPage } from "../CustomFixture_with_POM/contacts";

export const test = base.extend<{
  loginPage: LoginPage;
  homePage: HomePage;
  accountsPage: AccountsPage;
  leadsPage: LeadsPage;
  contactsPage: ContactsPage;
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
  leadsPage: async ({ page }, use) => {
    await use(new LeadsPage(page));
  },
  contactsPage: async ({ page }, use) => {
    await use(new ContactsPage(page));
  },
});
/*
Real Project structure:
📦 playwright-project/
 ┣ 📂 tests/
 ┃ ┣ createAccount.spec.ts
 ┃ ┣ createLead.spec.ts
 ┃ ┗ createContact.spec.ts
 ┣ 📂 pages/
 ┃ ┣ login.page.ts
 ┃ ┣ home.page.ts
 ┃ ┣ accounts.page.ts
 ┃ ┣ leads.page.ts
 ┃ ┣ contacts.page.ts
 ┃ ┗ pageManager.ts
 ┣ 📂 fixtures/
 ┃ ┗ base.fixture.ts
 ┣ 📂 utils/
 ┃ ┗ testData.ts
 ┣ playwright.config.ts
 ┗ package.json
*/

/*or
fixture.ts
import { test as base } from "@playwright/test";
import { PageManager } from "../pages/pageManager";

export const test = base.extend<{ pages: PageManager }>({
  pages: async ({ page }, use) => {
    await use(new PageManager(page));
  },
});
-----------------------------------------------------------
pageManager.ts
import { Page } from "@playwright/test";
import { LoginPage } from "./LoginPage";
import { HomePage } from "./HomePage";
import { AccountsPage } from "./AccountsPage";
import { LeadsPage } from "./LeadsPage";
import { ContactsPage } from "./ContactsPage";

export class PageManager {
  constructor(private page: Page) {}

  loginPage = new LoginPage(this.page);
  homePage = new HomePage(this.page);
  accountsPage = new AccountsPage(this.page);
  leadsPage = new LeadsPage(this.page);
  contactsPage = new ContactsPage(this.page);
}
----------------------------------------------------
Runner-Test file:
import { test } from "../fixtures/fixture";

test("Create Account + Lead + Contact Flow", async ({ pages }) => {
  await pages.loginPage.gotoLoginPage();
  await pages.loginPage.login("DemoSalesManager", "crmsfa");
  await pages.homePage.clickCRMSFA();
  await pages.accountsPage.createAccount();
  await pages.leadsPage.submitLead();
  await pages.contactsPage.saveContact();
});

*/
