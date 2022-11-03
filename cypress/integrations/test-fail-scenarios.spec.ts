describe('Test if generic content is showing', () => {
  it('Should redirect to 404 page', () => {
    cy.visit('/doesnotexist');
    cy.url().should('include', '/notfound');
    cy.get('section > div > button').click();
    cy.wait(200);
    cy.url().should('not.be', '/notfound');
    cy.get('#podcastlist_grid').children().should('have.length', 20);
  });

  it('Should simulate wrong podcast item', () => {
    cy.visit('/podcast/999999999');
    cy.wait(1000);
    // validate podcst error
    cy.get('[data-id="header_block"]', { timeout: 5000 })
      .should('be.visible')
      .find('h1')
      .contains('404 error. Hmm... Something went wrong');
  });

  it('Should simulate network failure', () => {
    cy.intercept('GET', '**/search?query=cypressio', { forceNetworkError: true }).as(
      'getNetworkFailure',
    );

    cy.visit('/podcast/');
    cy.wait(1000);
    // validate podcst error
    cy.get('[data-id="header_block"]', { timeout: 5000 })
      .should('be.visible')
      .find('h1')
      .contains('This page does not exist');
    cy.get('section > div > button').click();
    cy.wait(200);
    cy.url().should('not.be', '/notfound');
    cy.get('#podcastlist_grid').children().should('have.length', 20);
  });

  ////////////////////////////////
  // Functions
  ////////////////////////////////
});
