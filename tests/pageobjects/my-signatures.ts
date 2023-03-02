import {expect, Locator, Page } from '@playwright/test';

export class Signature {
  readonly page: Page;
  readonly pageTitle: Locator;
  readonly getNawSignatures: Locator;
  readonly getNawEditor: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pageTitle = page.locator('//div[@class="my-signatures-title"]')
    this.getNawSignatures = page.locator('//div[@nav-btn-id="MySignatures"]');
    this.getNawEditor = page.locator('//button[@class="signature-item-edit-btn"]');
  }

  async goto(){
    await this.page.goto('https://playwright.dev/my-signatures');
  }

  async findTitle(pageTitle: string) {
    expect(this.pageTitle).toBeVisible
    expect(await this.pageTitle.textContent()).toEqual(pageTitle)
  }

  async goToEditorPage() {
    await this.getNawEditor.click()
    await this.page.waitForURL('**/editor');
  }
}
