describe("visit the site", () => {
  it("loads properly", () => {
    cy.visit("http://localhost:3000/");
    expect(true).to.equal(true);
  });
});
