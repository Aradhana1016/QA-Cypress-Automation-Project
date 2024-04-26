class Navigate
{
visit()
{
 cy.visit('https://automationexercise.com/')
}

WomenCategory(){
    //scroll to women category
    cy.scrollTo(0,400)
    //Click on Women Category
    cy.get(':nth-child(1) > .panel-heading > .panel-title > a > .badge > .fa').click()
    //Click on Dress under Women Category
    cy.get('#Women > .panel-body > ul > :nth-child(1) > a').click()

}
MenCategory(){
    //Click on Men Category
    cy.get(':nth-child(2) > .panel-heading > .panel-title > a > .badge').click()
    //Click on Jeans under Men Category
    cy.get('#Men > .panel-body > ul > :nth-child(2) > a').click()

}
KidsCategory(){
    cy.get(':nth-child(3) > .panel-heading > .panel-title > a > .badge').click()
    //Click on "Tops & Shirts" under Kids Category
    cy.get('#Kids > .panel-body > ul > :nth-child(2)').click()

}
}
export default Navigate