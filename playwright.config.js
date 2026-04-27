import { defineConfig, devices } from "@playwright/test";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
require("dotenv").config();

export default defineConfig({
  testDir: "./tests",
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 1,
  workers: process.env.CI ? 2 : 1,
  timeout: 45000,

  reporter: [
    ["html", { outputFolder: "playwright-report", open: "never" }],
    ["json", { outputFile: "test-results/results.json" }],
    ["list"],
  ],

  use: {
    baseURL: process.env.BASE_URL || "https://songai-frontend.vercel.app",
    headless: true,
    trace: "on-first-retry",
    screenshot: "only-on-failure",
    video: "on-first-retry",
    actionTimeout: 15000,
    navigationTimeout: 30000,
  },

  projects: [
    {
      name: "landing",
      testMatch: "**/tests/landingPage.spec.js",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "login",
      testMatch: "**/tests/loginPage.spec.js",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "signup",
      testMatch: "**/tests/signUpPage.spec.js",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "dashboard",
      testMatch: "**/tests/dashboard.spec.js",
      use: {
        ...devices["Desktop Chrome"],
        storageState: ".auth/user.json",
      },
    },
    {
      name: "song-detail",
      testMatch: "**/tests/songDetail.spec.js",
      use: {
        ...devices["Desktop Chrome"],
        storageState: ".auth/user.json",
      },
    },
    {
      name: "new-song-creation",
      testMatch: "**/tests/newSongCreation.spec.js",
      use: {
        ...devices["Desktop Chrome"],
        storageState: ".auth/user.json",
      },
    },
    {
      name: "forgot-password",
      testMatch: "**/tests/ForgotPwd.spec.js",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});