import { LoginPageElements } from '../pageElements/LoginPageEle.js';

export default class LoginPage {
  constructor(page) {
    this.page = page;

    // Page verification
    this.loginPageTitle = page.locator(LoginPageElements.loginPageTitle);
    this.loginPageSubtitle = page.locator(LoginPageElements.loginPageSubtitle);

    // Back to home
    this.backToHomeLink=page.locator(LoginPageElements.backToHomeLink);

    // Email input
    this.emailLabel= page.locator(LoginPageElements.emailLabel);
    this.emailInput= page.locator(LoginPageElements.emailInput);

    // Password input
    this.passwordLabel= page.locator(LoginPageElements.passwordLabel);
    this.passwordInput= page.locator(LoginPageElements.passwordInput);
    this.passwordToggleBtn= page.locator(LoginPageElements.passwordToggleBtn);

    // Sign In button
    this.signInBtn         = page.locator(LoginPageElements.signInBtn);
    this.signInBtnDisabled = page.locator(LoginPageElements.signInBtnDisabled);

    // Sign up link
    this.signUpText        = page.locator(LoginPageElements.signUpText);
    this.signUpLink        = page.locator(LoginPageElements.signUpLink);

    // Divider
    this.orDivider         = page.locator(LoginPageElements.orDivider);

    // ── Forgot Password elements ───────────────────────────────────────────────
    this.forgotPasswordLink       = page.locator(LoginPageElements.forgotPasswordLink);
    this.forgotPasswordTitle      = page.locator(LoginPageElements.forgotPasswordTitle);
    this.forgotPasswordSubtitle   = page.locator(LoginPageElements.forgotPasswordSubtitle);
    this.forgotPasswordBackToHome = page.locator(LoginPageElements.forgotPasswordBackToHome);
    this.forgotPasswordEmailLabel = page.locator(LoginPageElements.forgotPasswordEmailLabel);
    this.forgotPasswordEmailInput = page.locator(LoginPageElements.forgotPasswordEmailInput);
    this.sendResetLinkBtn         = page.locator(LoginPageElements.sendResetLinkBtn);
    this.forgotPasswordSignInLink = page.locator(LoginPageElements.forgotPasswordSignInLink);
    this.forgotPasswordSignInText = page.locator(LoginPageElements.forgotPasswordSignInText);
  }

  

  // ── Actions ────────────────────────────────────────────────────────────────

  async navigateTo(url) {
    await this.page.goto(url, { waitUntil: 'domcontentloaded' });
  }

  async fillEmail(email) {
    await this.emailInput.clear();
    await this.emailInput.fill(email);
  }

  async fillPassword(password) {
    await this.passwordInput.clear();
    await this.passwordInput.fill(password);
  }

  async clickSignIn() {
    await this.signInBtn.click();
  }

  async login(email, password) {
    await this.fillEmail(email);
    await this.fillPassword(password);
    await this.clickSignIn();
  }

  async togglePasswordVisibility() {
    await this.passwordToggleBtn.click();
  }

  async getPasswordInputType() {
    return await this.passwordInput.getAttribute('type');
  }

  async clickBackToHome() {
    await this.backToHomeLink.click();
  }

  async clickSignUp() {
    await this.signUpLink.click();
  }

  async isSignInButtonDisabled() {
    return await this.signInBtnDisabled.isVisible();
  }

  async isSignInButtonEnabled() {
    const btn = this.page.locator(LoginPageElements.signInBtn);
    return await btn.isEnabled();
  }

  // ── Forgot Password Actions ────────────────────────────────────────────────

    async clickForgotPassword() {
    await this.forgotPasswordLink.click();
    }

    async fillForgotPasswordEmail(email) {
    await this.forgotPasswordEmailInput.clear();
    await this.forgotPasswordEmailInput.fill(email);
    }

    async clickSendResetLink() {
    await this.sendResetLinkBtn.click();
    }

    async clickForgotPasswordSignIn() {
    await this.forgotPasswordSignInLink.click();
    }

    async clickForgotPasswordBackToHome() {
    await this.forgotPasswordBackToHome.click();
    }

    async isSendResetLinkBtnEnabled() {
    return await this.sendResetLinkBtn.isEnabled();
    }

}