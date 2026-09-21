describe("Add To Cart SauceDemo", () => {
  beforeEach(() => {
    cy.login("standard_user", "secret_sauce");
  });

  it("berhasil add to cart sauce labs backpack", () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="shopping-cart-badge"]').should("have.text", "1");
    cy.get('[data-test="shopping-cart-link"]').click();
    cy.url().should("include", "/cart.html");
    cy.get('[data-test="inventory-item-name"]').should(
      "have.text",
      "Sauce Labs Backpack"
    );
  });
  it("remove item sauce labs backpack from cart", () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="shopping-cart-link"]').click();
    cy.url().should("include", "/cart.html");
    cy.get('[data-test="shopping-cart-badge"]').should("have.text", "1");
    cy.get('[data-test="inventory-item-name"]').should(
      "have.text",
      "Sauce Labs Backpack"
    );
    cy.get('[data-test="remove-sauce-labs-backpack"]').click();
    cy.get('[data-test="inventory-item-name"]').should("not.exist");
    cy.get('[data-test="shopping-cart-badge"]').should("not.exist");
  });
});
