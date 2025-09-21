import inventoryPage from "../../pages/inventoryPage";
import loginPage from "../../pages/loginPage";

before(() => {
    cy.fixture('users').as('userData')
})

describe('Different user login', () => {

    it('Should successfully login with standard user', function () {
        loginPage.login(this.userData.standard_user.username, this.userData.standard_user.password)
        cy.url().should('include', 'inventory')
    });

    it('Should get error for locked out user', function() {
        loginPage.login(this.userData.locked_out_user.username, this.userData.locked_out_user.password);
        cy.url().should('not.contain', 'inventory');
        loginPage.getErrorMessage().should('contain', 'Sorry, this user has been locked out.');
    })
    
    it('Should login with delay for performance_glitch_user', function() {
        var start = Date.now();
        loginPage.login(this.userData.performance_glitch_user.username, this.userData.performance_glitch_user.password);
        
        cy.url().should('contain', 'inventory').then(() => {
            var duration = Date.now() - start;
            cy.log(`Page load took ${duration} ms`);
            expect(duration).to.be.greaterThan(5000);
        });
    })

    it('Should successfully login with problem_user', function () {
        loginPage.login(this.userData.problem_user.username, this.userData.problem_user.password)
        cy.url().should('include', 'inventory')
    });

    it('Should successfully login with error_user', function () {
        loginPage.login(this.userData.error_user.username, this.userData.error_user.password)
        cy.url().should('include', 'inventory')
    });

    it('Should successfully login with visual user', function () {
        loginPage.login(this.userData.visual_user.username, this.userData.visual_user.password)
        cy.url().should('include', 'inventory')
    });
})