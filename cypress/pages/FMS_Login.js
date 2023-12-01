
class FMS_Login{
    loginName="//input[@id='loginName']";
    password="//input[@id='loginPass']";
    loginBtn="//input[@name='loginButton']";

    setUserName(username){
        cy.xpath(this.loginName).type(username)
    }

    setPassword(pass){
        cy.xpath(this.password).type(pass)
    }

    clickSubmit(){
        cy.xpath(this.loginBtn).click()
    }

}

export default FMS_Login;