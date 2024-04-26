///<reference types = "Cypress"/>

import Productsearch from "../pages/productsearch"

describe('Product Search', () => {
 it('Valid Product search Test', () => {

    const prdsearch= new Productsearch()
    prdsearch.visit()
    prdsearch.Searchproduct()
    

})
})