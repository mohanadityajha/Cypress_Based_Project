/// <reference types = "cypress" />

describe(" Read-Write Files in Cypress Tests", () => {
  beforeEach("Cypress Automation ",function() {
    cy.fixture("example.json").as("data")
  
  })
  
  it("Read-Files Using fixture", function() {
    cy.fixture("example.json").its("name").should("eq", "cypress")
    cy.log(this.data.name)
    cy.log(this.data.email)   
    cy.log(this.data.body)

  })
  // it("Read_Files", function () {
  //   cy.readFile("./cypress/e2e/integration/fixture/example.json").its("name").should("eq", "cypress")
    

  // })

  it("Write_Files", function () {
    cy.writeFile("sample.txt","Hello, we are using cypress")
    cy.writeFile("sample.txt", "\nHi, I am Aditya", { flag: "a+" })
    cy.readFile("sample.txt").should("contain","cypress")

  })
})