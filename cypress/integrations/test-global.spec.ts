describe('Test if generic content is showing', () => {
  /**
   * No before method use so the tests are executed in sequence
   * if one fail the rest should too, that whay ew know where stasted
   * and we don't need to redo the cy.get('#podcastlist_grid').children()
   * for every test due to the scope of the project
   */

  // global variables
  let podcastId;

  it('Should receive data from API USERLIST', () => {
    cy.visit('/');
    // has loading indicator
    cy.get('#spinner').should('be.visible');

    // check if logo is loaded
    cy.get('#logo')
      .should('be.visible')
      .and(($img: JQuery<HTMLImageElement>) => {
        // "naturalHeight" are set when the image loads
        expect($img[0].naturalHeight).to.be.greaterThan(0);
      });

    // validate podcst list data
    cy.get('#podcastlist_grid > article', { timeout: 10000 }).should('be.visible');
    cy.get('#podcastlist_grid').children().should('have.length', 20);
  });

  it('Should validate items data', () => {
    cy.get('#podcastlist_grid')
      .children()
      .each(($podcast) => {
        // check data
        podcastData($podcast);
      });
  });

  it('Should redirect to single podcast page', () => {
    // get first podcast
    cy.get('#podcastlist_grid')
      .children()
      .first()
      .then(($item) => {
        // store podcast data
        const podcast = {
          thumbnail: $item.find('picture > img').attr('src'),
          title: $item.find('div > [data-id="card_title"]').text(),
          description: $item
            .find('div > [data-id="card__description"]')
            .text()
            .substring(0, 20)
            .split(' ')
            .join(' '),
        };
        console.log(podcast);

        // get item id
        podcastId = $item.attr('data-id').split('-')[1];
        // wrap and click on item
        cy.wrap($item).click();
        cy.url().should('include', `/podcast/${podcastId}`);

        cy.get('div > [data-id="podcast_header__title"]').should('have.text', podcast.title);
        cy.get('div > [data-id="podcast_description"]').should('contain', podcast.description);
        cy.get('[data-id="podcast_header__thumbnail"] > img').should(
          'have.attr',
          'src',
          podcast.thumbnail,
        );
        cy.get('[data-id="podcast_followers"]').should('not.have.text', '');
        cy.get('[data-id="podcast_rating"]').should('not.have.text', '');
      });
  });

  it('Should redirect to 404 page', () => {
    cy.visit('/error');
    cy.url().should('include', '/notfound');
    cy.get('section > div > button').click();
    cy.wait(200);
    cy.url().should('not.be', '/notfound');
    cy.get('#podcastlist_grid').children().should('have.length', 20);
  });

  ////////////////////////////////
  // Functions
  ////////////////////////////////

  /**
   * Validate information of podcast item
   * @param podcast
   */
  const podcastData = (podcast) => {
    // check if img src is not empty
    cy.wrap(podcast).find('picture > img').should('have.attr', 'src').and('not.be.empty');
    // check if podcast data is not empty
    cy.wrap(podcast).find('div > [data-id="card_title"]').should('not.have.text', '');
    cy.wrap(podcast).find('div > [data-id="card_upload_date"]').should('not.have.text', '');
    cy.wrap(podcast).find('div > [data-id="card__description"]').should('not.have.text', '');
  };
});
