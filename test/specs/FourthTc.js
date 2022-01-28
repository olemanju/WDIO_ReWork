const expectchai = require('chai').expect
const assert = require('assert')

describe('This is the Fourth testsuite to ', ()=> {

    it('This test case verifies the double click and alert', async()=>
    {
        var url = "https://only-testing-blog.blogspot.com/2014/09"
        await browser.url(url)
        
        var titleofthepage = await browser.getTitle()
        console.log("The title is :" + titleofthepage)

        //Expect is the method is used to compare the values dynamically
        await expect(browser).toHaveTitleContaining('Only Testing: September 2014')

        const doubleclick = await $('button')
        await doubleclick.isDisplayed()

        //double click on the element
        await doubleclick.doubleClick()

        //Verify the alert is opened
        console.log(await browser.isAlertOpen())
        await expectchai(await browser.isAlertOpen()).to.be.true

        //grab the text

        const alerttext = await browser.getAlertText()
        console.log("The text " + alerttext)
        expectchai(await browser.getAlertText()).to.equal("You double clicked me.. Thank You..")

        //accept the alert
        await browser.acceptAlert()

        await browser.pause(3000)

    
        

    })

    it('This test case verifies the web table sorting', async()=>
    {
        var url = "https://rahulshettyacademy.com/seleniumPractise/#/offers"
        await browser.url(url)
        
        var titleofthepage = await browser.getTitle()
        console.log("The title is :" + titleofthepage)

        //Expect is the method is used to compare the values dynamically
        await expect(browser).toHaveTitleContaining('GreenKart - veg and fruits kart')

        //verify the veg column heading and click on it
       const veg_column_head = await $('tr th:nth-child(1)')
       await veg_column_head.isDisplayed()
       //used assert here 
       assert.equal(veg_column_head.isDisplayed(), true)
       await browser.pause(2000)
       await veg_column_head.click()
       await browser.pause(1000)
       //get the list of all the vegiies list and grab the text

       const list_vegiies_locators = await $$('tr td:nth-child(1)')
       console.log("Total array " +  list_vegiies_locators.length)

      // const list_veggies_text = list_vegiies_locators.map(veg=>veg.getText())
        //https://www.freecodecamp.org/news/javascript-async-and-await-in-loops-30ecc5fb3939/
      const listveggies_text = await list_vegiies_locators.map( async(item)=> {
          return await item.getText()
        })


      const x =  await Promise.all(
            list_vegiies_locators.map(async (i) => {
              return  i.getText()
            })
          ); 
          console.log("disch Manju " +  x)

        let listveggies_text1 = async (list_vegiies_locators)=> {
            await list_vegiies_locators.map(async (ole)=>{
                let text1 = await ole.getText()
                console.log("hello Manju " + text1)
                return text1 
           })      
       }
       console.log("Manju " + await listveggies_text1)

        const numFruits =  list_vegiies_locators.map( async(fruit)=>{
            const numFruit = await fruit.getText()
            return numFruit;
            });

      console.log("hello " + await numFruits)

        //await browser.pause(3000)

    
        

    })
})