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

    it('TC - 10 Loads the Careers - search and apply', function() {
        cy.visit('search-and-apply/');
        cy.percySnapshot();
    });

    it('TC - 11 Loads the Careers - training and devlepoment', function() {
        cy.visit('search-and-apply/training-and-development/');
        cy.percySnapshot();
    });

    it('TC - 12 Loads the Careers - work environment', function() {
        cy.visit('search-and-apply/work-environment/');
        cy.percySnapshot();
    });

    it('TC - 13 Loads the Careers - devtech lab incubator', function() {
        cy.visit('search-and-apply/devtech-lab-incubator/');
        cy.percySnapshot();
    });

    //ABOUT DEVTECH
   
    it('TC - 14 Loads the About devtech', function() {
        cy.visit('about-devtech/');
        cy.percySnapshot();
    });

    it('TC - 15 Loads the About devtech - leadership', function() {
        cy.visit('about-devtech/leadership/');
        cy.percySnapshot();
    });

    it('TC - 16 Loads the About devtech - newsroom', function() {
        cy.visit('newsroom/');
        cy.percySnapshot();
    });

    //FOOTER LINKS

    it('TC - 17 Privacy policy', function() {
        cy.visit('privacy-policy/');
        cy.percySnapshot();
    });

    it('TC - 18 Contact us', function() {
        cy.visit('contact-us/');
        cy.percySnapshot();
    });
        
  });