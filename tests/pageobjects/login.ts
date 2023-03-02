import { Locator, Page } from '@playwright/test';

export class Login {
  readonly page: Page;
  readonly username: Locator;
  readonly password: Locator;
  readonly signIn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.username = page.locator('(//input[@aid="page.login.form.input.email"])');
    this.password = page.locator('(//input[@aid="page.login.form.input.password"])');
    this.signIn = page.locator('(//button[@aid="page.login.form.login.button"])');
  }

  async goto() {
    await this.page.goto('https://webapp.wisestamp.com/login');
  }

  async sigIn(username:string, password:string) {
    await this.username.type(username);
    await this.password.type(password);
    await this.signIn.click();
  }
}
