import { SignupPageElements } from '../pageElements/SignupPageEle.js';

export default class SignupPage {
  constructor(page) {
    this.page = page;

    // Page verification
    this.signupPageTitle    = page.locator(SignupPageElements.signupPageTitle);
    this.signupPageSubtitle = page.locator(SignupPageElements.signupPageSubtitle);

    // Back to home
    this.backToHomeLink     = page.locator(SignupPageElements.backToHomeLink);

    // SSO buttons
    this.googleBtn          = page.locator(SignupPageElements.googleBtn);
    this.facebookBtn        = page.locator(SignupPageElements.facebookBtn);
    this.appleBtn           = page.locator(SignupPageElements.appleBtn);

    // Divider
    this.orDivider          = page.locator(SignupPageElements.orDivider);

    // Form fields
    this.nameLabel          = page.locator(SignupPageElements.nameLabel);
    this.nameInput          = page.locator(SignupPageElements.nameInput);
    this.emailLabel         = page.locator(SignupPageElements.emailLabel);
    this.emailInput         = page.locator(SignupPageElements.emailInput);
    this.passwordLabel      = page.locator(SignupPageElements.passwordLabel);
    this.passwordInput      = page.locator(SignupPageElements.passwordInput);
    this.passwordToggleBtn  = page.locator(SignupPageElements.passwordToggleBtn);

    // Terms
    this.termsCheckbox      = page.locator(SignupPageElements.termsCheckbox);
    this.termsLabel         = page.locator(SignupPageElements.termsLabel);

    // Submit button
    this.createAccountBtn   = page.locator(SignupPageElements.createAccountBtn);

    // Sign in link
    this.signInText         = page.locator(SignupPageElements.signInText);
    this.signInLink         = page.locator(SignupPageElements.signInLink);

    // Error message
    this.errorMessage       = page.locator(SignupPageElements.errorMessage);
  }

  // ── Actions ──────────────────────────────────────────────────────────────

  async navigateTo(url) {
    await this.page.goto(url, { waitUntil: 'domcontentloaded' });
  }

  async fillName(name) {
    await this.nameInput.clear();
    await this.nameInput.fill(name);
  }

  async fillEmail(email) {
    await this.emailInput.clear();
    await this.emailInput.fill(email);
  }

  async fillPassword(password) {
    await this.passwordInput.clear();
    await this.passwordInput.fill(password);
  }

  async checkTerms() {
    await this.termsCheckbox.check();
  }

  async uncheckTerms() {
    await this.termsCheckbox.uncheck();
  }

  async clickCreateAccount() {
    await this.createAccountBtn.click();
  }

  async signup(name, email, password) {
    await this.fillName(name);
    await this.fillEmail(email);
    await this.fillPassword(password);
    await this.checkTerms();
    await this.clickCreateAccount();
  }

  async togglePasswordVisibility() {
    await this.passwordToggleBtn.click();
  }

  async clickBackToHome() {
    await this.backToHomeLink.click();
  }

  async clickSignIn() {
    await this.signInLink.click();
  }

  async isCreateAccountBtnEnabled() {
    return await this.createAccountBtn.isEnabled();
  }

}