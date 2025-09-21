class CartPage {
    cartlist = 'cart-list'
    cartitem = 'inventory-item'
    itemquantity = 'item-quantity'
    checkoutBtn = 'checkout'

    removeItemByindex(idx) {
        cy.getByDataTestId(this.cartitem).eq(0).find('button').click();
    }

    clickOnCheckout() {
        cy.getByDataTestId(this.checkoutBtn).click()
    }

}

export default new CartPage();