const CampaignPage = require("../pageobjects/campaign.page");
const { Texts } = require("../constants");

describe("Campaign Page Header Verification", () => {
  beforeEach(async () => {
    await CampaignPage.open();
    if (
      (await CampaignPage.acceptBtn) &&
      (await CampaignPage.acceptBtn.isClickable())
    ) {
      await CampaignPage.acceptBtn.click();
    }
  });

  it("user should be redirected to Base page by clicking the Logo", async () => {
    await CampaignPage.logoBtn.waitForClickable();
    await CampaignPage.logoBtn.click();
    await expect(await browser).toHaveTitle(Texts.mainPage);
  });

  it("Our Cars page should be displayed after Our Cars link click", async () => {
    await CampaignPage.ourCarsLink.waitForClickable();
    await CampaignPage.ourCarsLink.click();
    await expect(CampaignPage.ourCarsPage).toBeDisplayed();
    await expect(
      await browser.checkElement(
        await CampaignPage.ourCarsPage,
        "Our Cars Page"
      )
    ).toEqual(0);
  });

  it("Menu page should be displayed after the user clicks Menu link", async () => {
    await CampaignPage.menuLink.waitForClickable();
    await CampaignPage.menuLink.click();
    await expect(
      await browser.checkScreen("Menu Bar header page", {
        hideElements: [await CampaignPage.mainVideo],
      })
    ).toEqual(0);
  });
});
