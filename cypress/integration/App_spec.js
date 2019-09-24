describe("App", () => {
  describe("App routing", () => {
    it("should allow routing to /listing path", () => {
      cy.visit("localhost:3000/listing")
        .url()
        .should(
          url =>
            expect(url.startsWith("http://localhost:3000/listing")).to.be.true
        );
    });

    it("should allow routing to /new-feature path", () => {
      cy.visit("localhost:3000/new-feature")
        .url()
        .should("eq", "http://localhost:3000/new-feature");
    });

    it("should redirect any other path to /listing", () => {
      cy.visit("localhost:3000")
        .url()
        .should(
          url =>
            expect(url.startsWith("http://localhost:3000/listing")).to.be.true
        );
      cy.visit("localhost:3000/some/thing/else")
        .url()
        .should(
          url =>
            expect(url.startsWith("http://localhost:3000/listing")).to.be.true
        );
    });
  });
});
