const expectchai = require('chai').expect

describe('This is the third testsuite to launch the browser', ()=> {

    it('This test case verifies the Check box  and screenshot opeartions', async()=>
    {
        var url = "https://rahulshettyacademy.com/AutomationPractice/"
        await browser.url(url)
        
        var titleofthepage = await browser.getTitle()
        console.log("The title is :" + titleofthepage)

        //Expect is the method is used to compare the values dynamically
        await expect(browser).toHaveTitleContaining('Practice Page')


        const list_Check_boxes = await $$("input[type='checkbox']")
        await expect(list_Check_boxes).toBeDisplayed()
        console.log("The total length is " + await list_Check_boxes.length)

        var first_check = await list_Check_boxes[2].click()
        console.log(await list_Check_boxes[1].isSelected())
        console.log(await list_Check_boxes[2].isSelected())

        await browser.saveScreenshot("screenshot.png")

        await browser.pause(3000)

    })

    xit('This test case verifies the Scroll into view and Mouse over opeartions', async()=>
    {
        var url = "https://rahulshettyacademy.com/AutomationPractice/"
        await browser.url(url)
        
        var titleofthepage = await browser.getTitle()
        console.log("The title is :" + titleofthepage)

        //Expect is the method is used to compare the values dynamically
        await expect(browser).toHaveTitleContaining('Practice Page')

        const mouseover_head = await $("//legend[contains(text(),'Mouse Hover Example')]")
        await mouseover_head.isDisplayed()
        
        //scroll intoview
        const mouse_over_btn = await $('#mousehover')
        await mouse_over_btn.isDisplayed()
        await mouse_over_btn.scrollIntoView()

        await browser.pause(3000)
        //mouse over on the element
        await mouse_over_btn.moveTo()
        await browser.pause(3000)
        //Click on element from the list
        const top_link = await $("=Top")
        await top_link.isDisplayed()
        await top_link.click()
        //verify the url have the value
        await expect(browser).toHaveUrlContaining('top')
        await browser.pause(3000)

    })
})