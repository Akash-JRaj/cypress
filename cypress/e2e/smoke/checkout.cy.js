import loginPage from "../../pages/loginPage";
import inventoryPage from "../../pages/inventoryPage";
import cartPage from "../../pages/cartPage";
import checkoutPage from "../../pages/checkoutPage";

before(() => {
    cy.fixture('users').as('userData')
})

describe('Add item to cart flow', () => {
    it('Add the first item to cart', function() {
        loginPage.visit();
        loginPage.login(this.userData.standard_user.username, this.userData.standard_user.password);
        inventoryPage.addByIndex(0);
        inventoryPage.getCartCount().should('contain.text', 1);
    })

    it('Add item and checkout flow', function() {
        loginPage.visit();
        loginPage.login(this.userData.standard_user.username, this.userData.standard_user.password);
        inventoryPage.addByIndex(0);
        inventoryPage.getCartCount().should('contain.text', 1);
        inventoryPage.clickOnCart();

        cartPage.clickOnCheckout();
        
        checkoutPage.fillForm('Akash', 'Jayaraj', '560103')
        checkoutPage.clickContinue();
        checkoutPage.clickFinish();

        cy.contains('Thank you')
    })

    it('Add and remove item from cart', function() {
        loginPage.visit();
        loginPage.login(this.userData.standard_user.username, this.userData.standard_user.password);
        inventoryPage.addByIndex(0);
        inventoryPage.getCartCount().should('contain.text', 1);
        inventoryPage.clickOnCart();

        cartPage.removeItemByindex(0);
        cy.getByDataTestId(cartPage.cartitem).should('have.length', 0);
    })

})