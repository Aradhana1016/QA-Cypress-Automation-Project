///<reference types = "Cypress"/>
import AddorRemove from "../pages/AddorRemove"

describe('Add or remove items from cart', () => {
 it('Valid Add or Remove items Test', () => {
    const cartitems= new AddorRemove()
    cartitems.visit()
    cartitems.Addtocart()
    cartitems.Removefromcart()
})
})