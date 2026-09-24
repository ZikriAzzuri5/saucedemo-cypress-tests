describe("Logout SauceDemo", () => {
  it("berhasil logout dengan akun valid", () => {
    cy.login("standard_user", "secret_sauce");
    cy.get(".bm-burger-button").click();
    cy.get('[data-test="logout-sidebar-link"]').click();

    cy.url().should("eq", "https://www.saucedemo.com/");
  });
});
