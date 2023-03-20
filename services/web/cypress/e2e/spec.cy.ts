
describe('e2e - test weapon selection and view result', () => {
  beforeEach(()=>{
    cy.visit("http://localhost:4200/")
  })

  it('p1 selects paper', () => {
    cy.get("#Paper").contains("Paper").click();
    cy.get(".selectedIcon").eq(1).then((val)=>{
      if(val.text()==="Scissor"){
        cy.contains("You Lose")
        cy.get('.starIcon',{ timeout: 10000 }).eq(5).should('have.attr', 'data-test-Icon', 'comFilled')
      } else if (val.text()==="Rock"){
        cy.contains("You Win")
        cy.get('.starIcon',{ timeout: 10000 }).eq(0).should('have.attr', 'data-test-Icon', 'p1Filled')
      } else if (val.text()==="Paper"){
        cy.contains("Its a Draw")
      }
    })
  })
})