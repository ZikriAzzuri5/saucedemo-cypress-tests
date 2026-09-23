class CheckoutPage {
  fillinfo(firstName, lastName, postalCode) {
    cy.get('[data-test="firstName"]').type(firstName);
    cy.get('[data-test="lastName"]').type(lastName);
    cy.get('[data-test="postalCode"]').type(postalCode);
  }

  continue() {
    cy.get('[data-test="continue"]').click();
  }

  getPriceSummary() {
    return cy
      .get('[data-test="subtotal-label"]')
      .invoke("text")
      .then((subtotalText) => {
        return cy
          .get('[data-test="tax-label"]')
          .invoke("text")
          .then((taxText) => {
            return cy
              .get('[data-test="total-label"]')
              .invoke("text")
              .then((totalText) => {
                return {
                  subtotal: parseFloat(subtotalText.replace(/[^0-9.]/g, "")),
                  tax: parseFloat(taxText.replace(/[^0-9.]/g, "")),
                  total: parseFloat(totalText.replace(/[^0-9.]/g, "")),
                };
              });
          });
      });
  }
}

export default new CheckoutPage();
