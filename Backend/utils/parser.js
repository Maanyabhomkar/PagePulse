const cheerio = require("cheerio");

function parseHTML(html) {

    const $ = cheerio.load(html);

    const title = $("title").text().trim().substring(0, 120);
    const cleanTitle =
        title.length > 80 ? title.substring(0, 80) + "..." : title;

    const description =
  $('meta[name="description"]').attr("content") ||
  "No description available.";

    const h1Count = $("h1").length;

    const bodyText = $("body").text();

    const wordCount = bodyText.trim().split(/\s+/).length;

    return {
    title: cleanTitle,
    description,
    h1Count,
    wordCount
};

}

module.exports = {
    parseHTML
};