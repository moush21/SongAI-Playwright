export const LoginPageElements = {

  // Page verification
  loginPageURL:         '/auth/login',
  loginPageTitle:       '//h1[contains(@class,"text-[2rem]") and contains(.,"Welcome back")]',
  loginPageSubtitle:    '//p[contains(.,"Sign in to listen, create, and send gifts")]',

  // Back to home
  backToHomeLink:       '//a[@href="/"][contains(.,"Back to home")]',

  // Email input
  emailInput:           '//input[@type="email"][@placeholder="you@example.com"]',
  emailLabel:           '//label[contains(.,"Email address")]',

  // Password input
  passwordInput:        '//input[@placeholder="Enter your password"]',
  passwordLabel:        '//label[contains(.,"Password")]',
  passwordToggleBtn:    '//input[@placeholder="Enter your password"]/following-sibling::button[@type="button"]',

  // Sign In button
  signInBtn:            '//button[@type="submit"][contains(.,"Sign In")]',
  signInBtnDisabled:    '//button[@type="submit"][@disabled]',

  // Sign up link
  signUpLink:           '//a[@href="/auth/signup"][contains(.,"Sign up")]',
  signUpText:           '//p[contains(.,"Don\'t have an account?")]',

  // Divider
  orDivider:            '//span[contains(.,"or continue with email")]',

  // ── Forgot Password Page ───────────────────────────────────────────────────
forgotPasswordLink:       '//a[@href="/auth/forgot-password"]',

// Page elements
forgotPasswordTitle:      '//h1[contains(.,"Forgot password")]',
forgotPasswordSubtitle:   '//p[contains(.,"Enter your email and we will send you a reset link")]',
forgotPasswordBackToHome: '//a[@href="/"][contains(.,"Back to home")]',

// Email field
forgotPasswordEmailLabel: '//label[contains(.,"Email address")]',
forgotPasswordEmailInput: '//input[@placeholder="you@example.com"][@type="email"]',

// Send reset link button
sendResetLinkBtn:         '//button[contains(.,"Send reset link")]',

// Sign in link
forgotPasswordSignInLink: '//a[@href="/auth/login"][contains(.,"Sign in")]',
forgotPasswordSignInText: '//p[contains(.,"Remembered your password?")]',

};