/// <reference types="Cypress" />

describe('Globals and SEO Test', () => {
  it('Visits homepage', () => {
    cy.visit('/')
  })

  it('looks inside the head content using `cy.document()`', () => {
    // this will yield the entire window.document object
    // if you click on DOCUMENT from the command log,
    // it will output the entire #document to the console
    cy.document()
  })

  it('Charset', () => {
    // cy.get('[data-cy="navbar"]').should('be.visible')
    // cy.get('[data-cy="footer"]').should('be.visible')
    cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
  })

  it('Metatags', () => {
    cy.title().should('not.be.NaN')
    cy.get('head meta[name="description"]').should('not.be.NaN')
    cy.get('head meta[name="googlebot"]').should(
      'have.attr',
      'content',
      'index,follow'
    )
    cy.get('head meta[name="robots"]').should(
      'have.attr',
      'content',
      'index,follow'
    )
    cy.get('head link[rel="canonical"]').should('have.attr', 'href')
  })
})

/* .then((response) => {
    expect(response).property('status').to.equal(201) // new entity created
    expect(response).property('body').to.contain({
      title: 'Cypress Test Runner',
    }) */

export {}
