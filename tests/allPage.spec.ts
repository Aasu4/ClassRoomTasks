// tests/example.spec.ts
import { test } from "@playwright/test";
import { BasePage } from "../day13-class/BasePage";
import { LoginPage } from "../day13-class/LoginPage";
import { HomePage } from "../day13-class/LoginPage";


test("Polymorphism example in Playwright", async ({ page }) => {
  let basePage: BasePage;

  // Using LoginPage as BasePage
  basePage = new LoginPage(page);
  await basePage.navigateTo("https://example.com/login");

  // Now switching to HomePage, same variable type!
  basePage = new HomePage(page);
  await basePage.navigateTo("https://example.com/home");

  const title = await basePage.getTitle();
  console.log("Page title:", title);
});
