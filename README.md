# Basic tutorial on Web Scraping
All data was scraped from a website that allows scraping [quotesToScrape](http://quotes.toscrape.com/)
- [Tutorial followed](https://www.freecodecamp.org/news/web-scraping-in-javascript-with-puppeteer/)
- [Puppeteer Documentation](https://pptr.dev/)

## Requirements
- Node.js
- Puppeteer
- npm

### Learning Objectives
- What is Web Scraping?
- How to use Puppeteer to scrape data?
- Utilize Puppeteer for future projects

### Learning Summary
- How to scrape an individual page for data
- How to navigate to another page
- How to scrape multiple pages for data
- How to scrape nested data
- How to scrape similar class of data within elements

#### What each file does:
- `index.js` - Mainly used to experiment and test out Puppeteer, scraping the first quote and moving to the next page
- `fetching_tag.js` - Used scrape the tags from the first quote 
- `tag_quote.js` - Used to scrape tags, text, and author from first quote
- `all_quotes_one_page.js` - Used to scrape all quotes from one page
- `all_tags_quotes_all_pages.js` - Used to scrape all quotes and tags from all pages

#### Things to note when working back:
- To scape data of author better to get the links of the author then scrape the data from the author page
- Puppeteer works on context. If previous context is still active although page has changed, it will still scrape the previous page
