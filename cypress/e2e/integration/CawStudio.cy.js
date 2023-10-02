///   <reference types ="cypress" />


describe("Automation Testing", () => {
  beforeEach("Cypress Automation", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
 })
  
  it.only("Run the Login Page", () => {
    cy.LoginPage("Admin","admin123")
    cy.title().should("be.equal","Dashboard")
    
  })
  
   it("Assertion of the URL", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
  
    let active_url = cy.url().should("include", "orangehrmlive")
      console.log(active_url)
  })
  

})