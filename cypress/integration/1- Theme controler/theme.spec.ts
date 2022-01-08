/// <reference types="cypress" />



describe('example to-do app', () => {
  beforeEach(() => {

    cy.visit('http://localhost:3000/')
  })

  it('background do tema 1', () => {
    cy.get('[data-cy="theme-button-1"]').click()
    cy.get('body').should('have.css', 'background-color', 'rgb(58, 70, 99)')
  })
  it('background do tema 2', () => {
    cy.get('[data-cy="theme-button-2"]').click()
    cy.get('body').should('have.css', 'background-color', 'rgb(230, 230, 230)')
  })
  it('background do tema 3', () => {
    cy.get('[data-cy="theme-button-3"]').click()
    cy.get('body').should('have.css', 'background-color', 'rgb(23, 6, 42)')
  })

})