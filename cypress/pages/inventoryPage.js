class InventoryPage {
  getImageSources() {
    return cy.get(".inventory_item_img").then(($images) => {
      const sources = [...$images].map((image) => image.getAttribute("src"));
      const uniqueSources = new Set(sources);
      return {
        sources,
        uniqueSources,
      };
    });
  }
}

export default new InventoryPage();
