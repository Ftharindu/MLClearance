class trackseach{
    Clicksearch(){
        cy.get('#musicsearch > div> p').click()
    }
    clicksearchbutton(){
        cy.get('#subHeader > div > div > form > div > div> div > div > div > div > button:nth-child(3)').click()
    }
    Checktrack(){
        cy.get('#fa596d83-a3ad-423a-b80e-556c6a8ce66d > td:nth-child(1) > span > span > input').check()
    }
    ClickTrack3dots(){
        cy.get('#d95e30bf-bb9e-4160-87b6-f48e8e570fc2 > td:nth-child(9) > button > span > svg > path').click()
    }
    clickrunclearance(){
        cy.get('body > div> div> ul > li:nth-child(9)').click()
    }
}

export default trackseach