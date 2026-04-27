const { expect } = require('@playwright/test');

function uniqueEmail() {
  return `qa+${Date.now()}@mailinator.com`;
}

async function scrollToSection(page, sectionId) {
  await page.evaluate((id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, sectionId);
  await page.waitForTimeout(500);
}

async function scrollToBottom(page) {
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(500);
}

async function isVisible(page, selector) {
  return page.locator(selector).isVisible().catch(() => false);
}

function extractUuidFromUrl(url) {
  const match = url.match(/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i);
  return match ? match[0] : null;
}

module.exports = {
  uniqueEmail,
  scrollToSection,
  scrollToBottom,
  isVisible,
  extractUuidFromUrl,
};