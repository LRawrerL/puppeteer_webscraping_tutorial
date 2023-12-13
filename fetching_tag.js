import puppeteer from "puppeteer";

const getTag = async () => {
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
    });

    const page = await browser.newPage();

    await page.goto("http://quotes.toscrape.com/", {
        waitUntil: "domcontentloaded",
      });
    
    const tags = await page.evaluate(() => {
        const tags = document.querySelector(".tags");
        // tag_list is a node list
        const tag_list = tags.querySelectorAll(".tag");

        return Array.from(tag_list).map((tag) => {
            // To get inner value of node use textContent
            const tag_text = tag.textContent;
            return { tag_text };
        });
    });
    console.log(tags);
    await browser.close();
}

getTag();