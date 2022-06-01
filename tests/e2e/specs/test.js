describe("Test the  login form", () => {
  it("1st-scenario: wrong email and any password", () => {
    cy.visit("/login");
    cy.get("#email").type("m.mohamed.sobhi.98@gmail.com");
    cy.get("#password").type("A12345678-wrong");
    cy.get(".login-btn").click();
    cy.get(".error-message").should(
      "contain",
      "Your email and/or password are incorrect"
    );
  });

  it("2nd-scenario: correct email but wrong password", () => {
    cy.visit("/login");
    cy.get("#email").type("mohamed@instabug.com");
    cy.get("#password").type("A12345678-wrong");
    cy.get(".login-btn").click();
    cy.get(".error-message").should(
      "contain",
      "Your email and/or password are incorrect"
    );
  });

  it("3rd-scenario: correct email but wrong password", () => {
    cy.visit("/login");
    cy.get("#email").type("mohamed@instabug.com");
    cy.get("#password").type("A12345678");
    cy.get(".login-btn").click();
    cy.url().should("contain", "/welcome");
  });

  it("4th-scenario: not valid email address", () => {
    cy.visit("/login");
    cy.get("#email")
      .type("dddd")
      .blur()
      .should("have.css", "border-color", "rgb(242, 66, 32)");
  });
});
