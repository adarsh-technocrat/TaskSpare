import axios from "axios";

export async function scrapeWebsite(url: string) {
    if (!url) return;
    // BrightData Proxy configuration
    const username = String(process.env.NEXT_PUBLIC_BRIGHT_DATA_USERNAME);
    const password = String(process.env.NEXT_PUBLIC_BRIGHT_DATA_PASSWORD);
    const port = 22225;
    const sessionId = (10000000 * Math.random()) | 0;
    const options = {
        auth: {
            username: `${username}-session-${sessionId}`,
            password: password
        },
        host: "brd.superproxy.io",
        port,
        rejectUnauthorized: false
    };
    try {
        const response = await axios.get(url, { proxy: options });
        return response.data;
    } catch (error: any) {
        throw new Error(`Failed to scrape the url ${error.message}`);
    }
}
