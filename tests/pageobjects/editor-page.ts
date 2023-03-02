import { expect, Locator, Page } from '@playwright/test';

export class EditorPage {
  readonly page: Page;
  readonly getEditorPage: Locator;
  readonly getEditorHeader: Locator;
  readonly getNavigateBack: Locator;
  readonly getMySignatureDropdown: Locator;
  readonly getIconButtonCreate: Locator;
  readonly getIconButtonRename: Locator;
  readonly getIconButtonDuplicate: Locator;
  readonly getEditorTabMenu: Locator;

  readonly getSignatureTabDetails: Locator;
  readonly getSignatureTabSocial: Locator;
  readonly getSignatureTabTemplate: Locator;
  readonly getSignatureTabDesign: Locator;
  readonly getSignatureTabAddons: Locator;

  readonly getEnhanceSection: Locator;

  readonly getAppsSignoff: Locator;
  readonly getAppsDisclaimer: Locator;
  readonly getAppsQuotes: Locator;
  readonly getAppsGreen_footer: Locator;
  readonly getAppsYoutube_status: Locator;
  readonly getAppsInstagram_status: Locator;
  readonly getAppsImage_gallery: Locator;
  
  readonly getActionSection: Locator;

  readonly getAppsMeeting_button: Locator;
  readonly getAppsPayment_button: Locator;
  readonly getAppsSocial_buttons: Locator;
  readonly getAppsBanner_house: Locator;
  readonly getAppsCustom_button: Locator;
  readonly getAppsBanner: Locator;
  readonly getAppsPromotion_button: Locator;

  readonly getAppsHtml: Locator;
  readonly getAppsVideo_meeting: Locator;
  readonly getAppsLeave_feedback: Locator;
  readonly getAppsJoin_webinar: Locator;
  readonly getAppsJoin_newsletter: Locator;
  readonly getAppsDownload_app: Locator;
  readonly getAppsPost_job: Locator;

  readonly getAppTitle: Locator;
  readonly getCloseAppButton: Locator;
  readonly getPreviewPlane: Locator;

  readonly getProfileMenu: Locator;
  readonly getLogoutButtonFromProfileMenu: Locator;
  readonly getPopup: Locator;
  readonly getCloseButtonOnPopup: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getEditorPage = page.locator('div[class="editor-page"]');
    this.getEditorHeader = page.locator('div[class="editor-header"]');
    this.getNavigateBack = page.locator('(//a[@aid="page.editor.header.back_button"])')
    this.getMySignatureDropdown = page.locator('div[class="ws-dropdown"]')
    this.getIconButtonCreate = page.locator('(//div[@aid="page.editor.signature.icon_button.create"])')
    this.getIconButtonDuplicate = page.locator('(//div[@aid="page.editor.signature.icon_button.rename"])')
    this.getIconButtonRename = page.locator('(//div[@aid="page.editor.signature.icon_button.duplicate"])')
    this.getEditorTabMenu = page.locator('//div[@class="editor-tab-menu"]')

    this.getSignatureTabDetails = page.locator('//div[@aid="page.editor.signature.tabs.details"]')
    this.getSignatureTabSocial = page.locator('//div[@aid="page.editor.signature.tabs.social"]')
    this.getSignatureTabTemplate = page.locator('//div[@aid="page.editor.signature.tabs.templates"]')
    this.getSignatureTabDesign = page.locator('//div[@aid="page.editor.signature.tabs.design"]')
    this.getSignatureTabAddons = page.locator('//div[@aid="page.editor.signature.tabs.addons"]')

    this.getEnhanceSection = page.locator(`//div[contains(text(),'Enhance your signature')]`)

    this.getAppsSignoff = page.locator('(//div[@aid="page.editor.apps.signoff"])')
    this.getAppsDisclaimer = page.locator('(//div[@aid="page.editor.apps.disclaimer"])')
    this.getAppsQuotes = page.locator('(//div[@aid="page.editor.apps.quotes"])')
    this.getAppsGreen_footer = page.locator('(//div[@aid="page.editor.apps.green_footer"])')
    this.getAppsYoutube_status = page.locator('(//div[@aid="page.editor.apps.youtube_status"])')
    this.getAppsInstagram_status = page.locator('(//div[@aid="page.editor.apps.instagram_status"])')
    this.getAppsImage_gallery = page.locator('(//div[@aid="page.editor.apps.image_gallery"])')


    this.getActionSection = page.locator(`//div[contains(text(),'Call to action')]`)

    this.getAppsMeeting_button = page.locator('(//div[@aid="page.editor.apps.meeting_button"])')
    this.getAppsPayment_button = page.locator('(//div[@aid="page.editor.apps.payment_button"])')
    this.getAppsSocial_buttons = page.locator('(//div[@aid="page.editor.apps.social_buttons"])')
    this.getAppsBanner_house = page.locator('(//div[@aid="page.editor.apps.banner_house"])')
    this.getAppsCustom_button = page.locator('(//div[@aid="page.editor.apps.custom_button"])')
    this.getAppsBanner = page.locator('(//div[@aid="page.editor.apps.banner"])')
    this.getAppsPromotion_button = page.locator('(//div[@aid="page.editor.apps.promotion_button"])')

    this.getAppsHtml = page.locator('(//div[@aid="page.editor.apps.html"])')
    this.getAppsVideo_meeting = page.locator('(//div[@aid="page.editor.apps.video_meeting"])')
    this.getAppsLeave_feedback = page.locator('(//div[@aid="page.editor.apps.leave_feedback"])')
    this.getAppsJoin_webinar = page.locator('(//div[@aid="page.editor.apps.join_webinar"])')
    this.getAppsJoin_newsletter = page.locator('(//div[@aid="page.editor.apps.join_newsletter"])')
    this.getAppsDownload_app = page.locator('(//div[@aid="page.editor.apps.download_app"])')
    this.getAppsPost_job = page.locator('(//div[@aid="page.editor.apps.post_job"])')

    this.getAppTitle = page.locator('(//div[@class="app__title"])')
    this.getCloseAppButton = page.locator('(//span[@class="sw-icon-cross"])')
    this.getPreviewPlane = page.locator('(//div[@class="preview-pane"])')

    this.getProfileMenu = page.locator('(//div[@aid="header.button.profile_menu"])')
    this.getLogoutButtonFromProfileMenu = page.locator('(//a[@aid="header.profile_menu.button.logout"])')
    this.getPopup = page.locator('(//div[@class="ws-hellobar is-toast"])')
    this.getCloseButtonOnPopup = page.locator('//div[@class="close-btn"]')

  }

  async goto() {
    await this.page.goto('https://playwright.dev/editor');
  }

  async verifyNavbarOptions() {
    expect(this.getEditorTabMenu).toBeVisible
    expect(this.getSignatureTabDetails).toBeVisible
    expect(this.getSignatureTabSocial).toBeVisible
    expect(this.getSignatureTabTemplate).toBeVisible
    expect(this.getSignatureTabDesign).toBeVisible
    expect(this.getSignatureTabAddons).toBeVisible
  }

  async navigateToAddons() {
    await this.page.locator('#hb-5318004607942656 svg').first().click()
    // const locator = await this.page.frameLocator(`locator('#hb-5318004607942656 svg').first()`).getByTitle('Early Bird Discount')
    // await locator.click();
    expect(this.getSignatureTabAddons).toBeVisible
    this.getSignatureTabAddons.click()
    expect(await this.getEnhanceSection.textContent()).toEqual('Enhance your signature')
    expect(await this.getActionSection.textContent()).toEqual('Call to action')
    
  }

  async validateEnhanceAddonsSection() {
    expect(this.getAppsSignoff).toBeVisible
    expect(this.getAppsDisclaimer).toBeVisible
    expect(this.getAppsQuotes).toBeVisible
    expect(this.getAppsGreen_footer).toBeVisible
    expect(this.getAppsYoutube_status).toBeVisible
    expect(this.getAppsInstagram_status).toBeVisible
    expect(this.getAppsImage_gallery).toBeVisible
  }

  async validateActionSection() {

    expect(this.getAppsMeeting_button).toBeVisible
    await this.getAppsMeeting_button.click()
    expect(await this.getAppTitle.textContent()).toEqual('Online Meeting Scheduler')
    await this.getCloseAppButton.click()
    expect(this.getPreviewPlane).toBeVisible

    expect(this.getAppsPayment_button).toBeVisible
    await this.getAppsPayment_button.click()
    expect(await this.getAppTitle.textContent()).toEqual('Payment Button')
    await this.getCloseAppButton.click()
    expect(this.getPreviewPlane).toBeVisible

    expect(this.getAppsSocial_buttons).toBeVisible
    await this.getAppsSocial_buttons.click()
    expect(await this.getAppTitle.textContent()).toEqual('Social buttons')
    await this.getCloseAppButton.click()
    expect(this.getPreviewPlane).toBeVisible

    expect(this.getAppsBanner_house).toBeVisible
    await this.getAppsBanner_house.click()
    expect(await this.getAppTitle.textContent()).toEqual('Predesigned banners')
    await this.getCloseAppButton.click()
    expect(this.getPreviewPlane).toBeVisible

    expect(this.getAppsCustom_button).toBeVisible
    await this.getAppsCustom_button.click()
    expect(await this.getAppTitle.textContent()).toEqual('Custom Button')
    await this.getCloseAppButton.click()
    expect(this.getPreviewPlane).toBeVisible

    expect(this.getAppsBanner).toBeVisible
    await this.getAppsBanner.click()
    expect(await this.getAppTitle.textContent()).toEqual('Upload my banner')
    await this.getCloseAppButton.click()
    expect(this.getPreviewPlane).toBeVisible

    expect(this.getAppsPromotion_button).toBeVisible
    await this.getAppsPromotion_button.click()
    expect(await this.getAppTitle.textContent()).toEqual('Sales event')
    await this.getCloseAppButton.click()
    expect(this.getPreviewPlane).toBeVisible

    expect(this.getAppsHtml).toBeVisible
    await this.getAppsHtml.click()
    expect(await this.getAppTitle.textContent()).toEqual('Use custom HTML')
    await this.getCloseAppButton.click()
    expect(this.getPreviewPlane).toBeVisible

    expect(this.getAppsVideo_meeting).toBeVisible
    await this.getAppsVideo_meeting.click()
    expect(await this.getAppTitle.textContent()).toEqual('Video conference')
    await this.getCloseAppButton.click()
    expect(this.getPreviewPlane).toBeVisible

    expect(this.getAppsLeave_feedback).toBeVisible
    await this.getAppsLeave_feedback.click()
    expect(await this.getAppTitle.textContent()).toEqual('Give us Feedback')
    await this.getCloseAppButton.click()
    expect(this.getPreviewPlane).toBeVisible

    expect(this.getAppsJoin_webinar).toBeVisible
    await this.getAppsJoin_webinar.click()
    expect(await this.getAppTitle.textContent()).toEqual('Join our webinar')
    await this.getCloseAppButton.click()
    expect(this.getPreviewPlane).toBeVisible

    expect(this.getAppsJoin_newsletter).toBeVisible
    await this.getAppsJoin_newsletter.click()
    expect(await this.getAppTitle.textContent()).toEqual('Join our Newsletter')
    await this.getCloseAppButton.click()
    expect(this.getPreviewPlane).toBeVisible

    expect(this.getAppsDownload_app).toBeVisible
    await this.getAppsDownload_app.click()
    expect(await this.getAppTitle.textContent()).toEqual('Download our app')
    await this.getCloseAppButton.click()
    expect(this.getPreviewPlane).toBeVisible

    expect(this.getAppsPost_job).toBeVisible
    await this.getAppsPost_job.click()
    expect(await this.getAppTitle.textContent()).toEqual('Post a job offer')
    await this.getCloseAppButton.click()
    expect(this.getPreviewPlane).toBeVisible
  }

  async logoutFromProfileMenu() {
    expect(this.getProfileMenu).toBeVisible
    await this.getProfileMenu.click()
    expect(this.getLogoutButtonFromProfileMenu).toBeVisible
    await this.getLogoutButtonFromProfileMenu.click()
  }
}
