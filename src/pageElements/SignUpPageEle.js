export const SignupPageElements = {

  signupPageURL: '/auth/signup',
  backToHomeLink: '(//a[@href="/"][contains(@class,"lg:inline-flex")])[1]',

//   googleBtn: '(//button[contains(.,"Google")])',
//   facebookBtn: '(//button[contains(.,"Facebook")])',
//   appleBtn: '(//button[contains(.,"Apple")])',

  orDivider: '(//span[contains(@class,"text-text-muted") and contains(.,"or continue with email")])',
  nameLabel: '(//label[contains(.,"Your name")])',
  nameInput: '(//input[@placeholder="Neil Morecraft"])[1]',
  emailLabel: '(//label[contains(.,"Email address")])',
  emailInput: '(//input[@placeholder="you@example.com"][@type="email"])',
  passwordLabel: '(//label[contains(.,"Password")])',
  passwordInput: '(//input[@placeholder="Create a password"])',
  passwordToggleBtn: '(//input[@placeholder="Create a password"]/following-sibling::button[@type="button"])',
  termsCheckbox: '(//input[@type="checkbox"])',
  termsLabel: '(//label[contains(.,"I agree to the Terms and Privacy Policy")])',
  createAccountBtn: '(//button[@type="submit"][contains(.,"Create Account")])',
  signInText: '(//p[contains(.,"Already have an account?")])',
  signInLink: '(//a[@href="/auth/login"][contains(.,"Sign in")])',
  errorMessage: '//p[contains(@class,"bg-crimson/10")]',
  emailFormatError: '//p[text()="email must be an email"]',
  pwdLengthError: '//p[contains(.,"pwd must be longer")]',

};
