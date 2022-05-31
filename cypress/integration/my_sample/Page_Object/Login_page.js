class LoginPages{
    navigate(){
        cy.visit('https://soundmouse.net/admintools/ml-test')
    }
    useremail(uname){
        cy.get('#email').type(uname);
        return this
    }
    userPassword(password){
        cy.get('#password').type(password);
        return this
    }

    submit(){
        cy.get('.MuiButton-label').click()
    }

    ClickClearanceButton(){
        cy.get('input[@id="clearance"]/div[1]').click()

    }
}
export default LoginPages