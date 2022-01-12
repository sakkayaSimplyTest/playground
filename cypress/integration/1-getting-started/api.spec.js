/// <reference types="cypress" />


describe('Chuck Norris API', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200');

    cy.loader()
    .should('exit');
  });

  afterEach(() =>{
    cy.loader()
      .should('not.exist');
  });

  it('GET 3 random jokes from the api', () => {
    cy.request('https://api.icndb.com/jokes/random/3/limitTo=[explicit]')
    .should((response) =>{
      expect(response.status).to.eq(200);
    }
    );


  cy.get('h3')
  .should('have.length', 3);
  
  cy.get('img')
  .should('have.length', 3);
  
  }); 
});