const express = require("express");
const router = express.Router();
const moment = require("moment");

/* This is a post request to the news api. */
router.post('/everything', function (req, res, next) {
    const https = require("https");
    const options = {
        headers: {"User-Agent": "Digits3 News API"}
    }
    https.request(`https://newsapi.org/v2/everything?q=${req.body.query}&sortBy=publishedAt&apiKey=912f1d27a98c4a75a4d26c7cb2de2157&language=en`, options, (response) => {
        let data = '';
        response.on('data', (chunk) => {
            data = data + chunk.toString();
        })
        response.on('end', () => {
            res.json(JSON.parse(data))
        })
    })
    .on('error', (error) => {
        console.log('An error', error);
    })
    .end()
});

module.exports = router;