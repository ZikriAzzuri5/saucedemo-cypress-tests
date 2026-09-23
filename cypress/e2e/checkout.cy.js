import checkoutPage from "../pages/checkoutPage";

describe("Checkout SauceDemo", () => {
  beforeEach(() => {
    cy.login("standard_user", "secret_sauce");
  });

  it("berhasil checkout dengan 2 produk", () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="shopping-cart-badge"]').should("have.text", "1");
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    cy.get('[data-test="shopping-cart-badge"]').should("have.text", "2");
    cy.get('[data-test="shopping-cart-link"]').click();
    cy.url().should("include", "/cart.html");
    cy.get('[data-test="checkout"]').click();
    checkoutPage.fillinfo("Zikri", "Azzuri", "40511");
    checkoutPage.continue();

    checkoutPage.getPriceSummary().then(({ subtotal, tax, total }) => {
      expect(total).to.be.closeTo(subtotal + tax, 0.01);
    });
    cy.url().should("include", "/checkout-step-two.html");
    cy.get('[data-test="finish"]').click();
    cy.get('[data-test="complete-header"]').should(
      "have.text",
      "Thank you for your order!"
    );

    cy.url().should("include", "/checkout-complete.html");
  });
});
