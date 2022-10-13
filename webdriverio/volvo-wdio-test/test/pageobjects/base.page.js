/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
module.exports = class Page {
  /**
   * Opens a sub page of the page
   * @param path path of the sub page (e.g. /path/to/page.html)
   */
  async open(path) {
    return browser.url(`https://www.volvocars.com/intl/${path}`);
  }
  get acceptBtn() {
    return browser.$('//*[@id="onetrust-accept-btn-handler"]');
  }
  //Header page elements
  get logoBtn() {
    return browser
      .$('//*[@id="sitenav:topbar"]')
      .$('[data-autoid="nav:siteNavLogoSmall"]');
  }
  get ourCarsLink() {
    return browser.$('//*[@id="nav:topNavCarMenu"]');
  }
  get ourCarsPage() {
    return browser.$('[data-autoid="nav:carMenuDesktop"]');
  }
  get menuLink() {
    return browser.$('//*[@id="sitenav-sidenav-toggle"]/em');
  }
  //Footer page elements
  get cookiesLink() {
    return browser.$$('[data-autoid="footer:links"]')[0];
  }
  get legalLink() {
    return browser.$$('[data-autoid="footer:links"]')[1];
  }
  get privacyLink() {
    return browser.$$('[data-autoid="footer:links"]')[2];
  }
  get socialMediaLink() {
    return browser.$$('[data-autoid="footer:links"]')[3];
  }
  get tellUsLink() {
    return browser.$$('[data-autoid="footer:links"]')[4];
  }
};
