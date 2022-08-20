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
  clickLink(link) {
    this.waitForElementVisible(link, 1000).click(link);
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
    contextMenu: {
      selector: "Context Menu",
      locateStrategy: "link text",
    },
    formAuthentication: {
      //This link is to displayed Login
      selector: "Form Authentication",
      locateStrategy: "link text",
    },
  },
};
