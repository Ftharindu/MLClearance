class clearanceWizard{
    ProducrtionName(Name){
        cy.get('body > div > div > div > div > div > div:nth-child(1) > div > div:nth-child(1) > div > div > div > input').type(Name)
        return this
    }
    Genre(){
        cy.xpath('/html/body/div[6]/div[3]/div/div[2]/div/div[1]/div/div[2]/div/div/div').click()
        cy.get('#menu-genre > div > ul > li:nth-child(3)').click()
    }

    DeadlineDate(){
        cy.get('body > div > div > div > div > div > div:nth-child(1) > div > div > div > div > input:nth-child(1)').click()
        cy.get('body > div:nth-child(11) > div > div > div > div > div > div:nth-child(5) > div:nth-child(3) > button > span> p').click()
    }

    Clicknext(){
        cy.get('body > div > div > div > div > div > div:nth-child(2) > div > button').click()
    }

    Clicksave(){
        cy.xpath("/html/body/div[6]/div[3]/div[1]/div/div[4]/button[1]").click()
    }

    ClickClose(){
        cy.xpath("/html/body/div[5]/div[3]/div[1]/div/div[4]/button[2]").click()
    }



}

export default clearanceWizard