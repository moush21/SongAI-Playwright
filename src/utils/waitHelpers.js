const { TIMEOUTS } = require('./testData');

async function waitForBotResponse(page, timeout = TIMEOUTS.botResponse) {
  await page.waitForFunction(
    () => {
      const dots = document.querySelector('[class*="typing"], [class*="dots"]');
      return !dots;
    },
    { timeout }
  );
}

async function waitForAllGenerationSteps(page, timeout = TIMEOUTS.songGeneration) {
  await page.waitForFunction(
    () => {
      let doneCount = 0;
      document.querySelectorAll('*').forEach(el => {
        if (el.textContent?.trim() === 'Done') doneCount++;
      });
      return doneCount >= 5;
    },
    { timeout }
  );
}

async function waitForPlayerReady(page, timeout = TIMEOUTS.long) {
  await page.waitForSelector(
    'audio, [class*="player"], button',
    { state: 'visible', timeout }
  );
}

async function waitForSongReady(page, timeout = TIMEOUTS.songGeneration) {
  await page.waitForURL(/\/song\/[0-9a-f-]{36}/, { timeout });
  return page.url();
}

module.exports = {
  waitForBotResponse,
  waitForAllGenerationSteps,
  waitForPlayerReady,
  waitForSongReady,
};