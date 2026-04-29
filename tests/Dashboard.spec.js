import { test, expect } from "@playwright/test";
import { createRequire } from "module";
import DashboardPage from "../src/pages/DashboardPage.js";

const require = createRequire(import.meta.url);
const testdata = require("../TestData.json");
const generatedData = require("../GeneratedTestData.json");

test("SongAI Dashboard Page - New User", async ({ page }) => {
  const dashboardPage = new DashboardPage(page);

  await page.goto(testdata["siteURL"] + "auth/login", { 
    waitUntil: "domcontentloaded" });

  await page.locator('//input[@type="email"][@placeholder="you@example.com"]').fill(generatedData["generatedEmail"]);

  await page.locator('//input[@placeholder="Enter your password"]').fill(generatedData["generatedPassword"]);
  await page.locator('//button[@type="submit"][contains(.,"Sign In")]').click();




  await page.waitForLoadState("domcontentloaded");
  await page.waitForTimeout(2000);

  await expect.soft(page).toHaveURL(/dashboard/);
  console.log("Dashboard URL is correct");

  await expect.soft(dashboardPage.welcomeHeading).toBeVisible();
  console.log("Welcome heading is visible");

  const welcomeText = await dashboardPage.welcomeHeading.textContent();
  expect.soft(welcomeText).toContain(generatedData["generatedName"]);
  console.log(`Welcome heading contains user name: ${generatedData["generatedName"]}`);

  await expect.soft(dashboardPage.welcomeSubtext).toBeVisible();
  console.log("Welcome subtext is visible");

  await expect.soft(dashboardPage.songAILogoSidebar).toBeVisible();
  console.log("SongAI sidebar logo is visible");

  await expect.soft(dashboardPage.searchBtn).toBeVisible();
  console.log("Search Songs button is visible");

  await expect.soft(dashboardPage.createLabel).toBeVisible();
  console.log("Create label is visible");

  await expect.soft(dashboardPage.createNewSongSidebar).toBeVisible();
  console.log("Create a New Song sidebar button is visible");

  await expect.soft(dashboardPage.yourMusicLabel).toBeVisible();
  console.log("Your Music label is visible");

  await expect.soft(dashboardPage.yourLatestSongBtn).toBeVisible();
  console.log("Your Latest Song button is visible");

  await expect.soft(dashboardPage.yourSongsBtn).toBeVisible();
  console.log("Your Songs button is visible");

  await expect.soft(dashboardPage.giftingLabel).toBeVisible();
  console.log("Gifting label is visible");

  await expect.soft(dashboardPage.sendASongLink).toBeVisible();
  console.log("Send a Song link is visible");

  await expect.soft(dashboardPage.yourGiftsLink).toBeVisible();
  console.log("Your Gifts link is visible");

  await expect.soft(dashboardPage.planName).toBeVisible();
  console.log("Plan name is visible");

  await expect.soft(dashboardPage.planSongsRemaining).toBeVisible();
  console.log("Songs remaining text is visible");

  await expect.soft(dashboardPage.upgradePlanLink).toBeVisible();
  console.log("Upgrade Plan link is visible");

  await expect.soft(dashboardPage.userNameDisplay).toBeVisible();
  console.log("User name display is visible");

  const displayedName = await dashboardPage.userNameDisplay.textContent();
  expect.soft(displayedName).toContain(generatedData["generatedName"]);
  console.log(`User name display matches: ${generatedData["generatedName"]}`);

  await expect.soft(dashboardPage.userEmailDisplay).toBeVisible();
  console.log("User email display is visible");

  const displayedEmail = await dashboardPage.userEmailDisplay.textContent();
  expect.soft(displayedEmail).toContain(generatedData["generatedEmail"]);
  console.log(`User email display matches: ${generatedData["generatedEmail"]}`);

  await expect.soft(dashboardPage.logoutBtn).toBeVisible();
  console.log("Logout button is visible");

  await expect.soft(dashboardPage.createNewSongCard).toBeVisible();
  console.log("Create a New Song card is visible");

  await expect.soft(dashboardPage.createNewSongCardText).toBeVisible();
  console.log("Gift someone special text is visible");

  await expect.soft(dashboardPage.noSongsMessage).toBeVisible();
  console.log("No songs yet message is visible for new user");

  await expect.soft(dashboardPage.aiHelpBtn).toBeVisible();
  console.log("AI Help button is visible");

  await expect.soft(dashboardPage.settingsBtn).toBeVisible();
  console.log("Settings button is visible");

  await dashboardPage.clickSettings();
  await dashboardPage.myAccountOption.waitFor({ state: 'visible' });
  await expect.soft(dashboardPage.myAccountOption).toBeVisible();
  await expect.soft(dashboardPage.billingOption).toBeVisible();
  await expect.soft(dashboardPage.ordersOption).toBeVisible();
  await expect.soft(dashboardPage.notificationsOption).toBeVisible();
  await expect.soft(dashboardPage.privacyOption).toBeVisible();
  await expect.soft(dashboardPage.supportOption).toBeVisible();
  console.log("All settings dropdown options are visible");
  await dashboardPage.clickMyAccount();

  await page.waitForLoadState("domcontentloaded");

  await expect.soft(page).toHaveURL(/dashboard\/account/);
  await expect.soft(dashboardPage.myAccountHeading).toBeVisible();
  await expect.soft(page.locator(`//*[contains(.,"${generatedData["generatedName"]}")]`).first()).toBeVisible();
  await expect.soft(page.locator(`//*[contains(.,"${generatedData["generatedEmail"]}")]`).first()).toBeVisible();
  console.log("My Account page verified — name and email match generated user");
  await dashboardPage.clickBackToDashboard();

  await page.waitForLoadState("domcontentloaded");

  await dashboardPage.clickSettings();
  await dashboardPage.billingOption.waitFor({ state: 'visible' });
  await dashboardPage.clickBilling();
  await page.waitForLoadState("domcontentloaded");
  await expect.soft(page).toHaveURL(/dashboard\/billing/);
  await expect.soft(dashboardPage.billingHeading).toBeVisible();
  await expect.soft(dashboardPage.billingPaymentHistory).toBeVisible();
  await expect.soft(dashboardPage.billingPaymentMethod).toBeVisible();
  console.log("Billing page verified");
  await dashboardPage.clickBackToDashboard();

  await page.waitForLoadState("domcontentloaded");

  await dashboardPage.clickSettings();
  await dashboardPage.ordersOption.waitFor({ state: 'visible' });
  await dashboardPage.clickOrders();
  await page.waitForLoadState("domcontentloaded");
  await expect.soft(page).toHaveURL(/dashboard\/orders/);
  await expect.soft(dashboardPage.ordersHeading).toBeVisible();
  await expect.soft(dashboardPage.ordersEmptyMessage).toBeVisible();
  console.log("Orders page verified");
  await dashboardPage.clickBackToDashboard();

  await page.waitForLoadState("domcontentloaded");

  await dashboardPage.clickSettings();
  await dashboardPage.notificationsOption.waitFor({ state: 'visible' });
  await dashboardPage.clickNotifications();
  await page.waitForLoadState("domcontentloaded");
  await expect.soft(page).toHaveURL(/dashboard\/notifications/);
  await expect.soft(dashboardPage.notificationsHeading).toBeVisible();
  await expect.soft(dashboardPage.notificationsSaveBtn).toBeVisible();
  await expect.soft(dashboardPage.notificationsResetBtn).toBeVisible();
  console.log("Notifications page verified");
  await dashboardPage.clickBackToDashboard();


  await page.waitForLoadState("domcontentloaded");

  await dashboardPage.clickSettings();
  await dashboardPage.privacyOption.waitFor({ state: 'visible' });
  await dashboardPage.clickPrivacy();
  await page.waitForLoadState("domcontentloaded");
  await expect.soft(page).toHaveURL(/dashboard\/privacy/);
  await expect.soft(dashboardPage.privacyHeading).toBeVisible();
  await expect.soft(dashboardPage.privacyDataWeStore).toBeVisible();
  await expect.soft(dashboardPage.privacyExportData).toBeVisible();
  await expect.soft(dashboardPage.privacyDeleteAccount).toBeVisible();
  console.log("Privacy page verified");
  await dashboardPage.clickBackToDashboard();


  await page.waitForLoadState("domcontentloaded");

  await dashboardPage.clickSettings();
  await dashboardPage.supportOption.waitFor({ state: 'visible' });
  await dashboardPage.clickSupport();
  await page.waitForLoadState("domcontentloaded");
  await expect.soft(page).toHaveURL(/dashboard\/support/);
  await expect.soft(dashboardPage.supportHeading).toBeVisible();
  await expect.soft(dashboardPage.supportContactForm).toBeVisible();
  await expect.soft(dashboardPage.supportCommonQuestions).toBeVisible();
  console.log("Customer Support page verified");
  await dashboardPage.clickBackToDashboard();

  await page.waitForLoadState("domcontentloaded");

  await dashboardPage.clickUpgradePlan();
  await page.waitForLoadState("domcontentloaded");
  await expect.soft(page).toHaveURL(/pricing/);
  console.log("Upgrade Plan navigates to pricing page");
  await page.goBack();

  await page.waitForLoadState("domcontentloaded");

  await dashboardPage.clickSendASong();
  await page.waitForLoadState("domcontentloaded");
  await expect.soft(page).toHaveURL(/checkout/);
  console.log("Send a Song navigates to checkout page");
  await page.goBack();




  await page.waitForLoadState("domcontentloaded");

});
