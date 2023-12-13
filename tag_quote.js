import puppeteer from "puppeteer";

const getQuotes = async () => {
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
    });

    const page = await browser.newPage();

    await page.goto("http://quotes.toscrape.com/", {
        waitUntil: "domcontentloaded",
    });

    const quotes = await page.evaluate(() => {

        tag_string_list = [];

        const quote = document.querySelector(".quote");
        const text = quote.querySelector(".text").innerText;
        const author = quote.querySelector(".author").innerText;
 
        const tags = quote.querySelector(".tags");
        const tag_node_list = tags.querySelectorAll(".tag");
        const tag_text = Array.from(tag_node_list).map((tag) => {
            tag_string_list.push(tag.textContent);
        });

        return { text, author, tag_string_list };
    });

    console.log(quotes);
    await browser.close();
}

getQuotes();