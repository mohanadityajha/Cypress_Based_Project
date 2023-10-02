/// <reference types="cypress" />

describe("Test Automation", () => {
  beforeEach("UI Control", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
  })
  it("Locate Text Element", () => {
    cy.visit("https://www.google.com/")
    cy.get('#APjFqb').type("Automation step by step")
    cy.get('.FPdoLc > center > .gNO89b').click({ force: true })
    cy.get('[lang="en"] > .tF2Cxc > .yuRUbf > a > .LC20lb').should("have.text", "Automation Step by Step: NEVER STOP LEARNING")
  })
  it("Login Page", () => {
    cy.visit("https://rahulshettyacademy.com/loginpagePractise/")
    // cy.get("#username").type("rahulshettyacademy")
    // cy.get("#password").type("learning")
    // cy.get('body').click()

    cy.origin("https://rahulshettyacademy.com/loginpagePractise/").then(origin => {
      // 'origin' variable contains the origin URL of the webpage
      console.log(origin);
    });
  })
  it(" Navigation Page", () => {
    cy.visit("https://automationstepbystep.com/")
    cy.visit("https://www.google.com/")
    cy.wait(4000)
    cy.go("back")
    cy.go("forward")
  })
  it("Radio Button", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.get(".radioButton").check(["radio1", "radio2"])
    cy.get("input[type='radio']").check().should("be.checked").and("have.value", "radio1")
    cy.get("input[type='radio']").check({ multiple: true }).should("not.be.checked").and("have.value", "radio1")
  })
  it("Page Title and Active URL", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.title().should("eq", "Practice Page")
    cy.url().should("include", "AutomationPractice")
  })
  it("Check-Box", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.get("#checkBoxOption1").check(["option1", "option2"])
    // cy.get("input[type='checkbox']").check().should("be.checked").and("have.value","option1")
    // cy.get("input[type='checkbox']").uncheck().should("not.be.checked").and("have.value", "option1")
    //cy.get("#checkBoxOption1").uncheck(["option1", "option2"])
  })
  it("Static Drop - Down", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.get("select").select("option3").should("have.value", "option3")
  })
  it("Dynamic Drop-Down", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.get("#autocomplete").type("India").click()
    cy.get(".ui-menu-item").each((el, index, list) => {
      if (el.text() === "india") {
        el.check()
        cy.get("#autocomplete").should("have.value", "India")
      }
    })
  })
  it("Hidden Element", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.get("#displayed-text").should("be.visible").click()
    cy.get("#hide-textbox").click().should("have.value", "Hide")
    cy.get("#displayed-text").should("not.be.visible").click({ force: true })
    cy.get("#show-textbox").should("be.visible").click()
  })
  it("Child Window", () => {
    cy.get("#opentab").invoke("removeAttr", "target").click()
  })
  it("Alert Window", () => {
    cy.on("Alert Window", (str) => {
      expect(str).to.equal("Hello , share this practice page and share your knowledge")
    })
    cy.on("Confirm Window", (str) => {
      expect(str).to.equal("Hello , Are you sure you want to confirm?")
})
  })
  it("Mouse Hover", () => {
    cy.get(".mouse-hover-content").invoke("show").click()
    cy.contains("Top").click({ force: true })
    cy.url().should("include","top")
  })
  it("ScreenShot", () => {
    cy.screenshot("HomePage")
    cy.get(".logoClass").screenshot("logo")
  })
  it("Refresh and Reload", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.wait(4000)
    cy.contains("Home").click()
    cy.reload()
    cy.contains("Home").should("be.visible").click()
  })
  
  
  })








