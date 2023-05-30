describe('Main spec', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/reservations', {
      fixture: "fakeData.json"
    })
    cy.visit('http://localhost:3000/')
  })


  it('passes', () => {
    cy.visit('http://localhost:3000/')
  })
})