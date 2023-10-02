/// <reference types = "cypress" />

describe("Automation Testing", () => {
  //beforeEach("Cypress with JavaScript", () => {
    //cy.visit("https://rahulshettyacademy.com/AutomationPractice")
//})
  it("Navigation Page", () => {
    const site = cy.visit("https://www.google.com/")
    const url = cy.visit("https://rahulshettyacademy.com/AutomationPractice")
    cy.wait(4000)
    cy.go("back")
    cy.go("forward")
  })
  it.only("Page Title", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice")
    const title= cy.title().should("include","Practice Page")
    //cy.title().should("eq", "Practice Page")
    console.log("title")
  })
  it("Current URL", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice")
    const active_url= cy.url().should("include","AutomationPractice")
  })
  it("Search and Type or Display Selected Element", () => {
    cy.visit("https://www.google.com/")
    cy.get(".gLFyf").type("automation step by step")
    cy.get('body').click()
    cy.get(".h3[LC20lb MBeuO DKV0Md]").should("have.value","Automation Step by Step: NEVER STOP LEARNING")
    //div[lang = 'en'] div[class= 'tF2Cxc'] h3[class= 'LC20lb MBeuO DKV0Md']
  })
  it("Radio Button", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice")
    cy.get(".radioButton").check(["radio1", "radio2"])
    const radioButton = cy.get("input[type='radio']").click({ multiple: true }).should("be.checked", "radio1", "radio2")
    cy.get("input[type='radio']").click({ multiple: true }).should("not.be.checked", "radio1")
  })
  it("Check-Box", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice")
    cy.get("#checkBoxOption1").click(["option1","option2"])
    const check_box= cy.get('input[type="checkbox"]').check().should("be.checked").and("have.value", "option1")
    cy.get('input[type="checkbox"]').uncheck("not.be.checked").and("have.value", "option1")
  })
  it("Static DropDown", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice")
    const static_Dropdown = cy.get("select").select("option1").should("have.value", "option1")
  })
  it("Dynamic Drop-Down", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice")
    cy.get("#autocomplete").type("India").click()
    cy.get(".ui-menu-item").each((el, index, list) => {
      if(el.text()==="india")
      el.check()
    })
  })
  it("Hidden Elements", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice")
    cy.get("#displayed-text").click().should("be.visible")
    cy.get("#hide-textbox").click().should("have.value","Hide")
    cy.get("#displayed-text").click({ force: true }).should("not.be.visible")
    cy.get("#show-textbox").click().should("be.visible")
  })
  it(" Handle Alert Pop-Up", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice")
    cy.on("Alert",(str) => {
      expect(str).to.equal("Hello , share this practice page and share your knowledge")
    })
    cy.on("Confirm Alert", (str) => {
      expect(str).to.equal("Hello , Are you sure you want to confirm?")
      })
    })
  it("Child Window", () => {
    cy.get("#opentab").invoke("removeAttr", "target").click()
  })
  it("MouseHover", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice")
    cy.get('#mousehover').invoke("show").click()
    cy.contains("Top").click({ force: true })
    cy.url().should("include","Top")
  })
  it("ScreenShot", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice")
    cy.screenshot("HomePage")
    cy.get(".logoClass").screenshot("logo")

  })
  
  
})