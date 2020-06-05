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
  });