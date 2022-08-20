/**
 * A Nightwatch page object. The page object name is the filename.
 *
 * Usage:
 *   browser.page.theInternet.loginPagePage()
 *
 *
 * For more information on working with page objects, see:
 *   https://nightwatchjs.org/guide/concepts/page-object-model.html
 *
 */

const loginPageComands = {
  submitLoginForm() {
    this.click("@submitBtn");
    return this;
  },
};

module.exports = {
  url: "https://the-internet.herokuapp.com/login",

  commands: [loginPageComands],

  elements: {
    header: {
      selector: "h2",
    },
    usernameInput: {
      selector: "#username",
    },
    passwordInput: {
      selector: "#password",
    },
    submitBtn: {
      selector: "button[type='submit']",
    },
  },
};
