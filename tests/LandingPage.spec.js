import { test, expect } from "@playwright/test";
import { createRequire } from "module";
import LandingPage from "../src/pages/LandingPage.js";

const require = createRequire(import.meta.url);
const testdata = require("../TestData.json");

test("SongAI Landing Page", async ({ page }) => {
  const landing = new LandingPage(page);
  await page.goto(testdata["siteURL"], { waitUntil: "domcontentloaded" });

  await expect.soft(landing.navLogo).toBeVisible();
  console.log("Logo is visible");

  await expect.soft(landing.navOccasion).toBeVisible();
  console.log("Occasions nav link is visible");

  await expect.soft(landing.navWorking).toBeVisible();
  console.log("How It Works nav link is visible");

  await expect.soft(landing.navGiftCards).toBeVisible();
  console.log("Pricing nav link is visible");

  await expect.soft(landing.navLogin).toBeVisible();
  console.log("FAQ nav link is visible");

  await expect.soft(landing.navSignIn).toBeVisible();
  console.log("Sign In nav link is visible");

  await expect.soft(landing.navCreateSongCTA).toBeVisible();
  console.log("Create Song CTA (nav) is visible");

  await landing.navOccasion.click();
  console.log("Clicked Occasions nav link");

  await landing.navWorking.click();
  console.log("Clicked How It Works nav link");

  await landing.navGiftCards.click();
  console.log("Clicked Pricing nav link");

  await landing.navLogin.click();
  console.log("Clicked FAQ nav link");

  await landing.navSignIn.click();
  console.log("Clicked Sign In nav link");
  await page.goto(testdata["siteURL"], { waitUntil: "domcontentloaded" });

  await landing.navCreateSongCTA.click();
  console.log("Clicked nav Create Song CTA");
  await page.goto(testdata["siteURL"], { waitUntil: "domcontentloaded" });

  await expect.soft(landing.heroHeadline).toBeVisible();
  console.log("Hero headline is visible");

  await expect.soft(landing.heroBodyCopy).toBeVisible();
  console.log("Hero body copy is visible");

  await expect.soft(landing.heroMascot).toBeVisible();
  console.log("Hero mascot is visible");

  await expect.soft(landing.heroInput).toBeVisible();
  console.log("Hero input is visible");

  await expect.soft(landing.heroCreateBtn).toBeDisabled();
  console.log("Create Your Song button is disabled when input is empty");

  await landing.heroInput.fill("Create a 30 seconds song for my anniversary");
  console.log("Filled hero input");

  await expect.soft(landing.heroCreateBtn).toBeVisible();
  console.log("Create Your Song button is visible");

  await landing.heroCreateBtn.click();
  console.log("Clicked Create Your Song button");
  await page.waitForLoadState("domcontentloaded");

  await expect.soft(page.locator('//*[contains(.,"Create a 30 seconds song for my anniversary")]').first()).toBeVisible();
  console.log("Input text is visible on the create screen");

  await page.goBack();
  await page.waitForLoadState("domcontentloaded");

  await expect.soft(landing.heroWatchLink).toBeVisible();
  console.log("Watch Explainer button is visible");

  await landing.heroWatchLink.click();
  console.log("Clicked Watch Explainer button");

  await page.waitForTimeout(2000);
  await expect.soft(landing.videoModalCloseBtn).toBeVisible();
  await landing.videoModalCloseBtn.click();
  console.log("Closed video modal");

  await landing.songCardsHeading.scrollIntoViewIfNeeded();

  await expect.soft(landing.songCardsHeading).toBeVisible();
  console.log("Song cards section heading is visible");

  await expect.soft(landing.songCardsTapLabel).toBeVisible();
  console.log("Tap any song label is visible");

  await expect.soft(landing.songCardFirst).toBeVisible();
  console.log("First song card is visible");

  await expect.soft(landing.songCardFirstImage).toBeVisible();
  console.log("First song card image is visible");

  await expect.soft(landing.songCardFirstTitle).toBeVisible();
  console.log("First song card title is visible");

  await expect.soft(landing.songCardFirstArtist).toBeVisible();
  console.log("First song card artist is visible");


  // await page.evaluate(() => {
  //   document.querySelectorAll('[class*="marquee"], [class*="animate-"]').forEach(el => {
  //     el.style.animationPlayState = "paused";
  //   });
  // });
  // await landing.songCardFirst.hover();
  // await landing.songCardPlayBtn.click();
  // console.log("Clicked first song card play button");

  // // Wait for audio to initialise then verify it is actually playing
  // await page.waitForTimeout(2000);
  // const isSongPlaying = await page.evaluate(() => {
  //   const audio = document.querySelector("audio");
  //   return audio !== null && !audio.paused && audio.currentTime > 0;
  // });
  // expect(isSongPlaying).toBe(true);
  // console.log("Song tile is playing - audio confirmed active");

  await landing.howItWorksHeading.scrollIntoViewIfNeeded();

  await expect.soft(landing.howItWorksEyebrow).toBeVisible();
  console.log("How It Works eyebrow is visible");

  await expect.soft(landing.howItWorksHeading).toBeVisible();
  console.log("How It Works heading is visible");

  await expect.soft(landing.howItWorksSubcopy).toBeVisible();
  console.log("How It Works subcopy is visible");

  await expect.soft(landing.howItWorksNoBold).toBeVisible();
  console.log("No music experience needed text is visible");

  await expect.soft(landing.howStep01Title).toBeVisible();
  console.log("Step 1 title is visible");

  await expect.soft(landing.howStep01Desc).toBeVisible();
  console.log("Step 1 description is visible");

  await expect.soft(landing.howStep02Title).toBeVisible();
  console.log("Step 2 title is visible");

  await expect.soft(landing.howStep02Desc).toBeVisible();
  console.log("Step 2 description is visible");

  await expect.soft(landing.howStep03Title).toBeVisible();
  console.log("Step 3 title is visible");

  await expect.soft(landing.howStep03Desc).toBeVisible();
  console.log("Step 3 description is visible");

  await expect.soft(landing.howStep04Title).toBeVisible();
  console.log("Step 4 title is visible");

  await expect.soft(landing.howStep04Desc).toBeVisible();
  console.log("Step 4 description is visible");

  await landing.sayItHeading.scrollIntoViewIfNeeded();

  await expect.soft(landing.sayItHeading).toBeVisible();
  console.log("Say It Your Way section heading is visible");

  await landing.audioSectionHeading.scrollIntoViewIfNeeded();

  await expect.soft(landing.audioSectionHeading).toBeVisible();
  console.log("Audio section heading 'Real songs. Real emotion.' is visible");

  await landing.giftHeading.scrollIntoViewIfNeeded();

  await expect.soft(landing.giftEyebrow).toBeVisible();
  console.log("Gift eyebrow is visible");

  await expect.soft(landing.giftHeading).toBeVisible();
  console.log("Gift heading is visible");

  await expect.soft(landing.giftBodyCopy).toBeVisible();
  console.log("Gift body copy is visible");

  await landing.giftPkgHeading.scrollIntoViewIfNeeded();

  await expect.soft(landing.giftPkgHeading).toBeVisible();
  console.log("Gift package heading is visible");

  await expect.soft(landing.giftPkgOriginalLabel).toBeVisible();
  console.log("Original Song label is visible");

  await expect.soft(landing.giftPkgAlbumLabel).toBeVisible();
  console.log("Album Artwork label is visible");

  await expect.soft(landing.giftPkgAlbumDesc).toBeVisible();
  console.log("Album artwork description is visible");

  await expect.soft(landing.giftPkgVideoLabel).toBeVisible();
  console.log("Video Canvas label is visible");

  await landing.testimonialsHeading.scrollIntoViewIfNeeded();

  await expect.soft(landing.testimonialsEyebrow).toBeVisible();
  console.log("Testimonials eyebrow is visible");

  await expect.soft(landing.testimonialsHeading).toBeVisible();
  console.log("Testimonials heading is visible");

  await expect.soft(landing.testimonialsMainText).toBeVisible();
  console.log("Testimonials main quote text is visible");

  await expect.soft(landing.testimonialsTheSong).toBeVisible();
  console.log("Testimonials the song text is visible");

  await expect.soft(landing.testimonialsAnniversary).toBeVisible();
  console.log("Anniversary tag is visible");

  await expect.soft(landing.testimonialsGraduation).toBeVisible();
  console.log("Graduation tag is visible");

  await expect.soft(landing.testimonialsMemorial).toBeVisible();
  console.log("Memorial tag is visible");

  await landing.pricingHeading.scrollIntoViewIfNeeded();

  await expect.soft(landing.pricingHeading).toBeVisible();
  console.log("Pricing heading is visible");

  await expect.soft(landing.pricingMostPopular).toBeVisible();
  console.log("Most Popular badge is visible");

  await expect.soft(landing.plan1Title).toBeVisible();
  console.log("Plan 1 title is visible");

  await expect.soft(landing.plan1Price).toBeVisible();
  console.log("Plan 1 price is visible");

  await expect.soft(landing.plan2Title).toBeVisible();
  console.log("Plan 2 title is visible");

  await expect.soft(landing.plan2CTA).toBeVisible();
  console.log("Plan 2 CTA is visible");

  await expect.soft(landing.plan3Title).toBeVisible();
  console.log("Plan 3 title is visible");

  await expect.soft(landing.plan3CTA).toBeVisible();
  console.log("Plan 3 CTA is visible");

  await landing.faqHeading.scrollIntoViewIfNeeded();

  await expect.soft(landing.faqHeading).toBeVisible();
  console.log("FAQ heading is visible");

  await expect.soft(landing.faqQuestion1).toBeVisible();
  console.log("FAQ question 1 is visible");

  await expect.soft(landing.faqQuestion2).toBeVisible();
  console.log("FAQ question 2 is visible");

  await expect.soft(landing.faqQuestion3).toBeVisible();
  console.log("FAQ question 3 is visible");

  await expect.soft(landing.faqQuestion4).toBeVisible();
  console.log("FAQ question 4 is visible");

  await expect.soft(landing.faqQuestion5).toBeVisible();
  console.log("FAQ question 5 is visible");

  await expect.soft(landing.faqQuestion6).toBeVisible();
  console.log("FAQ question 6 is visible");

  await landing.faqQuestion1.click();
  console.log("Clicked FAQ question 1 to expand");

  await landing.faqQuestion2.click();
  console.log("Clicked FAQ question 2 to expand");

  await landing.faqQuestion3.click();
  console.log("Clicked FAQ question 3 to expand");

  await landing.faqQuestion4.click();
  console.log("Clicked FAQ question 4 to expand");

  await landing.faqQuestion5.click();
  console.log("Clicked FAQ question 5 to expand");

  await landing.faqQuestion6.click();
  console.log("Clicked FAQ question 6 to expand");

  await page.evaluate(() => window.scrollTo(0, 0));

  await landing.heroInput.scrollIntoViewIfNeeded();
  await landing.heroInput.clear();
  await landing.heroInput.fill("make a 1 min song for my birthday");
  console.log("Filled hero input with birthday song request");

  await expect.soft(landing.heroCreateBtn).toBeVisible();
  await landing.heroCreateBtn.click();
  console.log("Clicked Create Your Song button - end of test");
});
