/**
 * This example uses the page-objects defined at:
 *   page-objects/theInternet/
 *
 *  For more information on working with page objects, see:
 *   https://nightwatchjs.org/guide/concepts/page-object-model.html
 *
 */

const { Nightwatch } = require("nightwatch");

describe("The Internet app", function () {
  const homePage = browser.page.theInternet.homePage(); // first page-object

  beforeEach(async () => homePage.navigate());

  after(async (browser) => browser.quit());

  it("should navigate to Welcome page", function (browser) {
    homePage.assert
      .titleContains("The Internet")
      .expect.element("@header")
      .text.to.contain("Welcome to the-internet");
  });

  it("should navigate to checkboxes and select 1", function () {
    homePage.clickLink("@checkboxes");
    const checkboxesPage = browser.page.theInternet.checkboxesPage();
    checkboxesPage.expect.element("@header").text.to.equal("Checkboxes");
    checkboxesPage.clickCheckbox1();
    checkboxesPage.expect.element("@checkbox1").to.be.selected;
  });

  it("Should navigate to Context Menu and right click", () => {
    homePage.clickLink("@contextMenu");
    const contextMenuPage = browser.page.theInternet.contextMenuPage();
    contextMenuPage.expect.element("@header").text.to.equal("Context Menu");
    contextMenuPage.rightClickintheBox();
    browser.getAlertText((result) => {
      var alertText = result.value;
      expect(alertText).to.equal("You selected a context menu");
    });
    browser.acceptAlert();
  });

  it("should login and go to secure area", () => {
    homePage.clickLink("@formAuthentication");
    const loginPage = browser.page.theInternet.loginPage();
    loginPage.expect.element("@header").text.to.equal("Login Page");
    loginPage.setValue("@usernameInput", "tomsmith");
    loginPage.setValue("@passwordInput", "SuperSecretPassword!");
    loginPage.submitLoginForm();
    const secureAreaPage = browser.page.theInternet.secureAreaPage();
    secureAreaPage.expect.element("@header").text.to.equal("Secure Area");
    secureAreaPage.expect
      .element("@flashMessage")
      .text.to.contain("You logged into a secure area!");
  });
});
