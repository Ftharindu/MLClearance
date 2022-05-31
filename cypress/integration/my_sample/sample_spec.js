describe('my first test',function(){
    it('click element', function (){
        cy.visit('https://soundmouse.net/admintools/ml-test')
        

        cy.get('input[id="email"]').type('rukshan@adelanka.com')
        cy.get('input[id="password"]').type('Abc!@#123')
        //.should('have.value','rukshan@adelanka.com')
        cy.contains('Sign In').click()
        //cy.url()
        //.should('include','/contact')
        //expect(true).to.equal(false)
        //Arrange - setup initial app state
        //-visit a web page
        //-query for an element
        //act - take action
        //-interect with that element
        //Assert - make an assertion
        //-make an assertion about page content


    })
})