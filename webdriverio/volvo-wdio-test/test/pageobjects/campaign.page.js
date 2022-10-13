const Page = require("./base.page");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CampaignPage extends Page {
  /**
   * define selectors using getter methods
   */
  get mainTextSection() {
    return browser.$('[data-autoid="ModelIntro"] h2');
  }
  get mainVideo() {
    return browser.$('[data-autoid="Video-1"]');
  }
  get watchTheStoryVideoBtn() {
    return this.mainVideo.$("button");
  }
  get mainVideoBtnText() {
    return browser.$('[data-autoid="Video-1"] button span');
  }
  get mainVideoPlayBtn() {
    return browser.$('//*[@id="Video-1"]/section/div/button/div/button');
  }
  get textStatementSection() {
    return browser.$('[data-autoid="TextStatement-1"]');
  }
  get iconsTextSection() {
    return browser.$('[data-autoid="IconCallouts-1"]');
  }
  get carSafetyLink() {
    return browser.$('[data-autoid="iconCallouts:cta"]');
  }
  get videoTestimonialsSection() {
    return browser.$('[data-autoid="VideoTestimonials-1"]');
  }
  get decadesOfInnovationTextSection() {
    return browser.$('[data-autoid="imageWithText:title"]');
  }
  get learnMoreBtn() {
    return browser.$('[data-autoid="imageWithText:primaryCta"]');
  }

  /**
   * overwrite specific options to adapt it to page object
   */
  async open() {
    return super.open("v/car-safety/a-million-more");
  }
}

module.exports = new CampaignPage();
