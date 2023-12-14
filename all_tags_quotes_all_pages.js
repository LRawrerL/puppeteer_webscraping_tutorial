import puppeteer from "puppeteer";

const getQuotes  = async () => {

    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
    });

    const page = await browser.newPage();

    await page.goto("http://quotes.toscrape.com/", {
        waitUntil: "domcontentloaded",
    });

    let page_num = 1;
    let is_there_page = true;
    while(is_there_page) {
        const quotes = await page.evaluate(() => {
            const quote_list = document.querySelectorAll(".quote");
            return Array.from(quote_list).map((quote) => {
                let tag_list_text = [];
                const text = quote.querySelector(".text").innerHTML;
                const author = quote.querySelector(".author").innerHTML;
    
                const tags = quote.querySelector(".tags");
                const tag_list_node = tags.querySelectorAll(".tag");
                Array.from(tag_list_node).map((tag) => {
                    tag_list_text.push(tag.textContent);
                });
                return {text, author, tag_list_text}
            });
        });
        let a_page_of_quotes = quotes;
        a_page_of_quotes.page = page_num
        console.log(a_page_of_quotes);
        page_num++;
        is_there_page = await page.$(".pager > .next > a");
        if (is_there_page) {
            await page.click(".pager > .next > a");
        }
    }
    await browser.close();
}

getQuotes();