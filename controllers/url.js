const shortid = require("shortid");
const URL = require("../models/url");

async function handleGenerateNewShortURL(req, res) {
  const body = req.body; // Get the URL from the form submission
  if (!body.url) return res.status(400).json({ error: "url is required" });

  const shortID = shortid();
  await URL.create({
    shortId: shortID,
    redirectURL: body.url,
    visitHistory: [],
  });

  // Redirect to home page with a query parameter for the new ID
  return res.redirect(`/?id=${shortID}`); // Redirect with the short ID as a query parameter
}

module.exports = {
  handleGenerateNewShortURL,
  handleGetAnalytics,
};


async function handleGetAnalytics(req, res) {
  const shortId = req.params.shortId;
  const result = await URL.findOne({ shortId });
  return res.json({
    totalClicks: result.visitHistory.length,
    analytics: result.visitHistory,
  });
}

module.exports = {
  handleGenerateNewShortURL,
  handleGetAnalytics,
};
