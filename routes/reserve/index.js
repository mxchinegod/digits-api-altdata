const express = require("express");
const router = express.Router();
const moment = require("moment");

/* This is a get request to the Federal Reserve website. */
router.get('/schedule', function (req, res, next) {
    const https = require("https");
    const options = {
        headers: {"User-Agent": "Digits3 News API"}
    }
    https.request(`https://www.federalreserve.gov/json/calendar.json`, options, (response) => {
        let data = '';
        response.on('data', (chunk) => {
            data = data + chunk.toString();
        })
        response.on('end', () => {
            // This should be res.json JSON.parse() but it says invalid JSON...
            res.send(data)
        })
    })
    .on('error', (error) => {
        console.log('An error', error);
    })
    .end()
});

module.exports = router;