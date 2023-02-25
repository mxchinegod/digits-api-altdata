const express = require("express");
const router = express.Router();
const moment = require("moment");
const config  = require("../../config")

/* This is a post request to the news api. */
router.post('/quarterly', function (req, res, next) {
    const https = require("https");
    const options = {
        headers: {"User-Agent": "Digits3 News API"}
    }
    https.request(`https://www.googleapis.com/customsearch/v1?key=${config.googleKey}&cx=${config.googleCx}&q=Market Q${moment().quarter()}%20after%3A${moment().subtract(30, 'days').format('YYYY-MM-DD')}%20filetype%3Apdf`, options, (response) => {
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