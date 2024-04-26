class productsearch{
    visit()
    {
     cy.visit('https://automationexercise.com/')
    }
    Searchproduct(){
    cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
    cy.get('#search_product').type("Blue Top");
    cy.get('#submit_search').click()
    }
}
export default productsearch