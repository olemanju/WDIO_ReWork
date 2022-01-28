describe('This is the first testsuite to launch the browser', ()=> {
    it('This test case verifies the functionality of Invalid Login sanity ', async()=>
    {
        var url = "/loginpagePractise/#"
        await browser.url(url)
        
        var titleofthepage = await browser.getTitle()
        console.log("The title is :" + titleofthepage)

        //Expect is the method is used to compare the values dynamically
        await expect(browser).toHaveTitleContaining('Rahul Shetty Academy')

        //var username = await (await $('#username')).setValue('Manjunatha')
        //or
        const username = $('#username')
        await expect(username).toBeDisplayed() 
        await username.setValue('Manjunatha')

        var password = await $('#password')
        await expect(password).toExist()
        await password.setValue('good')

        var siginbtn = await $('#signInBtn')
        
        await siginbtn.click()

        var signinval = await siginbtn.getAttribute('value')
        console.log("The value is " + signinval)

        var Error = await $("div.alert-danger")
        var ErrorMessage = await Error.getText()
        console.log("The Error Message is " + ErrorMessage)
        /*
        await siginbtn.waitUntil( async function(){
          return (await  this.getAttribute('value') === 'Sign In')
        },
         {
            timeout: 6000,
            timeoutMsg: 'Error message didnot appear'
        })
*/
        await siginbtn.waitUntil( async()=>{
            return (await siginbtn.getAttribute('value') === 'Sign In')
          },
           {
              timeout: 6000,
              timeoutMsg: 'Error message didnot appear'
          })

        var Error1 = await $('div.alert-danger')
        var ErrorMessage1 = await Error1.getText()
        console.log("The Error Message is " + ErrorMessage1)

        // Grab the text and verify it
        await expect($('p')).toHaveTextContaining('(username is rahulshettyacademy and Password is learning)')
        await browser.pause(3000)

        
    })

    it('This test case verifies the functionality of valid Login sanity ', async()=>
    {

        var url = "/loginpagePractise/#"
        await browser.url(url)
        
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

        

        const checkoutlink = await $('*=Checkout')
        await checkoutlink.waitForExist()
        await expect(checkoutlink).toBeDisplayed()

        expect(browser).toHaveTitleContaining('ProtoCommerce')
        expect(browser).toHaveUrlContaining('shop')
        await browser.pause(3000)

        
    })
})