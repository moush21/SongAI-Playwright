import { test, expect } from "@playwright/test";
import { createRequire } from "module";
import { writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import SignupPage from "../src/pages/SignupPage.js";

const require = createRequire(import.meta.url);
const testdata = require("../TestData.json");

const randomNum = Date.now();
const randomName = `Test User ${randomNum}`;
const randomEmail = `testuser${randomNum}@mailinator.com`;
const randomPwd = `TestPass${randomNum}!`;

const __dirname = dirname(fileURLToPath(import.meta.url));
writeFileSync(
  resolve(__dirname, "../GeneratedTestData.json"),
  JSON.stringify({ generatedName: randomName, generatedEmail: randomEmail, generatedPassword: randomPwd }, null, 2)
);

test("SongAI Signup Page", async ({ page }) => {
  const signupPage = new SignupPage(page);

  await page.goto(testdata["siteURL"] + "auth/signup", { waitUntil: "domcontentloaded" });
  await expect.soft(page).toHaveURL("https://songai-frontend.vercel.app/auth/signup");
  console.log("Signup page URL is correct");

  await expect.soft(signupPage.backToHomeLink).toBeVisible();
  console.log("Back to home link is visible");

  await expect.soft(signupPage.orDivider).toBeVisible();
  console.log("Or continue with email divider is visible");

//   await expect.soft(signupPage.googleBtn).toBeVisible();
//   console.log("Google button is visible");

//   await expect.soft(signupPage.facebookBtn).toBeVisible();
//   console.log("Facebook button is visible");

//   await expect.soft(signupPage.appleBtn).toBeVisible();
//   console.log("Apple button is visible");

  await expect.soft(signupPage.nameLabel).toBeVisible();
  console.log("Name label is visible");

  await expect.soft(signupPage.emailLabel).toBeVisible();
  console.log("Email label is visible");

  await expect.soft(signupPage.passwordLabel).toBeVisible();
  console.log("Password label is visible");

  await expect.soft(signupPage.nameInput).toBeVisible();
  console.log("Name input is visible");

  await expect.soft(signupPage.emailInput).toBeVisible();
  console.log("Email input is visible");

  await expect.soft(signupPage.passwordInput).toBeVisible();
  console.log("Password input is visible");

  await expect.soft(signupPage.passwordToggleBtn).toBeVisible();
  console.log("Password toggle button is visible");

  await expect.soft(signupPage.termsCheckbox).toBeVisible();
  console.log("Terms checkbox is visible");

  await expect.soft(signupPage.termsLabel).toBeVisible();
  console.log("Terms label is visible");

  await expect.soft(signupPage.createAccountBtn).toBeVisible();
  console.log("Create Account button is visible");

  await expect.soft(signupPage.signInText).toBeVisible();
  console.log("Already have an account text is visible");

  await expect.soft(signupPage.signInLink).toBeVisible();
  console.log("Sign in link is visible");

  await expect.soft(signupPage.createAccountBtn).toBeDisabled();
  console.log("Create Account button is disabled when form is empty");

  await signupPage.fillName("Test User");
  await signupPage.fillEmail("test@t");
  await signupPage.fillPassword("password123");
  await signupPage.checkTerms();
  await signupPage.clickCreateAccount();
  await page.waitForTimeout(5000);
  await expect.soft(page.locator('//p[text()="email must be an email"]')).toBeVisible();
  console.log("Error shown for invalid email format");

  await page.goto(testdata["siteURL"] + "auth/signup", { waitUntil: "domcontentloaded" });
  await signupPage.fillName("Test User");
  await signupPage.fillEmail("newuser@test.com");
  await signupPage.fillPassword("abc");
  await signupPage.checkTerms();
  await signupPage.clickCreateAccount();
  await page.waitForTimeout(2000);
  await expect.soft(page.locator('//p[contains(.,"pwd must be longer")]')).toBeVisible();
  console.log("Error shown for short password");

  await page.goto(testdata["siteURL"] + "auth/signup", { waitUntil: "domcontentloaded" });
  await signupPage.fillName("Test User");
  await signupPage.fillEmail("test@example.com");
  await signupPage.fillPassword("password123");
  await expect.soft(signupPage.createAccountBtn).toBeDisabled();
  console.log("Create Account button is disabled when terms are not checked");

  await page.goto(testdata["siteURL"] + "auth/signup", { waitUntil: "domcontentloaded" });
  await signupPage.fillName("Test User");
  await signupPage.fillEmail(testdata["username"]);
  await signupPage.fillPassword("password123");
  await signupPage.checkTerms();
  await signupPage.clickCreateAccount();
  await page.waitForTimeout(2000);
  await expect.soft(signupPage.errorMessage).toBeVisible();
  console.log("Error shown for existing email");

  await page.goto(testdata["siteURL"] + "auth/signup", { waitUntil: "domcontentloaded" });
  await signupPage.togglePasswordVisibility();
  console.log("Password toggle button clicked");

  await page.goto(testdata["siteURL"] + "auth/signup", { waitUntil: "domcontentloaded" });
  await signupPage.clickSignIn();
  await page.waitForLoadState("domcontentloaded");
  await expect.soft(page).toHaveURL(/auth\/login/);
  console.log("Sign in link navigates to login page");

  await page.goto(testdata["siteURL"] + "auth/signup", { waitUntil: "domcontentloaded" });
  await signupPage.clickBackToHome();
  await page.waitForLoadState("domcontentloaded");
  await expect.soft(page).toHaveURL(testdata["siteURL"]);
  console.log("Back to home navigates to landing page");

  await page.goto(testdata["siteURL"] + "auth/signup", { waitUntil: "domcontentloaded" });
  await signupPage.signup(randomName, randomEmail, randomPwd);
  await page.waitForLoadState("domcontentloaded");
  await expect.soft(page).not.toHaveURL(/auth\/signup/);
  console.log("Valid signup navigates away from signup page");

});
