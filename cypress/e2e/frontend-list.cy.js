describe('teste listagem usuarios', () => {

  it("cadastrar usuario", () => {
    cy.visit("http://localhost:3000")
    cy.get('input[name="nome"]').type('victor')
    cy.get('input[name="email"]').type('test@hotmail.com')
    cy.get('input[name="fone"]').type('123')
    cy.get('input[type="date"]').type('2023-06-11');
    cy.get('[data-cy="salvar"]').click()
  })
    //editar dados dos usuarios
  it("editar usuario", () => {
    cy.visit("http://localhost:3000")
    cy.get('[data-cy="editar"]').first().click() 
    const nome = cy.get('input[name="nome"]')
    nome.clear()
    nome.type('hugo')
    const email = cy.get('input[name="email"]')
    email.clear()
    email.type('vic@hotmail.com')
    const fone = cy.get('input[name="fone"]')
    fone.clear()
    fone.type('3')
    const data_nascimento = cy.get('input[name="data_nascimento"]')
    data_nascimento.clear()
    data_nascimento.type('2023-07-12')
    cy.get('[data-cy="salvar"]').click()
  })

  it("deletar usuario", () => {
    cy.visit("http://localhost:3000")
    //deletar dados
    cy.get('[data-cy="deletar"]').first().click({ multiple: true });
    cy.end();
  })
})