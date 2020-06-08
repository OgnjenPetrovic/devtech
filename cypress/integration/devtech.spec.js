describe('Integration test with visual testing', function() {
    it('Loads the homepage', function() {
      // Load the page or perform any other interactions with the app.
      cy.visit('/');
      // Take a snapshot for visual diffing
      cy.percySnapshot();
    });

    //SOLUTIONS LINKS
    it('TC - 01 Loads the solutions page', function() {
        cy.visit('solutions/');
        cy.percySnapshot();
    });
    it('TC - 02 Loads the solutions page - application development', function() {
        cy.visit('solutions/application-development-modernization/');
        cy.percySnapshot();
    });
    it('TC - 03 Loads the solutions page - system platform migration', function() {
        cy.visit('solutions/system-platform-migration/');
        cy.percySnapshot();
    });
    it('TC - 04 Loads the solutions page - chanel and marcetplace', function() {
        cy.visit('solutions/channel-marketplace-enablement/');
        cy.percySnapshot();
    });
    it('TC - 05 Loads the solutions page - prdictivce analytics', function() {
        cy.visit('solutions/predictive-analytics/');
        cy.percySnapshot();
    });

    // INDUSTRIES
    it('TC - 06 Loads the industries page', function() {
        cy.visit('industries/');
        cy.percySnapshot();
    });

    it('TC - 07 Loads the industries page - software vendors', function() {
        cy.visit('industries/software-vendors/');
        cy.percySnapshot();
    });

    it('TC - 08 Loads the industries page - service providers', function() {
        cy.visit('industries/service-providers/');
        cy.percySnapshot();
    });

    //ALLIANCES

    it('TC - 09 Loads the alliances page', function() {
        cy.visit('alliances/');
        cy.percySnapshot();
    });

    //CAREERS

    it('TC - 10 Loads the careers page', function() {
        cy.visit('search-and-apply/');
        cy.percySnapshot();
    });

    it('TC - 10 Loads the careers page', function() {
        cy.visit('search-and-apply/');
        cy.percySnapshot();
    });
   
    
  });