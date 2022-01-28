const expectchai = require('chai').expect
const assert = require('assert')

describe('This is the End to end testsuite to Ole ', ()=> {

    it('This test case end to end test case sanity', async()=>
    {
        var url = "/loginpagePractise/#"
        await browser.url(url)
        await browser.maximizeWindow()
        var titleofthepage = await browser.getTitle()
        console.log("The title is :" + titleofthepage)
        //Expect is the method is used to compare the values dynamically
        await expect(browser).toHaveTitleContaining('Rahul Shetty Academy')
        //var username = await (await $('#username')).setValue('Manjunatha')
        //or
        const username = $('#username')
        await expect(username).toBeDisplayed() 
        await username.setValue('rahulshettyacademy')
        const password = await $('#password')
        await expect(password).toExist()
        await password.setValue('learning')
        var siginbtn = await $('#signInBtn')
        await siginbtn.click()

        const checkout = await $('*=Checkout')
        await expect(username).toBeDisplayed() 
        checkout.waitForExist()
        expect(await checkout.getText()).toHaveValueContaining("Checkout")
        
        var products = ["Nokia Edge", "Blackberry"]

        var list_products = await $$("div[class='card h-100']")
        console.log("The total products in the page " + list_products.length)

        var product_text = await $("div h4 a")
        var add_btn = await $("//button[contains(text(),'Add')]")
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