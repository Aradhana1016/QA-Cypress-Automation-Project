# QA-Cypress-Automation-Project

## Set up of Cypress Testing environment

### Pre-requisite

* Install NodeJS - <https://nodejs.org/en/download/>

### Cypress Installation 

    npm init
    npm install cypress --save-dev


## POM Model
**1. Page Classes**

* *NavigateCategories Page*- In this page under **Pages folder** I have created 1 **visit Method** to launch the url & included **3 Methods for Women,Men & Kids Category** & Performed **Click,type,clear & scrollinto** actions.
* *Productsearch Page*-In this Page I have created **visit Method**, **SearchProduct Methods** to search **BlueTop** & Performed **Click & type** actions
* *AddorRemove Page* -In this Page I have created **visit Method, AddtoCart & RemovefromCart Methods** to add Blue top & Saree after searching from Web Page & adding to the Cart by performing  **Click,type,clear** actions.

**2. Test Classes**

* *NavigateCategories Test Class* -In this **test class under e2e folder** I have imported the "NavigateCategoriesPage" then created a Object for the NavigateCategories Class & called Methods from NavigateCategories Class i.e WomenCategory(), MenCategory() & KidsCategory().
* *ProductSearch Test Class*- In this test class I have Imported "ProductSearchPage" then created a Object for the Productsearch class & called respective Methods from Productsearch class.
* *AddorRemove Test Class*   -In this test class I  have imported "AddorRemovePage" then created a Object for the AddorRemove Class & called respective Methods from AddorRemove Class.

## How to run the tests

**To run a single file**
npx cypress run -s .\cypress\e2e\Navigatecategories.cy.js --headed -b chrome

**To run Multiple files**
npx cypress run --headed --browser chrome --spec "cypress\e2e\Navigatecategories.cy.js,cypress\e2e\Productsearch.cy.js,cypress\e2e\AddorRemove.cy.js"

## How to interpret the results

As per requirement, required recording of below test case execution has been captured. 

***1. Navigate Test Class*** - It should be able to navigate to multiple product categories. 
**e.g.,** Under product category **Women** , Click on **Dress** to view the dresses in the Web Page.Similarly Under product category **Men** , Click on **Jeans** to view the Jeans in the web page & for **Kids** Category click on **Tops & T-shirts**

***2. Product Search Test Class*** - It should be able to search for a partcular type of product and entering the product name in product search box. 
**e.g.,** Navigate to **Products** tab and search for **"Blue Top"** in the search box **Search Product**. **"Blue Top"** should appear in the search result.

***3. Add/Remove items Test Class*** - It should be able to add/remove products in the cart as searched after entering the product name in product search box. The cart should then be verified if add/remove items have been successfully executed or not.
**e.g.,** Navigate to **Products** tab and search for **"Blue Top"** in the search box **Search Product**. **"Blue Top"** appearing in the search result should be added to cart. Repeat the same for **"Saree"** after clearing the previous search product. Upon viewing the cart, both products must be visible. The products are then removed from cart and then verified that no items should be available in cart.

**To remove from Cart**-The items from the Cart should be removed & the **cart is empty** Message should be shown in the web page.
