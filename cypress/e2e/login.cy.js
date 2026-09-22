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

  it("problem_user menampilkan gambar produk yang salah", () => {
    cy.login("problem_user", "secret_sauce");

    cy.get(".inventory_item_img").then(($images) => {
      const sources = [...$images].map((image) => image.getAttribute("src"));
      const uniqueSources = new Set(sources);

      expect(uniqueSources.size).to.be.lessThan(sources.length);
    });
  });
});
