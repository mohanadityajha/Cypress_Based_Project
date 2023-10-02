/// <reference types = "cypress"/>

describe("Interview Preparation", () => {
  
  beforeEach("Cypress", () => {

    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
  })
  it("Navigation Page", () => {
    cy.visit("https://www.google.com/")
    cy.go("back")
    

  })
})