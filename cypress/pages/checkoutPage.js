class CheckoutPage {
    firstNameField = 'firstName'
    lastNameField = 'lastName'
    postalCodeField = 'postalCode'
    continueBtn = 'continue'
    finishBtn = 'finish'

    fillForm(firstName, lastName, postalCode) {
        cy.getByDataTestId(this.firstNameField).type(firstName)
        cy.getByDataTestId(this.lastNameField).type(lastName)
        cy.getByDataTestId(this.postalCodeField).type(postalCode)
    }

    clickContinue() {
        cy.getByDataTestId(this.continueBtn).click()
    }

    clickFinish() {
        cy.getByDataTestId(this.finishBtn).click()
    }
}

export default new CheckoutPage();