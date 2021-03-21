import * as p from 'puppeteer'

const getMuscles = async (): Promise<void> => {
    const browser = await p.launch()
    const page = await browser.newPage()
    // Play with my own site
    await page.goto('https://orbyt.cc')

    await Promise.all([
        page.waitForNavigation(),
        // This won't work because our builds change, but as a proof of concept :P
        page.click('.Button_button__IcqCR.Button_inverted__31SE5.Button_wide__2efnZ'),
    ])
    await page.screenshot({ path: 'signup.png' })

    await browser.close()
}

;(async () => {
    try {
        await getMuscles()
    } catch (e) {
        console.log('There was an error getting muscles: ', e)
    }
})()
