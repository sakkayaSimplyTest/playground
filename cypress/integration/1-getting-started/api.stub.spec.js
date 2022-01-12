///<reference types= "cypress" />


describe('Stubbing API Response', () =>{
    beforeEach(()=>{
        cy.fixture('jokes').as('jokesResponse');
        cy.visit('http://localhost:4200');
        cy.loader()
        .should('exist');
    });

    afterEach(()=>{
        cy.loader()
        .should('not.exist');
    });


    describe('Stubbed Results', () => {
        
    });








})