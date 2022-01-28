const expectchai = require('chai').expect
const assert = require('assert')

describe('This is the fifth testsuite to ', ()=> {

    it('This test case verifies the switch to window', async()=>
    {
        var url = "https://rahulshettyacademy.com/AutomationPractice/"
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

    it('This test case verifies the switch to Frame', async()=>
    {
        var url = "https://rahulshettyacademy.com/AutomationPractice/"
        await browser.url(url)
        
        var titleofthepage = await browser.getTitle()
        console.log("The title is :" + titleofthepage)

        //Expect is the method is used to compare the values dynamically
        await expect(browser).toHaveTitleContaining('Practice Page')

        const mouseover = await $('#mousehover')
        await mouseover.scrollIntoView()
        const parent_anchor = await $$('a')
        console.log("Total links " + parent_anchor.length)

        //Frame id
        const frameid =await $('#courses-iframe')
        
        await browser.switchToFrame(frameid)
        const child_anchor = await $$('a')
        console.log("Total links in child " + child_anchor.length)
        
    
        await browser.switchToParentFrame()
        console.log("Total links in the parent " + parent_anchor.length)
        await browser.switchToFrame(frameid)
        console.log("Total links in child 2 " + child_anchor.length)

        await browser.switchToFrame(null)
        console.log("Total links in the last parent " + parent_anchor.length)

        await browser.pause(3000)
        

    })
})