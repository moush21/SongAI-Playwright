// src/pages/BasePage.js
import { expect } from "@playwright/test";

class BasePage {
  constructor(page) {
    this.page = page;
  }

  async goto(path = "/") {
    await this.page.goto(path);
    await this.page.waitForLoadState("domcontentloaded");
  }

  async waitForNetworkIdle() {
    await this.page.waitForLoadState("networkidle");
  }

  async scrollToBottom() {
    await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await this.page.waitForTimeout(500);
  }

  async assertVisible(locator, timeout = 8000) {
    await expect(locator).toBeVisible({ timeout });
  }

  async assertUrl(pattern) {
    await expect(this.page).toHaveURL(pattern);
  }

  async goBack() {
    await this.page.goBack();
    await this.page.waitForLoadState("domcontentloaded");
  }

  async setMobileViewport() {
    await this.page.setViewportSize({ width: 375, height: 812 });
  }

  async setDesktopViewport() {
    await this.page.setViewportSize({ width: 1280, height: 800 });
  }
}

export default BasePage;