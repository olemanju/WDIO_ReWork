const expectchai = require('chai').expect
const assert = require('assert')
const loginpage = require('./PageObjects/LoginPage')
const fs = require('fs')
let credentials = JSON.parse(fs.readFileSync("test/testdata/logindata.json"))

describe('This is the End to end testsuite for Page objects ', ()=> {

     credentials.forEach(({strusername,strpassword})  => {
        
    it('This test case end to end test case using page objects', async()=>
    {
        var url = "https://rahulshettyacademy.com/loginpagePractise/#"
        await browser.url(url)
        await browser.maximizeWindow()
        var titleofthepage = await browser.getTitle()
        console.log("The title is :" + titleofthepage)
        //Expect is the method is used to compare the values dynamically
        await expect(browser).toHaveTitleContaining('Rahul Shetty Academy')
        //var username = await (await $('#username')).setValue('Manjunatha')
        //or
        
        console.log( strusername)
        console.log( strpassword)
        
        //Login methods
         loginpage.Login(strusername,strpassword)
        
       
        const checkout = await $('*=Checkout')
        //await expect(username).toBeDisplayed() 
        checkout.waitForExist()
        expect(await checkout.getText()).toHaveValueContaining("Checkout")
        
        var products = ["Nokia Edge", "Blackberry"]

        var list_products = await $$("div[class='card h-100']")
        console.log("The total products in the page " + list_products.length)

        var product_text = await $("div h4 a")
        var add_btn = await $("//button[contains(text(),'Add')]")

        var blackberry = await $("//*[@class='col-lg-3 col-md-6 mb-3']//h4/a[contains(text(),'Nokia Edge')]//following::button")
        // var blackberry = await $("//*[@class='col-lg-3 col-md-6 mb-3']//h4/a[contains(text(),'"+ item +"')]//following::button")
        
        await blackberry.isDisplayed()
      //  await blackberry.click()

        const product = await $("div h4 a")
        for (const val of list_products) 
        {
            var abc = await val.$('div h4 a').getText()
            console.log("dash " + abc)
            for (const v of products) 
            {
                if(v.includes(abc))
                {
                    console.log("inside loop" + v)
                    await val.$(".btn-info").click()
                }
            }
            
        }
        

        await checkout.click()
        await browser.pause(3000)

        var productprices = await $$("//tr/td[4]/strong")

        var total = 0
           for (const x of productprices) 
           {
               let prodcutprice = await x.getText()
               let price = parseInt(await prodcutprice.split(".")[1].trim())
               console.log("New array details " + price + " the type is " + typeof(price))
               total = total+ price
           }
           console.log("The total count is " + total)

        const totalsum = await $("td h3 strong")
        const totalsum1 = await totalsum.getText()
        const totalIntValue = parseInt(await totalsum1.split(".")[1].trim())
        console.log("Total sum is " + totalIntValue)

        expectchai(total).to.equal(totalIntValue)

        const checkoutbtn = await $('.btn-success')
        await checkoutbtn.isDisplayed()
        await checkoutbtn.click()

        const drop_county = await $('#country')
        await drop_county.setValue("Ind")

        const loader = await $('.lds-ellipsis')
        await loader.isDisplayed()
        await loader.waitForExist(
            {
                reverse:true
            })
        const India = await $("=India")
        await India.isDisplayed()
        await  India.click()

        const chekbox = await $(".checkbox-primary")
        await chekbox.isDisplayed()
        await chekbox.click()

        const purchase = await $(".btn-success")
        await purchase.isDisplayed()
        await purchase.click()
        expect(purchase).toHaveTextContaining("Success! Thank you! Your order will be delivered in next few weeks :-).")
        
        await browser.pause(2000)
        await browser.closeWindow()
       
    })
})
})