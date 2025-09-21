class LoginPage {
    username = '#user-name'
    password = '#password'
    loginBtn = '#login-button'
    error = '[data-test="error"]'

    visit() {
        cy.visit("/")
    }

    enterUserName(name) {
        cy.get(this.username).type(name)
    }

    enterPassword(pwd) {
        cy.get(this.password).type(pwd)
    }

    clickLoginBtn() {
        cy.get(this.loginBtn).click()
    }

    login(u, p) {
        this.visit()
        this.enterUserName(u)
        this.enterPassword(p)
        this.clickLoginBtn()
    }

    getErrorMessage() {
        return cy.get(this.error);
    }

}

export default new LoginPage();