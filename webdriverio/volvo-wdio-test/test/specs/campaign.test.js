const CampaignPage = require("../pageobjects/campaign.page");
const { Texts } = require("../constants");

describe("Campaign Page Verification", () => {
  beforeEach(async () => {
    await CampaignPage.open();
    if (
      (await CampaignPage.acceptBtn) &&
      (await CampaignPage.acceptBtn.isClickable())
    ) {
      await CampaignPage.acceptBtn.click();
    }
  });

  it("should open the Campaign page and verify the title", async () => {
    await expect(browser).toHaveTitle(Texts.campaignPage);
  });

  it("the Main Text should be displayed correctly on the Campaign page", async () => {
    await CampaignPage.mainTextSection.isDisplayed();
    await expect(await CampaignPage.mainTextSection).toHaveText(
      Texts.mainSection
    );
  });

  it("the Main Video block should be displayed", async () => {
    await expect(CampaignPage.mainVideo).toBeDisplayed();
    await expect(CampaignPage.watchTheStoryVideoBtn).toBeDisplayed();
  });

  it("verify the Main Video button text", async () => {
    await expect(CampaignPage.mainVideoBtnText).toHaveText(Texts.mainVideoBtn);
  });

  it("the play/pause button should be in play action by default", async () => {
    await expect(CampaignPage.mainVideoPlayBtn).toBeDisplayed();
    await expect(CampaignPage.mainVideoPlayBtn).toHaveAttribute(
      "aria-label",
      "pause"
    );
  });

  it("the user should be able to stop the video by click the play/pause button", async () => {
    await CampaignPage.mainVideoPlayBtn.click();
    await expect(CampaignPage.mainVideoPlayBtn).toHaveAttribute(
      "aria-label",
      "play"
    );
  });

  it("the Text Statement section should be displayed", async () => {
    await expect(CampaignPage.textStatementSection).toBeDisplayed();
    await expect(CampaignPage.textStatementSection).toHaveTextContaining(
      Texts.statementSection
    );
  });

  it("the Icons Section should be displayed correctly", async () => {
    await CampaignPage.iconsTextSection.scrollIntoView({
      block: "center",
    });
    await expect(CampaignPage.iconsTextSection).toBeDisplayed();
    //await browser.$('[data-autoid="IconTextList:icon"]').waitForDisplayed();
    await expect(await browser.checkScreen("Icons Section")).toEqual(0);
  });

  it("the Car Safety link should be displayed", async () => {
    await expect(CampaignPage.carSafetyLink).toBeDisplayed();
    await expect(CampaignPage.carSafetyLink).toHaveText(Texts.carSafetyLink);
  });

  it("the user should be redirected to the Car Safety page after click to the link", async () => {
    await CampaignPage.carSafetyLink.click();
    await expect(browser).toHaveTitle(Texts.carSafetyPage);
  });

  it("the Video Testimonials section should be displayed", async () => {
    await expect(CampaignPage.videoTestimonialsSection).toBeDisplayed();
    await expect(CampaignPage.videoTestimonialsSection).toHaveTextContaining(
      Texts.videoTestimonials
    );
  });

  it("verify the Decades of Innovation section text", async () => {
    await expect(CampaignPage.decadesOfInnovationTextSection).toBeDisplayed();
    await expect(
      CampaignPage.decadesOfInnovationTextSection
    ).toHaveTextContaining(Texts.decadesOfInnovation);
  });

  it("the Learn More button should be displayed", async () => {
    await expect(CampaignPage.learnMoreBtn).toBeDisplayed();
    await expect(CampaignPage.learnMoreBtn).toHaveText(Texts.learnMoreBtn);
  });

  it("the user should be redirected to the Safety innovations page by the Learn More button", async () => {
    await CampaignPage.learnMoreBtn.click();
    await expect(browser).toHaveTitle(Texts.safetyInnovationsPage);
  });
});
