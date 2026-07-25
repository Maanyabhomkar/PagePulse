const axios = require("axios");
const { isValidUrl } = require("../utils/validator");
const { parseHTML } = require("../utils/parser");

async function auditWebsite(url) {
    if (!isValidUrl(url)) {
    throw new Error("Invalid URL");
}
    const startTime = Date.now();
    
    const response = await axios.get(url, {
  headers: {
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36"
  },
  timeout: 10000
});

    const contentType = response.headers["content-type"];
    if (!contentType || !contentType.includes("text/html")) {
    throw new Error("The URL does not point to an HTML webpage.");
}

    const endTime = Date.now();

    const responseTime = `${endTime - startTime} ms`;

    const status = response.status;

    const parsedData = parseHTML(response.data);

    return {
        status,
        responseTime,
        ...parsedData
    };

}

module.exports = {
    auditWebsite
};