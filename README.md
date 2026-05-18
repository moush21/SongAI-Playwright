# SONGAI - Playwright Automation Framework

## Overview

This project is a UI automation framework built using **Playwright with JavaScript** following the **Page Object Model (POM)** design pattern.

The framework is designed for automating and validating web application flows such as:

* Login
* Signup
* Landing Page validation
* Dashboard validation
* Forgot Password flow

---

## Tech Stack

* **Playwright**
* **JavaScript**
* **Node.js**
* **Page Object Model (POM)**

---

## Project Structure

```text
SONGAI
│
├── .auth/
├── node_modules/
├── playwright-report/
├── src/
│   ├── pageElements/
│   │   ├── DashboardPageEle.js
│   │   ├── LandingPageEle.js
│   │   ├── LoginPageEle.js
│   │   └── SignUpPageEle.js
│   │
│   ├── pages/
│   │   ├── BasePage.js
│   │   ├── DashboardPage.js
│   │   ├── LandingPage.js
│   │   ├── LoginPage.js
│   │   └── SignUpPage.js
│   │
│   └── utils/
│
├── test-results/
├── tests/
│   ├── Dashboard.spec.js
│   ├── ForgotPwd.spec.js
│   ├── LandingPage.spec.js
│   ├── LoginPage.spec.js
│   └── SignUpPage.spec.js
│
├── .env
├── .gitignore
├── GeneratedTestData.json
├── package.json
├── package-lock.json
├── playwright.config.js
├── TestData.json
└── TestData.sample.json
```

---

## Framework Architecture

### Page Object Model (POM)

The framework follows the Page Object Model design pattern for better:

* Maintainability
* Reusability
* Scalability

### Folder Description

| Folder/File         | Purpose                                         |
| ------------------- | ----------------------------------------------- |
| `src/pages`         | Contains all page classes and reusable methods  |
| `src/pageElements`  | Stores page locators/elements                   |
| `src/utils`         | Utility/helper functions                        |
| `tests`             | Contains all test specification files           |
| `playwright-report` | Generated HTML reports                          |
| `test-results`      | Screenshots, traces, videos, and test artifacts |
| `.env`              | Environment variables                           |
| `TestData.json`     | Test data used in execution                     |

---

## Installation

### Clone the Repository

```bash
git clone <repository-url>
```

### Navigate to Project

```bash
cd SONGAI
```

### Install Dependencies

```bash
npm install
```

### Install Playwright Browsers

```bash
npx playwright install
```

---

## Running Tests

### Run All Tests

```bash
npx playwright test
```

### Run Specific Test File

```bash
npx playwright test tests/LoginPage.spec.js
```

### Run Tests in Headed Mode

```bash
npx playwright test --headed
```

### Run Tests in Specific Browser

```bash
npx playwright test --project=chromium
```

---

## Reports

After execution, Playwright generates an HTML report.

### Open Report

```bash
npx playwright show-report
```

Reports are stored inside:

```text
playwright-report/
```

---

## Test Files

| Test File             | Description                 |
| --------------------- | --------------------------- |
| `LandingPage.spec.js` | Landing page validations    |
| `LoginPage.spec.js`   | Login functionality testing |
| `SignUpPage.spec.js`  | Signup flow testing         |
| `ForgotPwd.spec.js`   | Forgot password flow        |
| `Dashboard.spec.js`   | Dashboard validations       |

---

## Environment Configuration

Create a `.env` file in the project root.

Example:

```env
BASE_URL=
USERNAME=
PASSWORD=
```

---

## Test Data

Test data is maintained in:

```text
TestData.json
```

Sample test data reference:

```text
TestData.sample.json
```

Generated runtime data:

```text
GeneratedTestData.json
```

---

## Features

* Page Object Model implementation
* Modular and scalable structure
* Reusable page methods
* Centralized locators
* Environment variable support
* HTML reporting
* Test data management
* Cross-browser support

---

## Best Practices Followed

* Separation of locators and actions
* Reusable base page methods
* Organized test structure
* Configurable test execution
* Maintainable folder hierarchy

---

## Author

Automation Framework developed using Playwright and JavaScript.
