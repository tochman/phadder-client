describe("Visitor can choose between Buyer and Supplier information", () => {
  it("Should see Buyers info on default", () => {
    cy.server();
    cy.visit("http://localhost:3001");
    cy.get("#buyers-button").should("exist");
    cy.get("#suppliers-button").should("exist");
    cy.contains("LOOKING FOR A SUPPLIER? WE ARE OPE FOR BUISSNIES");
    cy.get("MANY BUYERS. PLENTY OF OPPURTUNITIES. ONE MARKETPLACE").should(
      "not.exist"
    );
  });

  it("If click supplier button, new info should apper and buyer info shouldnt be shown", () => {
    cy.server();
    cy.visit("http://localhost:3001");
    cy.get("#suppliers-button").click();
    cy.contains("MANY BUYERS. PLENTY OF OPPURTUNITIES. ONE MARKETPLACE");
    cy.get("LOOKING FOR A SUPPLIER? WE ARE OPE FOR BUISSNIES").should(
      "not.exist"
    );
  });
});
