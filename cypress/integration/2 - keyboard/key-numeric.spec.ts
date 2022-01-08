/// <reference types="cypress" />



describe('Keyboard', () => {
  beforeEach(() => {

    cy.visit('http://localhost:3000/')
  })

    for (let i = 1; i <= 9; i++) { 
        it(`tecla ${i}`, () => {
            cy.get(`[data-cy="key-${i}"]`).click()
            cy.get('[data-cy="display-input"]').should('have.value', `${i}`)
        })
    }
    
    it(`tecla delele`, () => {
        cy.get(`[data-cy="key-1"]`).dblclick()
        cy.get('[data-cy="key-del"]').click()
            cy.get('[data-cy="display-input"]').should('have.value', `1`)
    })
    it(`tecla reset`, () => {
        cy.get(`[data-cy="key-1"]`).dblclick().dblclick().dblclick()
        cy.get('[data-cy="key-reset"]').click()
            cy.get('[data-cy="display-input"]').should('be.empty')
    })
    it(`tecla igual`, () => {
        cy.get(`[data-cy="key-1"]`).click()
        cy.get('[data-cy="key-0"]').click()
        cy.get('[data-cy="key-x"]').click()
        cy.get(`[data-cy="key-1"]`).click()
        cy.get('[data-cy="key-0"]').click()
        cy.get('[data-cy="key-="]').click()
        cy.get('[data-cy="display-input"]').should('have.value', `100`)
    })

    it(`tecla igual +`, () => {
        cy.get(`[data-cy="key-1"]`).click()
        cy.get('[data-cy="key-0"]').click()
        cy.get('[data-cy="key-x"]').click()
        cy.get(`[data-cy="key-1"]`).click()
        cy.get('[data-cy="key-0"]').click()
        cy.get('[data-cy="key-="]').click()
        cy.get('[data-cy="display-input"]').should('have.value', `100`)
    })

})