import { test, expect } from "@playwright/test";
import { createRequire } from "module";
import LoginPage from "../src/pages/LoginPage.js";

const require = createRequire(import.meta.url);
const testdata = require("../TestData.json");

test("SongAI Forgot Password Page", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await page.goto(testdata["siteURL"] + "auth/login", { waitUntil: "domcontentloaded" });
  await expect.soft(page).toHaveURL(/auth\/login/);
  console.log("Navigated to login page");

  await loginPage.forgotPasswordLink.click();
  await page.waitForLoadState("domcontentloaded");
  await expect.soft(page).toHaveURL(/auth\/forgot-password/);
  console.log("Navigated to forgot password page via link");

  await expect.soft(loginPage.forgotPasswordTitle).toBeVisible();
  console.log("Forgot password title is visible");

  await expect.soft(loginPage.forgotPasswordSubtitle).toBeVisible();
  console.log("Forgot password subtitle is visible");

  await expect.soft(loginPage.forgotPasswordBackToHome).toBeVisible();
  console.log("Back to home link is visible");

  await expect.soft(loginPage.forgotPasswordEmailLabel).toBeVisible();
  console.log("Email label is visible");

  await expect.soft(loginPage.forgotPasswordEmailInput).toBeVisible();
  console.log("Email input is viasible");

  await expect.soft(loginPage.sendResetLinkBtn).toBeVisible();
  console.log("Send Reset Link button is visible");

  await expect.soft(loginPage.forgotPasswordSignInText).toBeVisible();
  console.log("Remembered your password text is visible");

  await expect.soft(loginPage.forgotPasswordSignInLink).toBeVisible();
  console.log("Sign in link is visible");

  expect.soft(
    await loginPage.forgotPasswordEmailInput.getAttribute("placeholder")
  ).toBe("you@example.com");
  console.log("Email input placeholder is correct");

  await loginPage.clickSendResetLink();
  await expect.soft(page).toHaveURL(/auth\/forgot-password/);
  console.log("Empty email submit stays on forgot password page");

  await loginPage.fillForgotPasswordEmail("invalidemail");
  await loginPage.clickSendResetLink();
  await expect.soft(page).toHaveURL(/auth\/forgot-password/);
  console.log("Invalid email format stays on forgot password page");

  await loginPage.forgotPasswordEmailInput.clear();
  await loginPage.fillForgotPasswordEmail("regtnfhy@");
  await loginPage.clickSendResetLink();
  await expect.soft(page).toHaveURL(/auth\/forgot-password/);
  console.log("Incomplete email stays on forgot password page");

  await loginPage.forgotPasswordEmailInput.clear();
  await loginPage.fillForgotPasswordEmail(testdata["username"]);
  await loginPage.clickSendResetLink();
  await page.waitForTimeout(2000);
  console.log("Valid email submitted for password reset");

  await page.goto(testdata["siteURL"] + "auth/forgot-password", { waitUntil: "domcontentloaded" });
  await loginPage.clickForgotPasswordSignIn();
  await page.waitForLoadState("domcontentloaded");
  await expect.soft(page).toHaveURL(/auth\/login/);
  console.log("Sign in link navigates back to login page");

  await page.goto(testdata["siteURL"] + "auth/forgot-password", { waitUntil: "domcontentloaded" });
  await loginPage.clickForgotPasswordBackToHome();
  await page.waitForLoadState("domcontentloaded");
  await expect.soft(page).toHaveURL(testdata["siteURL"]);
  console.log("Back to home navigates to landing page");

});
