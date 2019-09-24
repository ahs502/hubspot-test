describe("New feature page", () => {
  it("should be able to get visited", () => {
    cy.visit("localhost:3000/new-feature").contains("New Feature");
  });
});
