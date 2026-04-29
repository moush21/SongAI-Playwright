import { DashboardPageElements } from '../pageElements/DashboardPageEle.js';

export default class DashboardPage {
  constructor(page) {
    this.page = page;

    this.welcomeHeading = page.locator(DashboardPageElements.welcomeHeading);
    this.welcomeSubtext = page.locator(DashboardPageElements.welcomeSubtext);

    this.songAILogoSidebar = page.locator(DashboardPageElements.songAILogoSidebar);
    this.searchBtn = page.locator(DashboardPageElements.searchBtn);

    this.createLabel = page.locator(DashboardPageElements.createLabel);
    this.createNewSongSidebar = page.locator(DashboardPageElements.createNewSongSidebar);

    this.yourMusicLabel = page.locator(DashboardPageElements.yourMusicLabel);
    this.yourLatestSongBtn = page.locator(DashboardPageElements.yourLatestSongBtn);
    this.yourSongsBtn = page.locator(DashboardPageElements.yourSongsBtn);

    this.giftingLabel = page.locator(DashboardPageElements.giftingLabel);
    this.sendASongLink = page.locator(DashboardPageElements.sendASongLink);
    this.yourGiftsLink = page.locator(DashboardPageElements.yourGiftsLink);

    this.planCard = page.locator(DashboardPageElements.planCard);
    this.planName = page.locator(DashboardPageElements.planName);
    this.planSongsRemaining = page.locator(DashboardPageElements.planSongsRemaining);
    this.upgradePlanLink = page.locator(DashboardPageElements.upgradePlanLink);

    this.userAvatar = page.locator(DashboardPageElements.userAvatar);
    this.userNameDisplay = page.locator(DashboardPageElements.userNameDisplay);
    this.userEmailDisplay = page.locator(DashboardPageElements.userEmailDisplay);
    this.logoutBtn = page.locator(DashboardPageElements.logoutBtn);

    this.createNewSongCard = page.locator(DashboardPageElements.createNewSongCard);
    this.createNewSongCardText = page.locator(DashboardPageElements.createNewSongCardText);
    this.noSongsMessage = page.locator(DashboardPageElements.noSongsMessage);

    this.settingsBtn = page.locator(DashboardPageElements.settingsBtn);
    this.myAccountOption = page.locator(DashboardPageElements.myAccountOption);
    this.billingOption = page.locator(DashboardPageElements.billingOption);
    this.ordersOption = page.locator(DashboardPageElements.ordersOption);
    this.notificationsOption = page.locator(DashboardPageElements.notificationsOption);
    this.privacyOption = page.locator(DashboardPageElements.privacyOption);
    this.supportOption = page.locator(DashboardPageElements.supportOption);

    this.aiHelpBtn = page.locator(DashboardPageElements.aiHelpBtn);

    this.backToDashboardLink = page.locator(DashboardPageElements.backToDashboardLink);

    this.myAccountHeading = page.locator(DashboardPageElements.myAccountHeading);
    this.billingHeading = page.locator(DashboardPageElements.billingHeading);
    this.billingPaymentHistory = page.locator(DashboardPageElements.billingPaymentHistory);
    this.billingPaymentMethod = page.locator(DashboardPageElements.billingPaymentMethod);

    this.ordersHeading = page.locator(DashboardPageElements.ordersHeading);
    this.ordersEmptyMessage = page.locator(DashboardPageElements.ordersEmptyMessage);

    this.notificationsHeading = page.locator(DashboardPageElements.notificationsHeading);
    this.notificationsSaveBtn = page.locator(DashboardPageElements.notificationsSaveBtn);
    this.notificationsResetBtn = page.locator(DashboardPageElements.notificationsResetBtn);

    this.privacyHeading = page.locator(DashboardPageElements.privacyHeading);
    this.privacyDataWeStore = page.locator(DashboardPageElements.privacyDataWeStore);
    this.privacyExportData = page.locator(DashboardPageElements.privacyExportData);
    this.privacyDeleteAccount = page.locator(DashboardPageElements.privacyDeleteAccount);

    this.supportHeading = page.locator(DashboardPageElements.supportHeading);
    this.supportContactForm = page.locator(DashboardPageElements.supportContactForm);
    this.supportCommonQuestions = page.locator(DashboardPageElements.supportCommonQuestions);
  }

  async navigateTo(url) {
    await this.page.goto(url, { waitUntil: 'domcontentloaded' });
  }

  async clickSettings() {
    await this.settingsBtn.click();
  }

  async clickSearch() {
    await this.searchBtn.click();
  }

  async clickYourLatestSong() {
    await this.yourLatestSongBtn.click();
  }

  async clickYourSongs() {
    await this.yourSongsBtn.click();
  }

  async clickSendASong() {
    await this.sendASongLink.click();
  }

  async clickYourGifts() {
    await this.yourGiftsLink.click();
  }

  async clickUpgradePlan() {
    await this.upgradePlanLink.click();
  }

  async clickAIHelp() {
    await this.aiHelpBtn.click();
  }

  async clickMyAccount() {
    await this.myAccountOption.click();
  }

  async clickBilling() {
    await this.billingOption.click();
  }

  async clickOrders() {
    await this.ordersOption.click();
  }

  async clickNotifications() {
    await this.notificationsOption.click();
  }

  async clickPrivacy() {
    await this.privacyOption.click();
  }

  async clickSupport() {
    await this.supportOption.click();
  }

  async clickBackToDashboard() {
    await this.backToDashboardLink.click();
  }

}
