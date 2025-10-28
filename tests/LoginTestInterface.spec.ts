import { test } from "@playwright/test";
import { ILogin } from "../day14-class/Interface";
import { LoginPage } from "../day14-class/LoginPage";
import { AdminLoginPage } from "../day14-class/AdminLoginPage";

test("User login flow", async ({ page }) => {
  const userLogin = new LoginPage(page);
  await userLogin.navigateTo("https://example.com/login");
  await userLogin.verifyPage();
  await userLogin.login("user@demo.com", "User@123");
  await userLogin.takeScreenshot("user_dashboard");
  await userLogin.logout();
});

test("Admin login flow", async ({ page }) => {
  const adminLogin = new AdminLoginPage(page);
  await adminLogin.navigateTo("https://example.com/admin");
  await adminLogin.verifyPage();
  await adminLogin.login("admin@demo.com", "Admin@123");
  await adminLogin.takeScreenshot("admin_dashboard");
  await adminLogin.logout();
});
