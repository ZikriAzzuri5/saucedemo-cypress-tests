describe("Login SauceDemo", () => {
  it("berhasil login dengan akun valid", () => {
    cy.login("standard_user", "secret_sauce");

    cy.url().should("include", "/inventory.html");
  });

  it("gagal login dengan password yang salah", () => {
    cy.login("standard_user", "salah");
    cy.get('[data-test="login-button"]').click();

    cy.get('[data-test="error"]').should("be.visible");
  });
});
