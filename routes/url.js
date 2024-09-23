const express = require("express");
const {
  handleGenerateNewShortURL,
  handleGetAnalytics,
} = require("../controllers/url");

const router = express.Router();

router.post("/", handleGenerateNewShortURL); // Handle POST request

router.get("/analytics/:shortId", handleGetAnalytics);


module.exports = router;
