/**
 * A Nightwatch page object. The page object name is the filename.
 *
 * Usage:
 *   browser.page.theInternet.contextMenuPage()
 *
 *
 * For more information on working with page objects, see:
 *   https://nightwatchjs.org/guide/concepts/page-object-model.html
 *
 */

const contextMenuComands = {
  rightClickintheBox() {
    this.rightClick("@box");
    return this;
  },
};

module.exports = {
  url: "https://the-internet.herokuapp.com/context_menu",

  commands: [contextMenuComands],

  elements: {
    header: {
      selector: "h3",
    },
    box: {
      selector: "#hot-spot",
    },
  },
};
