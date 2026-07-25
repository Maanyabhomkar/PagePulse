const { auditWebsite } = require("../services/auditService");

const auditWebsiteController = async (req, res) => {

    try {

        const { url } = req.body;

        const result = await auditWebsite(url);

        res.json(result);

    } catch (error) {

    console.error(error);

    if (error.message === "Invalid URL") {
        return res.status(400).json({
            error: "Invalid URL"
        });
    }

    if (error.code === "ECONNABORTED") {
        return res.status(408).json({
            error: "Request timed out"
        });
    }

    if (error.message === "The URL does not point to an HTML webpage.") {
        return res.status(400).json({
            error: error.message
        });
    }

    if (error.response && error.response.status === 403) {
    return res.status(403).json({
        error: "This website blocks automated requests (403 Forbidden)."
    });
}
    return res.status(500).json({
        error: error.message
    });

}

};

module.exports = {
    auditWebsite: auditWebsiteController
};