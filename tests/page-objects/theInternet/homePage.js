/**
 * A Nightwatch page object. The page object name is the filename.
 *
 * Usage:
 *   browser.page.theInternet.homePage()
 *
 * See the example test using this object:
 *   specs/with-page-objects/theInternet.js
 *
 * For more information on working with page objects, see:
 *   https://nightwatchjs.org/guide/concepts/page-object-model.html
 *
 */

const homeCommands = {
  // submit() {
  //   this.waitForElementVisible("@submitButton", 1000).click("@submitButton");
  //   this.pause(1000);
  //   return this; // for command-chaining
  // },
  clickCheckboxesLink() {
    this.waitForElementVisible("@checkboxes", 1000).click("@checkboxes");
    return this;
  },
};

module.exports = {
  url: "https://the-internet.herokuapp.com/",

  commands: [homeCommands],

  elements: {
    header: {
      selector: "h1",
    },

    checkboxes: {
      selector: "Checkboxes",
      locateStrategy: "link text",
    },
  },
};
