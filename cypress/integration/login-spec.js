describe('login test suite', ()=>{
    it('does not work with wrong credentials', ()=>{
        cy.visit('http://localhost:8080')
        cy.pause()
        cy.get('[data-cy=sign-in').click()
        cy.get('[data-cy=username').type('info')
        cy.get('data-cy=password').type('visitor')
        cy.get('[data-cy=login-form').submit()
});

it('happy path test', ()=>{
    cy.visit('http://localhost:8080')
    cy.get('[data-cy=sign-in').click()
    cy.get('[data-cy=username').type('info')
    cy.get('[data-cy=password').type('visitor')
    cy.get('[data-cy=login-form').submit()

});

})