/// <reference types="Cypress" />

describe('Layout Test', () => {
  it('Visits homepage', () => {
    cy.visit('/')
  })

  it('Get navbar and footer', () => {
    cy.get('[data-cy="navbar"]').should('be.visible')
    cy.get('[data-cy="footer"]').should('be.visible')
  })
})

/* .then((response) => {
    expect(response).property('status').to.equal(201) // new entity created
    expect(response).property('body').to.contain({
      title: 'Cypress Test Runner',
    }) */

export {}
