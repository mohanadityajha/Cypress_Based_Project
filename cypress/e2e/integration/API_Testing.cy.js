/// <reference types = "cypress" />

describe("API Testing in Cypress", () => {
  
  Cypress.config("baseUrl","https://reqres.in/api")

  it("GET METHOD 1", () => {

    cy.request("GET", "/users?page=2")
      .then((response) => {
        expect(response).to.have.property("status", 200)
        expect(response.status).to.equal(200)
        expect(response.body).not.to.be.null
        expect(response.body).to.have.property("page", 2)
        expect(response.body.data).to.have.length(6)

      })
  })
  it("GET METHOD 2", () => {

    cy.request("GET", "/users?page=2").as("user_list")
    cy.get("@user_list").should((response) => {
      expect(response).to.have.property("status", 200)
      expect(response.status).to.equal(200)
      expect(response.body).not.to.be.null
      expect(response.body).to.have.property("page", 2)
      expect(response.body.data).to.have.length(6)
    })
  })
  it("GET METHOD 3", () => {
    cy.request({
      "Method": "GET",
      "url": "/users?page=2",
      headers: {
        "content-type": "application/json",
      },
      auth: {
        "username": "user1",
        "password": "pass1"
      }
    })
      .then((response) => {
        expect(response).to.have.property("status", 200)
        expect(response.status).to.equal(200)
        expect(response.body).not.to.be.null
        expect(response.body).to.have.property("page", 2)
        expect(response.body.data).to.have.length(6)
    
      })
  })

  it("POST 1", () => {
    cy.request({
      "method": "POST",
      "url": "/users",
      body: {
        
        "name": "morpheus",
        "job": "leader"
      }

    })
      .then((response) => {
        expect(response).to.have.property("status", 201)
        expect(response.status).to.equal(201)
        expect(response.body).not.to.be.null
        expect(response.body).to.have.property("name", "morpheus")
      })
  })
  it("POST 2", () => {
    const requestBody = {
      "name": "morpheus",
      "job": "leader"
    }
    cy.request("POST", "/users", requestBody)
      .then((response) => {
        expect(response).to.have.property("status", 201)
        expect(response.status).to.equal(201)
        expect(response.body).not.to.be.null
        expect(response.body).to.have.property("name", "morpheus")
      })
  })
  it("PUT", () => {
    cy.request({
      "method" :  "PUT",
      "url": "/users/2",
      body: {
        "name": "morpheus",
        "job": "zion resident"
      }
      
    }) 

  })
  it("DELETE", () => {
    cy.request("method", "/users/2").then((response) => {
      expect(response.status).to.be.equal(200)
      expect(response.url).to.be.equal("https://reqres.in/api/method")

    })
      
      })
})
