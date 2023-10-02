/// <reference types="cypress" />

describe("Automation Cypress", () => {
  beforeEach("Automation Test", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
  })
  it("Dynamic", () => { 
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.get("#autocomplete").type("India").click()
    cy.get(".ui-menu-item").each((el, index, list) => {
      if (el.text() === "India") {
        el.select()
      }
      //cy.get("#autocomplete").should("have.value","india")
    })
  })
  it("Static DropDown", () => {
    cy.get("select").select("option1").should("have.value","option1")
  })
  it("Radio Button", () => {
    cy.get(".radioButton").check(["radio1","radio2"])
    cy.get("input[type='radio']").check().should("be.checked").and("have.value", "radio1","radio2")
    cy.get("input[type='radio']").check({ multiple: true}).should("not.be.checked").and("have.value", "radio1")
  })
  it("CheckBox Button", () => {
    cy.get("#checkBoxOption1").check().should("be.checked", "option1").and("have.value", "option1")
    cy.get("#checkBoxOption1").uncheck().should("not.be.checked", "option1").and("have.value", "option1")
    cy.get("input[type='checkbox']").check(["option1","option2"])
  })
  it("Hidden Elements", () => {
    cy.get("#displayed-text").click().should("be.visible")
    cy.get("#hide-textbox").click().should("have.value","Hide")
    cy.get("#displayed-text").click({ force: true }).should("not.be.visible")
    cy.get("#show-textbox").check().should("be.visible")

  })
  it("Static DropDown", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.get("select").select("option1").should("have.value","option1")

  })
  it("Dynamic DropDown", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.get("#autocomplete").type("India").click()
    cy.get(".ui-menu-item").each((el, index, list) => {
      if (el.text()==="india")
       el.check()
    })
  })
  it("Mouse Hover", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.get(".mouse-hover-content").invoke("show").click()
    cy.contains("Top").click({ force: true })
    cy.title().invoke("include","top")
  })
  
  
    

  })

  


  
