///<reference types = "Cypress"/>

import Navigatecategories from "../pages/Navigatecategories"

describe('Navigate to different product categories', () => {
  it('Valid Navigation Test', () => {
    const navcateg = new Navigatecategories()
    navcateg.visit()
    navcateg.WomenCategory()
    navcateg.MenCategory()
    navcateg.KidsCategory()   
  })
})