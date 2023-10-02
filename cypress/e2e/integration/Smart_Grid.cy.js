/// <reference types ="cypress"/>


describe("Smart Grid", () => {
  beforeEach("Drop Down", () => {
    cy.visit("https://demo.kitchen.sgrids.io/auth/login");
    
  })
  it("Dynamic", () => {

    cy.get('.ng-tns-c176-1 > .ant-input-wrapper > .ant-input').type("Aditya.m@sgrids.io");
    cy.get('.ng-tns-c176-2 > .ant-input-wrapper > .ant-input').type("Aditya@2023")
    cy.get('.ant-btn').click()
    
  });
});
  

