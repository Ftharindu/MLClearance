
import LoginPages from "./Page_Object/Login_page"
import clearanceformcreate from "./Page_Object/Clearance_form"
import trackseach from "./Page_Object/Track_seach"
import clearanceWizard from "./Page_Object/Clearance_Wizard"
var path = require('../my_sample/Page_Object/path.json') 

describe('Clearance',function(){
    const CC = new clearanceformcreate();
    const Trksearch = new trackseach();
    const Cwizard = new clearanceWizard();
    it('Login',function(){
        const login = new LoginPages();
        login.navigate();
        login.useremail('rukshan@adelanka.com');
        login.userPassword('Abc!@#123');
        login.submit();
        cy.wait(2000);
        
    })
    
    it('Access clearance forms page',function(){
        
        CC.ClickClearanceButton();
        cy.url().should('equal','https://soundmouse.net/admintools/ml-test/mllicensing/forms')
        
    })

    it('Verify Create Clearance Form',function (){
        // CC.AddformButton();
        // CC.PRODUCTIONNAMEInput('Automation 1');
        // CC.GenreDropdown();
        // CC.DeadlineDate();
        // CC.CreateForm();
        // cy.wait(2000);
        
        cy.xpath(path.formname).invoke('text').then((value)=>{
            const value1 = value;
            cy.log(value1)
            expect(value1).to.eq('test manual ')
        })

    })

    it('Check mandatory fields in Create clearance form',function(){
        CC.AddformButton();
        CC.CreateForm();
        cy.get(path.CF_Name).invoke('text').then((Name_mandatory)=>{
           const value2 = Name_mandatory;
           expect(value2).to.eq(' Name should not be empty.') 
        })
        cy.get(path.CF_Genre).invoke('text').then((Genre_mandatory)=>{
            const value3 = Genre_mandatory;
            expect(value3).to.eq('Genre should not be empty.') 
        })
        cy.get(path.CF_Deadline).invoke('text').then((Deadline_mandatory)=>{
            const value4 = Deadline_mandatory;
            expect(value4).to.eq('Deadline should not be empty.') 
         })
    })
    /*it('Verify Create Clearance Form Validation messages',function(){
        CC.PRODUCTIONNAMEInput('long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter lo');
        CC.GenreDropdown();
        CC.DeadlineDate();
        CC.ClearanceFormInput_synopsis('long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long c');
        CC.ClearanceFormInput_Notes('long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long c')
        CC.CreateForm();
        cy.get('#root > div > div > div > div > div > div:nth-child(1) > div > div:nth-child(2) > div > div > div > div > div > div > div > div > div:nth-child(1) > div:nth-child(1) > div > div > p').invoke('text').then((Name_CharacterLimit)=>{
            const value5 = Name_CharacterLimit;
            expect(value5).to.eq('Name should be less than 256 characters.')
        })
        cy.get('#root > div > div > div > div > div > div:nth-child(1) > div > div:nth-child(2) > div > div > div > div > div > div > div > div > div:nth-child(2) > div:nth-child(1) > div > div > p').invoke('text').then((Synopsis_characterlimit)=>{
            const value6 = Synopsis_characterlimit;
            expect(value6).to.eq('Synopsis should be less than 500 characters.')
        })
        cy.get('#root > div > div > div > div > div > div:nth-child(1) > div > div:nth-child(2) > div > div > div > div> div > div > div > div > div:nth-child(2) > div:nth-child(2) > div > div > p').invoke('text').then((Notes_characterLimit)=>{
            const value7 = Notes_characterLimit;
            expect(value7).to.eq('Clearance form notes should be less than 500 characters.')
        })
    })*/

    it('Verify Run Clearance from tracks',function(){
        Trksearch.Clicksearch();
        Trksearch.clicksearchbutton();
        //Trksearch.Checktrack();
        Trksearch.ClickTrack3dots();
        Trksearch.clickrunclearance();
        Cwizard.ProducrtionName('Automation 2');
        Cwizard.Genre();
        Cwizard.DeadlineDate();
        Cwizard.Clicknext();
        Cwizard.Clicksave();
        Cwizard.ClickClose();



    })

   

})


