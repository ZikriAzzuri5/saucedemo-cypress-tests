describe("Login SauceDemo", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com//");
  });

  it("berhasil login dengan akun valid", () => {
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();

    cy.url().should("include", "/inventory.html");
  });

  it("gagal login dengan password yang salah", () => {
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("salah");
    cy.get('[data-test="login-button"]').click();

    cy.get('[data-test="error"]').should("be.visible");
  });
});
