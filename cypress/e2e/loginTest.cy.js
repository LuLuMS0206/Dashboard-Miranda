

describe('Login tests', () => {
  it('successfully loads with correct credentials', () => {
    cy.visit('http://localhost:5173/')
    cy.url().should('include', '/login')
    cy.get('#username').type('dashboardMiranda@admin.com')
    cy.get('#password').type('miranda00')
    cy.get('button').click()
    cy.url().should('equal', 'http://localhost:5173/')
  })

  it('shows an error message with incorrect credentials', () => {
    cy.visit('http://localhost:5173/')
    cy.url().should('include', '/login')
    cy.get('#username').type('incorrect@user.com')
    cy.get('#password').type('incorrectpassword')
    cy.get('button').click()
    cy.url().should('include', '/login')

  })
})
