class AddorRemoveitem{
    visit()
    {
     cy.visit('https://automationexercise.com/')
    }
    Addtocart()
    {
        //Product search for Blue top
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
        cy.get('#search_product').type("Blue Top");
        cy.get('#submit_search').click()
        //Add to cart
        cy.get('.productinfo > .btn').click()
        //Continue shopping
        cy.get('.modal-footer > .btn').click()
        //Product search for Saree
        cy.get('#search_product').clear()
        cy.get('#search_product').type("Saree");
        cy.get('#submit_search').click()
        cy.get(':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
        //Click on View Cart link
        cy.get('.modal-body > :nth-child(2)').click()
    }
    Removefromcart(){
        cy.get('.cart_quantity_delete').click({ multiple: true })
        cy.scrollTo(0,400)

    }

}

export default AddorRemoveitem