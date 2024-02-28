import sauceDemoObjects from "../objects/sauceDemoObjects"
import loginScenarios from "../scenarios/login"
import testData from "../fixtures/testData.json"
import { faker } from '@faker-js/faker';

describe('Allen Exercise', () => {

  beforeEach( ()=>{
    cy.visit('/')
  })

  it('TC1 - Check username is required error', () => {
    sauceDemoObjects.loginPage.loginBtn().click()
    sauceDemoObjects.loginPage.errorMessage().should('have.text', 'Epic sadface: Username is required')
  })

  it('TC2 - Check password is required error ', () => {
    sauceDemoObjects.loginPage.inputUsernameField().type(testData.login.username)
    sauceDemoObjects.loginPage.loginBtn().click()
    sauceDemoObjects.loginPage.errorMessage().should('have.text', 'Epic sadface: Password is required')
  })

  it('TC3 - Error in both username and password', () => {
    sauceDemoObjects.loginPage.inputUsernameField().type(testData.login.wrongUsername)
    sauceDemoObjects.loginPage.inputPasswordField().type(testData.login.wrongPassword)
    sauceDemoObjects.loginPage.loginBtn().click() 
    sauceDemoObjects.loginPage.errorMessage().should('have.text', 'Epic sadface: Username and password do not match any user in this service')
    
  })

  it('TC3.1 - Error in both username and password using Faker', () => {
    sauceDemoObjects.loginPage.inputUsernameField().type(faker.internet.userName())
    sauceDemoObjects.loginPage.inputPasswordField().type(faker.internet.password())
    sauceDemoObjects.loginPage.loginBtn().click() 
    sauceDemoObjects.loginPage.errorMessage().should('have.text', 'Epic sadface: Username and password do not match any user in this service')
    
  })

  it('TC4 - Successful login', () => {
    loginScenarios.login(testData)
  })

  it('TC5 - Successful logout', () => {
    loginScenarios.login(testData)
    sauceDemoObjects.homePage.hamburgerMenuBtn().click()
    sauceDemoObjects.homePage.logoutBtn().click()
    sauceDemoObjects.loginPage.loginBtn().should('be.visible')
  })

  it('TC6 - Add items to cart', () => {
    loginScenarios.login(testData)
    sauceDemoObjects.homePage.addToCartBackPack().click()
    sauceDemoObjects.homePage.newBtn('onesie').click()
    sauceDemoObjects.homePage.shoppingCartBtn().click()
    sauceDemoObjects.homePage.removeToCartBackPack().should('be.visible')
  })

  it('TC7 - Remove items to cart', () => {
    loginScenarios.login(testData)
    sauceDemoObjects.homePage.addToCartBackPack().click()
    sauceDemoObjects.homePage.addToCartBtn().eq(2).click()
    sauceDemoObjects.homePage.shoppingCartBtn().click()
    sauceDemoObjects.homePage.removeToCartBackPack().should('be.visible').click()
    sauceDemoObjects.homePage.removeToCartBtn().eq(0).should('be.visible').click()
  })

  it('TC8 - Checkout', () => {
    loginScenarios.login(testData)
    sauceDemoObjects.homePage.addToCartBackPack().click()
    sauceDemoObjects.homePage.shoppingCartBtn().click()
    sauceDemoObjects.homePage.removeToCartBackPack().should('be.visible')
    sauceDemoObjects.checkoutPage.checkoutBtn().click()
    sauceDemoObjects.checkoutPage.firstNameField().type(testData.checkout.firstName)
    sauceDemoObjects.checkoutPage.lastNameField().type(testData.checkout.lastName)
    sauceDemoObjects.checkoutPage.postalCodeField().type(testData.checkout.postalCode)
    sauceDemoObjects.checkoutPage.continueBtn().click()
    sauceDemoObjects.checkoutPage.checkoutOverviewTitle().should('be.visible')
    sauceDemoObjects.checkoutPage.finishBtn().should('be.visible').click()
  })
})