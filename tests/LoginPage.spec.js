import { test, expect } from "@playwright/test";
import { createRequire } from "module";
import LoginPage from "../src/pages/LoginPage.js";

const require = createRequire(import.meta.url);
const testdata = require("../TestData.json");

test("SongAI Login Page", async ({ page }) => {
  const loginPage = new LoginPage(page);

  // ── Navigate to login page ─────────────────────────────────────────────────
  await page.goto(testdata["siteURL"] + "auth/login", { waitUntil: "domcontentloaded" });

  // ── Page verification ──────────────────────────────────────────────────────
  await expect(page).toHaveURL(/auth\/login/);
  console.log("Login page URL is correct");

  await expect(loginPage.loginPageTitle).toBeVisible();
  console.log("Login page title is visible");

  await expect(loginPage.loginPageSubtitle).toBeVisible();
  console.log("Login page subtitle is visible");

  // ── Static elements ────────────────────────────────────────────────────────
  await expect(loginPage.orDivider).toBeVisible();
  console.log("Or divider is visible");

  await expect(loginPage.backToHomeLink).toBeVisible();
  console.log("Back to home link is visible");

  // ── Email field ────────────────────────────────────────────────────────────
  await expect(loginPage.emailLabel).toBeVisible();
  console.log("Email label is visible");

  await expect(loginPage.emailInput).toBeVisible();
  console.log("Email input is visible");

  // ── Password field ─────────────────────────────────────────────────────────
  await expect(loginPage.passwordLabel).toBeVisible();
  console.log("Password label is visible");

  await expect(loginPage.passwordInput).toBeVisible();
  console.log("Password input is visible");

  // ── Sign up link ───────────────────────────────────────────────────────────
  await expect(loginPage.signUpText).toBeVisible();
  console.log("Sign up text is visible");

  await expect(loginPage.signUpLink).toBeVisible();
  console.log("Sign up link is visible");

  // ── Sign In button disabled when fields empty ──────────────────────────────
  await expect(loginPage.signInBtnDisabled).toBeVisible();
  console.log("Sign In button is disabled when fields are empty");

  // ── Password toggle — verify button is clickable ─────────────────────────
  await expect(loginPage.passwordToggleBtn).toBeVisible();
  console.log("Password toggle button is visible");

  await loginPage.togglePasswordVisibility();
  console.log("Clicked password toggle — password shown");

  await loginPage.togglePasswordVisibility();
  console.log("Clicked password toggle again — password hidden");

  // ── Test 1 — email only ───────────────────────────────────────────────────
  await loginPage.fillEmail(testdata["username"]);
  await expect(loginPage.signInBtnDisabled).toBeVisible();
  console.log("Sign In button is disabled with only email filled");

  // ── Test 2 — clear everything, password only ──────────────────────────────
  await loginPage.emailInput.clear();
  await loginPage.fillPassword(testdata["password"]);
  await expect(loginPage.signInBtnDisabled).toBeVisible();
  console.log("Sign In button is disabled with only password filled");

  // ── Test 3 — fill both fresh ──────────────────────────────────────────────
  await loginPage.emailInput.clear();
  await loginPage.passwordInput.clear();
  await loginPage.fillEmail(testdata["username"]);
  await loginPage.fillPassword(testdata["password"]);
  await expect(loginPage.signInBtnDisabled).not.toBeVisible();
  console.log("Sign In button is enabled when both fields are filled");

  // ── Invalid login ──────────────────────────────────────────────────────────
  await loginPage.fillEmail("invalid@example.com");
  await loginPage.fillPassword("wrongpassword123");
  await loginPage.clickSignIn();
  await page.waitForTimeout(2000);
  await expect(page).toHaveURL(/auth\/login/);
  console.log("Invalid login stays on login page");

  // ── Back to home ───────────────────────────────────────────────────────────
  await loginPage.clickBackToHome();
  await expect(page).toHaveURL(/songai-frontend\.vercel\.app\/?$/);
  console.log("Back to home navigates to landing page");
  await page.goBack();
  await page.waitForLoadState("domcontentloaded");

  // ── Sign up link navigation ────────────────────────────────────────────────
  await loginPage.clickSignUp();
  await expect(page).toHaveURL(/auth\/signup/);
  console.log("Sign up link navigates to signup page");
  await page.goBack();
  await page.waitForLoadState("domcontentloaded");

  // ── Valid login ────────────────────────────────────────────────────────────
  await loginPage.login(testdata["username"], testdata["password"]);
  await page.waitForLoadState("domcontentloaded");
  await expect(page).not.toHaveURL(/auth\/login/);
  console.log("Valid login navigates away from login page");

});