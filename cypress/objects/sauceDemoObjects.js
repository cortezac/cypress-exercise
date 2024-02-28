class SauceDemoObjects{

    loginPage = {
        inputUsernameField: () => cy.xpath("//input[@id='user-name']"),
        inputPasswordField: () => cy.xpath("//input[@id='password']"),
        loginBtn: () => cy.xpath("//input[@id='login-button']"),
        errorMessage: () => cy.xpath("//div[@class='error-message-container error']//h3[@data-test='error']")
    }

    homePage = {
        hamburgerMenuBtn: () => cy.xpath("//button[@id='react-burger-menu-btn']"),
        logoutBtn: () => cy.xpath("//a[@id='logout_sidebar_link']"),
        // specific item add to cart button
        addToCartBackPack: () => cy.xpath("//button[@id='add-to-cart-sauce-labs-backpack']"),
        removeToCartBackPack: () => cy.xpath("//button[@id='remove-sauce-labs-backpack']"),
        // generic add to cart button
        // //div[@class='inventory_item'][contains(.,'Sauce Labs Backpack')]//button[contains(.,'Add to cart')]
        newBtn: (item)=> cy.xpath(`//div[@class='inventory_item'][contains(.,'${item}')]//button[contains(.,'Add to cart')]`),
        addToCartBtn: () => cy.xpath("//button[@class='btn btn_primary btn_small btn_inventory ']"),
        removeToCartBtn: () => cy.xpath("//button[@class='btn btn_secondary btn_small cart_button']"),
        shoppingCartBtn: () => cy.xpath("//a[@class='shopping_cart_link']"),
        
    }

    checkoutPage = {
        checkoutBtn: () => cy.xpath("//button[@id='checkout']"),
        firstNameField: () => cy.xpath("//input[@id='first-name']"),
        lastNameField: () => cy.xpath("//input[@id='last-name']"),
        postalCodeField: () => cy.xpath("//input[@id='postal-code']"),
        continueBtn: () => cy.xpath("//input[@id='continue']"),
        cancelBtn: () => cy.xpath("//button[@id='cancel']"),
        finishBtn: () => cy.xpath("//button[@id='finish']"),
        checkoutOverviewTitle: () => cy.xpath("//span[contains(text(),'Checkout: Overview')]")
    }

}

export default new SauceDemoObjects()