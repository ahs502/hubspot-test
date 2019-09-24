describe("Listing page", () => {
  it("should be able to get visited", () => {
    cy.visit("localhost:3000/listing").contains("Admin Tools");
  });

  it("should allways have query params in url", () => {
    cy.visit("localhost:3000/listing")
      .location("search")
      .should(search => expect(search).to.exist);
  });

  it("should be able to search", () => {
    cy.visit("localhost:3000/listing")
      .get(".listing-search-selector")
      .type("Persian (Traditional Persian Cat)")
      .get(".listing-table-body-selector")
      .contains("Persian (Traditional Persian Cat)")
      .its("length")
      .then(length => expect(length).to.equal(1));
  });

  it("should reflect the search in the url query param", () => {
    cy.visit("localhost:3000/listing")
      .get(".listing-search-selector")
      .type("Persian (Traditional Persian Cat)")
      .location("search")
      .should(
        search => expect(search.includes("Traditional%20Persian")).to.be.true
      );
  });

  it("should be able to navigate to /new-feature page", () => {
    cy.visit("localhost:3000/listing")
      .get(".listing-new-feature-link-selector")
      .click()
      .url()
      .should("eq", "http://localhost:3000/new-feature");
  });

  it("should let to choose sorting direction", () => {
    cy.visit("localhost:3000/listing")
      .get(".listing-table-body-selector")
      .contains("Abyssinian");
    cy.visit("localhost:3000/listing")
      .get(".listing-sort-direction-selector")
      .click()
      .get(".listing-table-body-selector")
      .contains("Yorkshire Terrier");
  });
});
