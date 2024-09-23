const express = require("express");
const URL = require("../models/url"); // Ensure this line is present
const router = express.Router();

router.get("/", async (req, res) => {
    const allUrls = await URL.find({}); // This should work now
    return res.render("home", {
        urls: allUrls,
    });
});

module.exports = router;
