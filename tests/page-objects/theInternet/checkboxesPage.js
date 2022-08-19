/**
 * A Nightwatch page object. The page object name is the filename.
 *
 * Usage:
 *   browser.page.theInternet.checkboxesPage()
 *
 * See the example test using this object:
 *   specs/with-page-objects/theInternet.js
 *
 * For more information on working with page objects, see:
 *   https://nightwatchjs.org/guide/concepts/page-object-model.html
 *
 */

const checkboxesComands = {
  // submit() {
  //   this.waitForElementVisible("@submitButton", 1000).click("@submitButton");
  //   this.pause(1000);
  //   return this; // for command-chaining
  // },
  clickCheckbox1() {
    this.waitForElementVisible("@checkbox1", 1000).click("@checkbox1");
    return this;
  },
};

module.exports = {
  url: "https://the-internet.herokuapp.com/checkboxes",

  commands: [checkboxesComands],

  elements: {
    header: {
      selector: "h3",
    },

    checkbox1: {
      selector: "input[type='checkbox']",
      index: 0,
    },
    checkbox2: {
      selector: "input[type='checkbox']",
      index: 1,
    },
  },
};
