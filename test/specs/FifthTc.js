const expectchai = require('chai').expect
const assert = require('assert')

describe('This is the fifth testsuite to ', ()=> {

    it('This test case verifies the switch to window sanity', async()=>
    {
        var url = "/AutomationPractice/"
        await browser.url(url)
        
        var titleofthepage = await browser.getTitle()
        console.log("The title is :" + titleofthepage)

        //Expect is the method is used to compare the values dynamically
        await expect(browser).toHaveTitleContaining('Practice Page')

        const window = await browser.getWindowHandle()
        console.log("Parent window name is " + window)

        const Child_windows= await $("[onclick*='openWindow']")
        await Child_windows.click()
        await browser.pause(1000)
        const windows = await Child_windows.getWindowHandles();
        console.log(windows.length)
        console.log(windows)

        for await (var i of windows)
        {
            console.log("outside " + i)
            if (!(i === window))
            {
                console.log(i)
                await browser.switchToWindow(i)
                console.log(await browser.getTitle())
                await browser.closeWindow()
            }
        }
        await browser.switchToWindow(window)
        console.log(await browser.getTitle())
        await browser.pause(3000)


    
        

    })

    it('This test case verifies the switch window, and new url launch at run time sanity', async()=>
    {
        var url = "/AutomationPractice/"
        await browser.url(url)
        
        var titleofthepage = await browser.getTitle()
        console.log("The title is :" + titleofthepage)

        //Expect is the method is used to compare the values dynamically
        await expect(browser).toHaveTitleContaining('Practice Page')

        const window = await browser.getWindowHandle()
        console.log("Parent window name is " + window)

        const Child_windows= await $("[onclick*='openWindow']")
        // On click it will open new child window
        await Child_windows.click()
        await browser.pause(1000)
        const windows = await Child_windows.getWindowHandles();
        console.log(windows.length)

        // take the length of the windows
        for await (var i of windows)
        {
            console.log("outside " + i)
            if (!(i === window))
            {
                console.log(i)
                //switch to child window and do opearation
                await browser.switchToWindow(i)
                console.log("Child window is " + await browser.getTitle())
                await browser.closeWindow()
            }
        }
        // switch to parent window
        await browser.switchToWindow(window)
        await browser.pause(1000)

        //This browser will open a new tab(second tab, at the first tab defecut one page has open)
        // next to the existing
        await browser.newWindow('https://rahulshettyacademy.com/#/index')
        const title_new = await browser.getTitle()
        console.log('New window title :'+ title_new)
        await browser.pause(1000)

        //switch to the first tab and do some opeartion
        await browser.switchWindow('https://rahulshettyacademy.com/AutomationPractice/')
        const name_alert = await $('#name')
        name_alert.setValue(title_new)
        await browser.pause(1000)

        //again switch to second tab
        await browser.switchWindow(title_new)
        console.log("Last title: " + await  browser.getTitle())
        expect(browser).toHaveTitle(title_new)
        // it will close the second tab
        browser.closeWindow()
        await browser.pause(1000)

    })
})