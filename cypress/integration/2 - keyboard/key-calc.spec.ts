/// <reference types="cypress" />



describe('Keyboard', () => {
  beforeEach(() => {

    cy.visit('http://localhost:3000/')
  })

    it(`tecla  +`, () => {
        cy.get(`[data-cy="key-1"]`).click()
        cy.get('[data-cy="key-0"]').click()
        cy.get('[data-cy="key-+"]').click()
        cy.get(`[data-cy="key-1"]`).click()
        cy.get('[data-cy="key-0"]').click()
        cy.get('[data-cy="key-="]').click()
        cy.get('[data-cy="display-input"]').should('have.value', `20`)
    })

    it(`tecla -`, () => {
        cy.get(`[data-cy="key-2"]`).click()
        cy.get('[data-cy="key-0"]').click()
        cy.get('[data-cy="key--"]').click()
        cy.get(`[data-cy="key-1"]`).click()
        cy.get('[data-cy="key-0"]').click()
        cy.get('[data-cy="key-="]').click()
        cy.get('[data-cy="display-input"]').should('have.value', `10`)
    })

    it(`tecla x`, () => {
        cy.get(`[data-cy="key-1"]`).click()
        cy.get('[data-cy="key-0"]').click()
        cy.get('[data-cy="key-x"]').click()
        cy.get(`[data-cy="key-5"]`).click()
        cy.get('[data-cy="key-="]').click()
        cy.get('[data-cy="display-input"]').should('have.value', `50`)
    })

    it(`tecla /`, () => {
        cy.get(`[data-cy="key-8"]`).click()
        cy.get('[data-cy="key-4"]').click()
        cy.get('[data-cy="key-/"]').click()
        cy.get(`[data-cy="key-4"]`).click()
        cy.get('[data-cy="key-="]').click()
        cy.get('[data-cy="display-input"]').should('have.value', `21`)
    })

    it(`tecla .`, () => {
        cy.get(`[data-cy="key-5"]`).click()
        cy.get('[data-cy="key-."]').click()
        cy.get('[data-cy="key-4"]').click()
        cy.get(`[data-cy="key-+"]`).click()
        cy.get('[data-cy="key-2"]').click()
        cy.get('[data-cy="key-."]').click()
        cy.get('[data-cy="key-3"]').click()
        cy.get('[data-cy="key-="]').click()
        cy.get('[data-cy="display-input"]').should('have.value', `7.7`)
    })

    it(`teclas multiplas`, () => {
        cy.get(`[data-cy="key-5"]`).click()
        cy.get('[data-cy="key-x"]').click()
        cy.get('[data-cy="key-1"]').click()
        cy.get('[data-cy="key-0"]').click()
        cy.get(`[data-cy="key-+"]`).click()
        cy.get('[data-cy="key-5"]').click()
        cy.get('[data-cy="key--"]').click()
        cy.get('[data-cy="key-9"]').click()
        cy.get('[data-cy="key-="]').click()
        cy.get('[data-cy="display-input"]').should('have.value', `46`)
    })

    it(`teclas multiplicação e mais`, () => {
        cy.get(`[data-cy="key-5"]`).click()
        cy.get('[data-cy="key-+"]').click()
        cy.get('[data-cy="key-1"]').click()
        cy.get('[data-cy="key-0"]').click()
        cy.get(`[data-cy="key-x"]`).click()
        cy.get('[data-cy="key-5"]').click()
        cy.get('[data-cy="key-/"]').click()
        cy.get('[data-cy="key-2"]').click()
        cy.get('[data-cy="key-="]').click()
        cy.get('[data-cy="display-input"]').should('have.value', `30`)
    })


})