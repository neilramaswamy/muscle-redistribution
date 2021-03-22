import * as p from 'puppeteer'
import { findLoftElement } from './locator'

const getMuscles = async (): Promise<void> => {
    const browser = await p.launch()
    const page = await browser.newPage()

    await page.goto('https://bfit.brownrec.com/booking')
    const element = await findLoftElement(page)
    await element?.evaluate((e) => e.click())

    await browser.close()
}

;(async () => {
    try {
        await getMuscles()
    } catch (e) {
        console.log('There was an error getting muscles: ', e)
    }
})()
