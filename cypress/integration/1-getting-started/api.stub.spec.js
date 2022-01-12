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
        beforeEach(() =>{
            cy.server();
            cy.route(
                'GET',
                'http://api.icndb.com/jokes/random/3/limitTo=[explicit]',
                '@jokesResponse'
            )
        })


        it('GET same 3 jokes  via the jokes fixture from', () => {
            cy.get('h3')
            .should('have.length', 3); 

            cy.get('img')
            .should('have.length', 3); 

            cy.contains('Joke #615');
            cy.contains('Chuck Norris can build a snowman out of rain.')
            cy.contains('Joke #100');
            cy.contains('Chuck Norris grinds his coffee with his teeth and boils the water with his own rage.')
            cy.contains('Joke #34');
            cy.contains('The opening scene of the movie &quot;Saving Private Ryan&quot; is loosely based on games of dodgeball Chuck Norris played in second grade.')

         });



    });

   
 });

   





    /*

    { "id": 615, 
    "joke": "Chuck Norris can build a snowman out of rain.", 
    "categories": [] 
    
  },

  { "id": 100,
   "joke": "Chuck Norris grinds his coffee with his teeth and boils the water with his own rage.",
   "categories": [] 
  }, 
   
  { "id": 34, 
    "joke": "The opening scene of the movie &quot;Saving Private Ryan&quot; is loosely based on games of dodgeball Chuck Norris played in second grade.", 
    "categories": []

*/







