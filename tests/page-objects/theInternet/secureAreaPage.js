/**
 * A Nightwatch page object. The page object name is the filename.
 *
 * Usage:
 *   browser.page.theInternet.secureAreaPage()
 *
 *
 * For more information on working with page objects, see:
 *   https://nightwatchjs.org/guide/concepts/page-object-model.html
 *
 */

const secureAreaComands = {};

module.exports = {
  url: "https://the-internet.herokuapp.com/context_menu",

  commands: [secureAreaComands],

  elements: {
    header: {
      selector: "h2",
    },
    flashMessage: {
      selector: "#flash",
    },
  },
};
