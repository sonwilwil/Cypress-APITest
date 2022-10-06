/// <reference types="Cypress" />
describe('empty spec', () => {
  it('GET', () => {
    cy.request({
        method  : 'GET',
        url     : 'https://jsonplaceholder.typicode.com/posts',

    }).then(function(response) {
        expect(response.status).to.equal(200)
        expect(response.body[0].userId).not.to.be.a('string')
        expect(response.body[0].id).not.to.be.a('string')
        expect(response.body[0].title).to.be.a('string')
        expect(response.body[0].body).to.be.a('string')
    })
  })
  it('POST', () => {
    cy.request({
        method  : 'POST',
        url     : 'https://jsonplaceholder.typicode.com/posts',
        body    : {
          "title" : "recommendation",
          "body"  : "motorcycle",
          "userId": 12
        }

    }).then(function(response) {
        expect(response.status).to.equal(201)
        expect(response.body).to.deep.include({
          "title" : "recommendation",
          "body"  : "motorcycle",
          "userId": 12
        })
    })
  })
})