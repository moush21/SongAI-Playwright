import { test, expect } from "@playwright/test";
import { createRequire } from "module";
import LoginPage from "../src/pages/LoginPage.js";

const require = createRequire(import.meta.url);
const testdata = require("../TestData.json");

test("SongAI Login Page", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await page.goto(testdata["siteURL"] + "auth/login", { waitUntil: "domcontentloaded" });

  await expect.soft(page).toHaveURL(/auth\/login/);
  console.log("Login page URL is correct");

  await expect.soft(loginPage.loginPageTitle).toBeVisible();
  console.log("Login page title is visible");

  await expect.soft(loginPage.loginPageSubtitle).toBeVisible();
  console.log("Login page subtitle is visible");

  await expect.soft(loginPage.orDivider).toBeVisible();
  console.log("Or divider is visible");

  await expect.soft(loginPage.backToHomeLink).toBeVisible();
  console.log("Back to home link is visible");

  await expect.soft(loginPage.emailLabel).toBeVisible();
  console.log("Email label is visible");

  await expect.soft(loginPage.emailInput).toBeVisible();
  console.log("Email input is visible");

  await expect.soft(loginPage.passwordLabel).toBeVisible();
  console.log("Password label is visible");

  await expect.soft(loginPage.passwordInput).toBeVisible();
  console.log("Password input is visible");

  await expect.soft(loginPage.signUpText).toBeVisible();
  console.log("Sign up text is visible");

  await expect.soft(loginPage.signUpLink).toBeVisible();
  console.log("Sign up link is visible");

  await expect.soft(loginPage.signInBtnDisabled).toBeVisible();
  console.log("Sign In button is disabled when fields are empty");

  await expect.soft(loginPage.passwordToggleBtn).toBeVisible();
  console.log("Password toggle button is visible");

  await loginPage.togglePasswordVisibility();
  console.log("Clicked password toggle — password shown");

  await loginPage.togglePasswordVisibility();
  console.log("Clicked password toggle again — password hidden");

  await loginPage.fillEmail(testdata["username"]);
  await expect.soft(loginPage.signInBtnDisabled).toBeVisible();
  console.log("Sign In button is disabled with only email filled");

  await loginPage.emailInput.clear();
  await loginPage.fillPassword(testdata["password"]);
  await expect.soft(loginPage.signInBtnDisabled).toBeVisible();
  console.log("Sign In button is disabled with only password filled");

  await loginPage.emailInput.clear();
  await loginPage.passwordInput.clear();
  await loginPage.fillEmail(testdata["username"]);
  await loginPage.fillPassword(testdata["password"]);
  await expect.soft(loginPage.signInBtnDisabled).not.toBeVisible();
  console.log("Sign In button is enabled when both fields are filled");

  await loginPage.fillEmail("invalid@example.com");
  await loginPage.fillPassword("wrongpassword123");
  await loginPage.clickSignIn();
  await page.waitForTimeout(2000);
  await expect.soft(page).toHaveURL(/auth\/login/);
  console.log("Invalid login stays on login page");

  await loginPage.clickBackToHome();
  await expect.soft(page).toHaveURL(/songai-frontend\.vercel\.app\/?$/);
  console.log("Back to home navigates to landing page");
  await page.goBack();
  await page.waitForLoadState("domcontentloaded");

  await loginPage.clickSignUp();
  await expect.soft(page).toHaveURL(/auth\/signup/);
  console.log("Sign up link navigates to signup page");
  await page.goBack();
  await page.waitForLoadState("domcontentloaded");

  await loginPage.login(testdata["username"], testdata["password"]);
  await page.waitForLoadState("domcontentloaded");
  await expect.soft(page).not.toHaveURL(/auth\/login/);
  console.log("Valid login navigates away from login page");

});
