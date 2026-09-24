describe("Login SauceDemo", () => {
  it("berhasil login dengan akun valid", () => {
    cy.login("standard_user", "secret_sauce");

    cy.url().should("include", "/inventory.html");
  });

  it("gagal login dengan password yang salah", () => {
    cy.login("standard_user", "salah");

    cy.get('[data-test="error"]').should("be.visible");
  });

  it("gagal login dengan akun yang di-lock", () => {
    cy.login("locked_out_user", "secret_sauce");

    cy.get('[data-test="error"]').should(
      "have.text",
      "Epic sadface: Sorry, this user has been locked out."
    );
  });
});

describe("Performance Glitch User", () => {
  it("berhasil login walau lambat", () => {
    cy.login("performance_glitch_user", "secret_sauce");

    cy.url({ timeout: 10000 }).should("include", "/inventory.html");
  });
});
