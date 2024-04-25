# QA-Cypress-Automation-Project

## Set up of Cypress Testing environment

### Pre-requisite

* Install NodeJS - <https://nodejs.org/en/download/>

### Cypress Installation 

    npm install cypress
    npm install cypress --save-dev


## POM Model
**1. Classes**

* *Navigate Page*
* *Product Category Page*
* *View Cart Page*  

**2. Test Suites**

* *Navigate Test Suite*
* *Product Search Test Suite*
* *Add/Remove items Test Suite*    

## How to run the tests

    npx cypress run --headed --browser chrome --spec "cypress\e2e\Navigatecategories.cy.js,cypress\e2e\Productsearch.cy.js,cypress\e2e\AddorRemove.cy.js"

## How to interpret the results

As per requirement, required recording of below test suite execution has been captured. 

***1. Navigate Test Suite*** - It should be able to navigate to multiple product categories. 
**e.g.,** Under product category **Women** , multiple type of products were visible like **Dress, Tops, Saree**

***2. Product Search Test Suite*** - It should be able to search for a partcular type of product and entering the product name in product search box. 
**e.g.,** Navigate to **Products** tab and search for **"Blue Top"** in the search box **Search Product**. **"Blue Top"** should appear in the search result.

***3. Add/Remove items Test Suite*** - It should be able to add/remove products in the cart as searched after entering the product name in product search box. The cart should then be verified if add/remove items have been successfully executed or not.
**e.g.,** Navigate to **Products** tab and search for **"Blue Top"** in the search box **Search Product**. **"Blue Top"** appearing in the search result should be added to cart. Repeat the same for **"Saree"** after clearing the previous search product. Upon viewing the cart, both products must be visible. The products are then removed from cart and then verified that no items should be available in cart.
