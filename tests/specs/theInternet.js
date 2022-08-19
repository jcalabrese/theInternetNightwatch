/**
 * This example uses the page-objects defined at:
 *   page-objects/theInternet/
 *
 *  For more information on working with page objects, see:
 *   https://nightwatchjs.org/guide/concepts/page-object-model.html
 *
 */

describe("The Internet app", function () {
  const homePage = browser.page.theInternet.homePage(); // first page-object

  before(async () => homePage.navigate());

  after(async (browser) => browser.quit());

  it("should navigate to Welcome page", function (browser) {
    homePage.assert
      .titleContains("The Internet")
      .expect.element("@header")
      .text.to.contain("Welcome to the-internet");
  });

  it("should navigate to checkboxes and select 1", function () {
    homePage.clickCheckboxesLink();
    const checkboxesPage = browser.page.theInternet.checkboxesPage();
    checkboxesPage.expect.element("@header").text.to.equal("Checkboxes");
    checkboxesPage.clickCheckbox1();
    checkboxesPage.expect.element("@checkbox1").to.be.selected;
  });
});
