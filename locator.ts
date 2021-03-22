import * as p from 'puppeteer'

// Finds an element that, when clicked, takes you to the reservation page for the
// Loft, if you're signed in.
export const findLoftElement = async (page: p.Page): Promise<p.ElementHandle<Element> | null> => {
    const links = await page.$$('.container-link-text-item')
    for (const link of links) {
        const rawText: string | undefined = await (await link.getProperty('innerText'))?.jsonValue()
        if (!rawText) {
            continue
        }
        const text = rawText.trim()
        if (text === 'Nelson Fitness Loft') {
            return link
        }
    }

    return null
}
