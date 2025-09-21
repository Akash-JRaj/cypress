class Inventorypage {
    inventoryList = '[data-test="inventory-item"]'
    inventoryItem = "inventory-item"
    shoppingCartBadge = "shopping-cart-badge"
    cart = 'shopping-cart-link'

    addByIndex(idx) {
        cy.getByDataTestId(this.inventoryItem).eq(idx).find('button').click()
    }

    getCartCount() {
        return cy.getByDataTestId(this.shoppingCartBadge)
    }

    clickOnCart() {
        cy.getByDataTestId(this.cart).click()
    }
}

export default new Inventorypage();