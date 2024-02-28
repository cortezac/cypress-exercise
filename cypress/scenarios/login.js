import sauceDemoObjects from "../objects/sauceDemoObjects"

class LoginScenarios {
    login(credentials){
        sauceDemoObjects.loginPage.inputUsernameField().type(credentials.login.username)
        cy.log("Input username")
        sauceDemoObjects.loginPage.inputPasswordField().type(credentials.login.password)
        cy.log("Input user password")
        sauceDemoObjects.loginPage.loginBtn().click() 
        cy.log("Clicked login button")
        sauceDemoObjects.homePage.hamburgerMenuBtn().should('be.visible')
        cy.log("Clicked hamburger button")
    }

}

export default new LoginScenarios()