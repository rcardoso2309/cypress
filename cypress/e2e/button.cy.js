describe('Button Component', () => {
  it('changes text when clicked', () => {
    cy.visit('http://localhost:3000');
    
    cy.contains('Clique aqui').click();
    
    cy.contains('Você clicou!').should('exist');
  });
  it('test2, changes text when clicked', () => {
    cy.visit('http://localhost:3000');
    
    cy.get('#btn').contains('Click here').click()
    cy.get('#btn').contains('Clicado!')
    
    // cy.contains('Você clicou!').should('exist');
  });
});

describe('Input Component', () => {
  it('changes text when type', () => {
    cy.visit('http://localhost:3000');

    cy.get('input').type('textoTest');
    cy.should('have.value', 'textoTest');
    
  });
});


