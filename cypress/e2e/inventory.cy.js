import inventoryPage from "../pages/inventoryPage";

describe("Inventory SauceDemo", () => {
  it("problem_user menampilkan gambar produk yang salah", () => {
    cy.login("problem_user", "secret_sauce");

    inventoryPage.getImageSources().then(({ sources, uniqueSources }) => {
      expect(uniqueSources.size).to.be.lessThan(sources.length);
    });
  });
});
