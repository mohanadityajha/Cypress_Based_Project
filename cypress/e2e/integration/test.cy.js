/// <reference types="cypress" />

describe("Automation Test", () => {
  beforeEach("Cypress Automation", () => {
    
    cy.visit("https://www.lambdatest.com/selenium-playground/input-form-demo")
  })
  it.only("Demo", () => {
    cy.visit("https://www.lambdatest.com/selenium-playground/input-form-demo")
    cy.get("#name").type("Aditya")
    cy.get("#inputEmail4").type("mohanadityajha@gmail.com")
    cy.get("#inputPassword4").type("12345678")
     //cy.get(".loginform.mt-20.p-20").click()
    //cy.get("#seleniumform").click().should("eq","Thanks for contacting us, we will get back to you shortly.")
    //cy.get(".bg-lambda-900").click()
      cy.get('.bg-lambda-900').click()
    

  })
})