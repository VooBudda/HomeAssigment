import { test, expect, APIRequestContext } from '@playwright/test';
import { Login } from './pageobjects/login';
import { UserData } from '../utils/userData';
import * as users from '../data/users.json';
import { Signature } from './pageobjects/my-signatures';
import {EditorPage} from './pageobjects/editor-page'

// Request context is reused by all tests in the file.
let apiContext: APIRequestContext;
const userData = new UserData();

test.beforeEach(async ({ playwright }) => {
  apiContext = await playwright.request.newContext({
    // All requests we send go to this API endpoint.
    baseURL: 'https://webapp.wisestamp.com',
    extraHTTPHeaders: {
      Accept: 'application/json',
    },
  });
});

test.afterEach(async () => {
  // Dispose all responses.
  await apiContext.dispose();
});


test('Login UI - Data From JSON', async ({ page }) => {
  
  const { username } = users[0];
  const { password } = users[0];

  const login = new Login(page);
  const signature = new Signature(page);
  const editor = new EditorPage(page)

  await login.goto();
  await login.sigIn(username, password);
  await page.waitForURL('**/my-signatures');
  await signature.findTitle('My signatures');
  await signature.goToEditorPage();
  await editor.verifyNavbarOptions()
  await editor.navigateToAddons()
  await editor.validateEnhanceAddonsSection()
  await editor.validateActionSection()
  await editor.logoutFromProfileMenu()
  await page.waitForURL('**/login');
});
