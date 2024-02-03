'use server'

import { scrapeWebsite } from "../scraper";


export async function scrapeAndConstructData(url: string) {
    if (!url) return;
    try {
        const scrapeData = await scrapeWebsite(url);
        const sanitizedData = sanitizeAndConvertToList(scrapeData);
        return sanitizedData
    } catch (error: any) {
        throw new Error(`Failed to scrape the url ${error.message}`);
    }
}

function sanitizeAndConvertToList(html: string): string[] {
    try {
        console.log("HTML", html)
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        const elements = doc.body.querySelectorAll('*');
        const feedingData: string[] = Array.from(elements).map(element => element.textContent || '');
        console.log(feedingData)
        return feedingData;
    } catch (error: any) {
        throw new Error(`Failed to scrape the url ${error.message}`)
    }
}

