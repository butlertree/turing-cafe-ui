
describe('network requests', () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:3001/api/v1/reservations", {
      statusCode: 200,
      fixture: 'data.json'
    }).as("getReservations");

    cy.visit('localhost:3000');
    cy.wait('@getReservations');
  });

  it('should GET all the reservations on page load', () => {
    cy.get('.reservationCards').children().should('have.length', 9);  
    cy.get('.reservationCards').first().should('contain', 'Christie');
    cy.get('.reservationCards').first().should('contain', '12/29');
    cy.get('.reservationCards').first().should('contain', '7:00');
    cy.get('.reservationCards').first().should('contain', '12');
    cy.get('.reservationCards').last().should('contain', 'Brittany');
    cy.get('.reservationCards').last().should('contain', '9/9');
    cy.get('.reservationCards').last().should('contain', '7:30');
    cy.get('.reservationCards').last().should('contain', '3')
  });

  it('should display all main page information', () => {
    cy.get('h1').should('contain', 'Turing Cafe Reservations');
    cy.get('h3').should('contain', 'Make A Reservation');

    // Check if the input fields are displayed
    cy.get('input[name="name"]').should('exist').and('have.attr', 'placeholder', 'Name');
    cy.get('input[name="date"]').should('exist').and('have.attr', 'placeholder', 'mm/dd');
    cy.get('input[name="time"]').should('exist').and('have.attr', 'placeholder', '00:00');
    cy.get('input[name="number"]').should('exist').and('have.attr', 'placeholder', 'Guests');

    // Check if the submit button is displayed
    cy.get('form').find('button').should('contain', 'Make Reservation');
  });

  it('should show error messaging to a user', () => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/reservations', {
      forceNetworkError: true
    }).as('getReservationsError');

    cy.visit('localhost:3000'); 
    cy.wait('@getReservationsError');
    cy.get('h2').should('contain.text', 'Something happened with getting the reservations.');
  });

});