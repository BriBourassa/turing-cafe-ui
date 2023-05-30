describe('Main spec', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/reservations', {
      fixture: "fakeData.json"
    })
    cy.visit('http://localhost:3000/')
  })

  it('should display the title upon loading the main page', () => {
    cy.get('h1').should('exist').should('be.visible') 
      .contains('Turing Cafe Reservations')
  })

  it('should display the already made reservations on the main page', () => {
    cy.get('.single-card').should('have.length', 2)
      .get('p').contains('Gretta')
      .get('p').contains('12/29')
      .get('p').contains('7:00')
      .get('p').contains('Number of Guests: 12')
  })

  it('should be able to add a new reservation by typing in name, date, time, and number of guests into the form and see that reservation with the others', () => {
    cy.get('input[type="text"]').eq(0).type('Charlie')
    cy.get('input[type="text"]').eq(1).type('2/25')
    cy.get('input[type="text"]').eq(2).type('2:00')
    cy.get('input[type="text"]').eq(3).type('2')
    cy.get('button').eq(0).click()
    cy.get('.single-card').should('have.length', 3)
  })
});