/// <reference types ="cypress"/>

describe("Automation Testing", () => {
  beforeEach("Amazon", () => {
    cy.visit("https://www.amazon.in")

  })
  it.only("Cypress Automation", () => {
  
    cy.visit("https://www.amazon.in")
    cy.get("input[placeholder='Search Amazon.in']").type("Iphone 14").click()
    cy.get("input[type='submit']").click()
    cy.get('[data-index="4"] > :nth-child(1) > .s-widget-container > [data-component-type="s-impression-logger"] > .s-featured-result-item > .s-card-container > :nth-child(1) > :nth-child(1) > .sg-col-8-of-16 > :nth-child(1) > .a-spacing-small > .puis-padding-right-small > .a-size-mini > .a-link-normal > .a-size-medium')

})
})