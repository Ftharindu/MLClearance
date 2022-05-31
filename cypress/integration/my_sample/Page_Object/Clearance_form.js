

class clearanceformcreate{
    ClickClearanceButton(){
        cy.get('#clearance').click({force:true})
    }

    AddformButton(){
        cy.get('#subHeader > div > div > form > div > div > div > button:nth-child(1)').click()
    }
    
    PRODUCTIONNAMEInput(ProductionName){
        cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(ProductionName);
        return this
    }

    GenreDropdown(){
        cy.get('#mui-component-select-genre').click()
        cy.get('#menu-genre > div.MuiPaper-root.MuiMenu-paper.MuiPopover-paper.MuiPaper-elevation8.MuiPaper-rounded > ul > li:nth-child(2)').click()
        
    }

    DeadlineDate(){
        cy.get('#root > div > div > div > div > div > div:nth-child(1) > div > div:nth-child(2) > div > div > div.jss48 > div.MuiPaper-root.jss1281.MuiPaper-elevation1.MuiPaper-rounded > div > div > div > div.MuiGrid-root.jss1282.MuiGrid-container > div:nth-child(1) > div:nth-child(3) > div > div > div > input').click()
        //cy.contains('19').click();
        cy.get('body > div:nth-child(8) > div> div > div> div > div > div:nth-child(3) > div:nth-child(6) > button > span.MuiIconButton-label').click()

    }

    CreateForm(){
        cy.get('#root > div > div > div > div > div > div:nth-child(1) > div > div:nth-child(2) > div > div > div > div > div > div > div > div > button:nth-child(2)').click()
        
    }

    FirstFormName(){
        cy.xpath('//*[@id="de579cf3-9e82-4f5a-8e54-411bda16edb9"]/td[3]/a/strong/h3')
    }

    ClearanceFormInput_synopsis(Synopsis){
        cy.get('#root > div > div > div > div > div > div:nth-child(1) > div > div:nth-child(2) > div > div > div > div > div > div > div > div > div:nth-child(2) > div:nth-child(1) > div > div > div > input').type(Synopsis);
        return this
    }

    ClearanceFormInput_Notes(notes){
        cy.get('#root > div > div > div > div > div > div:nth-child(1) > div > div:nth-child(2) > div > div > div > div> div > div > div > div > div:nth-child(2) > div:nth-child(2) > div > div > div > input').type(notes);
        return this
    }
   
    
}
export default clearanceformcreate
