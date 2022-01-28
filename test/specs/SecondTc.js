const expectchai = require('chai').expect

describe('This is the Second testsuite to launch the browser', ()=> {
    xit('This test case verifies the Radio button and alert pop up box ', async()=>
    {
        var url = "https://rahulshettyacademy.com/loginpagePractise/#"
        await browser.url(url)
        
        var titleofthepage = await browser.getTitle()
        console.log("The title is :" + titleofthepage)

        //Expect is the method is used to compare the values dynamically
        await expect(browser).toHaveTitleContaining('Rahul Shetty Academy')

        //Take the list of radio buttons
        var radiobuttons = await $$('.customradio')

        //selects the second index of the raiod button
        const radiobutton = await radiobuttons[1]
        // further went to child level
        const user_radio = await radiobutton.$('.radiotextsty')
        await user_radio.click()
        await browser.pause(3000)

        //alert box 
        const alertext = await $('.modal-body')

        //check the alert has been displayed
        expect(alertext).toBeDisplayed()

        //grab the text
        const alertext_val = await alertext.$('p')
        //assert the alert text is matching 
        await expect(alertext_val).toHaveTextContaining('You will be limited to only fewer functionalities')

        //check the cancel button
        const cancel_alert = await $('#cancelBtn')
        await expect(cancel_alert).toBeDisplayed()

        const okey_alert = await $('#okayBtn')
        await expect(okey_alert).toBeDisplayed()

        //click on okey for the alert
        await okey_alert.click()
        await browser.pause(3000)

        //now select the first index radio button which is user
        const admin_radio = await radiobuttons[0]
        const admin = await admin_radio.$('.radiotextsty').click()
        await browser.pause(3000)

        //verify thet the alert is not displayed.
        expect(alertext).not.toBeDisplayed()

        //dropdown operartion
    })
    xit('This test case verifies the static Dropdown opeartions', async()=>
    {
        var url = "https://rahulshettyacademy.com/loginpagePractise/#"
        await browser.url(url)
        
        var titleofthepage = await browser.getTitle()
        console.log("The title is :" + titleofthepage)

        //Expect is the method is used to compare the values dynamically
        await expect(browser).toHaveTitleContaining('Rahul Shetty Academy')

        //dropdown operartion

        const drop_down = await $('select.form-control')
        //selec t by visibletext
        await drop_down.selectByAttribute('value','teach')
        await browser.pause(2000)
        await drop_down.selectByVisibleText('Consultant')
        await browser.pause(2000)
        await drop_down.selectByIndex(0)
        await browser.pause(2000)
        // first need to import the library  in the top
       /// const expectchai = require('chai').expect
         expectchai(await drop_down.getValue()).to.equal('stud')

    })

    xit('This test case verifies the dynamic Dropdown opeartions', async()=>
    {
        var url = "https://rahulshettyacademy.com/AutomationPractice/"
        await browser.url(url)
        
        var titleofthepage = await browser.getTitle()
        console.log("The title is :" + titleofthepage)

        //Expect is the method is used to compare the values dynamically
        await expect(browser).toHaveTitleContaining('Practice Page')

        const dynamic_textbox = await $('#autocomplete')
        await expect(dynamic_textbox).toBeDisplayed()

        await dynamic_textbox.setValue('Ind')

        let list_cont = await $$('.ui-menu-item div')
        await expect(list_cont).toBeDisplayed()
    
        const promises = await list_cont.map(async fruit => {
            const numFruit = await fruit.getText()
            var rad
            if( numFruit === "India")
            {
                rad = numFruit
            }
            return rad
            })

        const numFruits = await Promise.all(promises);
        console.log(numFruits);

        console.log("ole " + numFruits.length)
        console.log("ole 1 " + numFruits)
       
        //const x = numFruits.filter(item => item.getText())
        /*
        const filterdList = async (list_cont)=> {
            await list_cont.filter(async (item)=>{
                const text1 = await item.getText()
                //this piece of code will not print, Need to know Y??
                console.log("Selected country is " + await text1)
                return text1 === "India"
           }) }
       console.log(filterdList.length)
       
       */
       
       /*
       for( var i=0; i<=list_cont.length; i++)
       {
           var item = await list_cont[i]
           const text_country = await item.getText()
           console.log(text_country)
           if(text_country === "India")
           {
                await item.click()
                break;
           }
       }
       */
        //await filterdList[0].click()

        await browser.pause(3000)


        
    
        // first need to import the library  in the top
       /// const expectchai = require('chai').expect
         //expectchai(await drop_down.getValue()).to.equal('stud')

    })
    it('This test case verifies the dynamic Dropdown opeartions using filter or map', async()=>
    {
        var url = "https://rahulshettyacademy.com/AutomationPractice/"
        await browser.url(url)
        
        var titleofthepage = await browser.getTitle()
        console.log("The title is :" + titleofthepage)

        //Expect is the method is used to compare the values dynamically
        await expect(browser).toHaveTitleContaining('Practice Page')

        const dynamic_textbox = await $('#autocomplete')
        await expect(dynamic_textbox).toBeDisplayed()

        await dynamic_textbox.setValue('Ind')

        let list_cont = await $$('.ui-menu-item div')
        await expect(list_cont).toBeDisplayed()
    
        const promises =  list_cont.filter(async function(item) {
            var text11 = await item.getText()
            var finalval
            if(text11 === "India")
            {
            console.log("Value is " + text11)
            finalval = text11
            console.log("final val is " + finalval)
            }
            return finalval
        })
        console.log("ole " + promises.length)
        console.log("ole 1 " + promises)
       
        await promises[1].click()
       
        await browser.pause(3000)


    

    })
})