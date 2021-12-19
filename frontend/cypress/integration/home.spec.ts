/// <reference types="Cypress" />

describe('Sitemap Test', () => {
  it('Visits homepage', () => {
    cy.visit('/')
  })

  it('Visit sitemap', () => {
    cy.request('/sitemap.xml').then((response) => {
      expect(response).property('status').to.equal(200)
      expect(response).to.have.property('headers')
      const mime = response.headers['content-type']
      expect(mime).contain('text/xml')
    })
  })
})

/* .then((response) => {
    expect(response).property('status').to.equal(201) // new entity created
    expect(response).property('body').to.contain({
      title: 'Cypress Test Runner',
    }) */
