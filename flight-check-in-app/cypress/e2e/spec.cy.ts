describe('Form Test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display an error when booking code is not filled', () => {
    cy.get('#bookingCode').focus();
    cy.get('#familyName').type('Doe');
    cy.get('button[type="submit"]').should('be.disabled');

    cy.get('mat-error').should('contain', 'Booking code is required.');
  });

  it('should display an error when family name is not filled', () => {
    cy.get('#familyName').focus();
    cy.get('#bookingCode').type('ACQ267');

    cy.get('button[type="submit"]').should('be.disabled');

    cy.get('mat-error').should('contain', 'Family name is required.');
  });

  it('should display an error when booking code is too short', () => {
    cy.get('#bookingCode').type('123');
    cy.get('#familyName').type('Doe');
    cy.get('button[type="submit"]').should('be.disabled');

    cy.get('mat-error').should(
      'contain',
      'Make sure the booking code contains at least 5 characters or digits.'
    );
  });

  it('should display an error when booking code is too long', () => {
    cy.get('#bookingCode').type('1234567');
    cy.get('#familyName').type('Doe');
    cy.get('button[type="submit"]').should('be.disabled');

    cy.get('mat-error').should('contain', 'Booking code cannot exceed 6 characters.');
  });

  it('should display an error when booking code contains invalid characters', () => {
    cy.get('#bookingCode').type('ACQ#1');
    cy.get('#familyName').type('Doe');
    cy.get('button[type="submit"]').should('be.disabled');

    cy.get('mat-error').should(
      'contain',
      'Booking code should only contain numbers from 2 to 9.'
    );
  });

  it('should display an error when family name is too short', () => {
    cy.get('#bookingCode').type('ACQ267');
    cy.get('#familyName').type('D');
    cy.get('#familyName').blur({ force: true });
    cy.get('mat-error').should(
      'contain',
      'Make sure the family name contains at least 2 characters.'
    );
    cy.get('button[type="submit"]').should('be.disabled');


  });

  it('should display an error when family name is too long', () => {
    cy.get('#bookingCode').type('ACQ267');
    cy.get('#familyName').type('ThisIsAVeryLongFamilyNameThatExceedsTheCharacterLimit');
    cy.get('#familyName').blur({ force: true });
    cy.get('button[type="submit"]').should('be.disabled');

    cy.get('mat-error').should('contain', 'Family name cannot exceed 30 characters.');
  });

  it('should submit the form successfully when all fields are valid', () => {
    cy.get('#bookingCode').type('ACQ267');
    cy.get('#familyName').type('Doe');
    cy.get('button[type="submit"]').click();
  });
});
