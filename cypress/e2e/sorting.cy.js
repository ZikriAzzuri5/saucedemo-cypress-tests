describe("Sorting SauceDemo", () => {
  beforeEach(() => {
    cy.login("standard_user", "secret_sauce");
  });

  it("sort produk dari A ke Z", () => {
    cy.get('[data-test="product-sort-container"]').select("az");

    cy.get(".inventory_item_name").then(($names) => {
      const names = [...$names].map((name) => name.textContent);
      const sorted = [...names].sort();

      expect(names).to.deep.equal(sorted);
    });
  });

  it("sort produk dari Z ke A", () => {
    cy.get('[data-test="product-sort-container"]').select("za");

    cy.get(".inventory_item_name").then(($names) => {
      const names = [...$names].map((name) => name.textContent);
      const sorted = [...names].sort().reverse();

      expect(names).to.deep.equal(sorted);
    });
  });

  it("sort produk dari harga rendah ke tinggi", () => {
    cy.get('[data-test="product-sort-container"]').select("lohi");

    cy.get(".inventory_item_price").then(($price) => {
      const price = [...$price].map((price) =>
        parseFloat(price.textContent.replace(/[^0-9.]/g, ""))
      );
      const sorted = [...price].sort((a, b) => a - b);

      expect(price).to.deep.equal(sorted);
    });
  });

  it("sort produk dari harga tinggi ke rendah", () => {
    cy.get('[data-test="product-sort-container"]').select("hilo");

    cy.get(".inventory_item_price").then(($price) => {
      const price = [...$price].map((price) =>
        parseFloat(price.textContent.replace(/[^0-9.]/g, ""))
      );
      const sorted = [...price].sort((a, b) => b - a);

      expect(price).to.deep.equal(sorted);
    });
  });
});
