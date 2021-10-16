describe('BrowserBotActions',()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })


        // it('The page loads, atleast', ()=>{
        //     cy.visit('http://capstone-movie.herokuapp.com',{timeout:10000});
        //     cy.contains('Sign in').click();
        //     cy.contains('button','Next').should('exist');
        // })

        it('Login page should work', ()=> {
            cy.viewport(1280, 720);
            cy.visit('http://capstone-movie.herokuapp.com');
            cy.contains('Sign in with Google').click();

            // cy.wait(1000);
            cy.log('I am here before create an account');
            cy.request('users/1.json');
            // const button = cy.get('#createaccount-button');
            // const email = cy.get('#email0-input');
            // button.click();
            

        })

        
})