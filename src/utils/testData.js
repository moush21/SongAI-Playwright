// testData.js
require('dotenv').config();

const BASE_URL = process.env.BASE_URL || 'https://songai-frontend.vercel.app';

const EXISTING_USER = {
  name:     'Test User',
  email:    process.env.SONGAI_TEST_EMAIL    || 'testuser@songai.test',
  password: process.env.SONGAI_TEST_PASSWORD || 'TestPass@123!',
};

const INVALID_USER = {
  name:     'Nobody',
  email:    'notreal@example.com',
  password: 'WrongPass999',
};

function generateNewUser() {
  const id = Date.now();
  return {
    name:     `Test User ${id}`,
    email:    `testuser+${id}@mailinator.com`,
    password: 'TestPass@123!',
  };
}

const SONG_PROMPTS = {
  anniversary: {
    initial:   "I want a song for my wife's 10th anniversary. We met in Paris.",
    followUp1: 'Make it romantic and emotional',
  },
  birthday: {
    initial:   "My dad turns 60 — he loves fishing and golf.",
    followUp1: 'Make it funny and upbeat',
  },
  y2k: {
    initial:   'Make 1 min song for my instagram reel, cheerful girly y2k vibe',
    followUp1: 'Show women are independent and empowered',
  },
};

const ROUTES = {
  home:      '/',
  login:     '/auth/login',
  signup:    '/auth/signup',
  dashboard: '/dashboard',
  create:    '/dashboard?view=create',
  preview:   '/preview',
  song:      (id) => `/song/${id}`,
};

const TIMEOUTS = {
  short:          5_000,
  medium:        15_000,
  long:          30_000,
  botResponse:   Number(process.env.BOT_RESPONSE_TIMEOUT)    || 15_000,
  songGeneration:Number(process.env.SONG_GENERATION_TIMEOUT) || 90_000,
};

module.exports = {
  BASE_URL,
  EXISTING_USER,
  INVALID_USER,
  generateNewUser,
  SONG_PROMPTS,
  ROUTES,
  TIMEOUTS,
};