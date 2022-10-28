const express = require("express");
const router = express.Router();

router.get('/spCompare', function (req, res, next) {
    const csv = require('csv-parser')
    const fs = require('fs')
    const results = [];
    const https = require("https");
    const moment = require("moment");
    const namingconv = "./" + moment.now() + ".csv"
    const file = fs.createWriteStream(namingconv);

    https.get("https://squeezemetrics.com/monitor/static/DIX.csv", response => {
        var stream = response.pipe(file);
        stream.on("finish", function () {
            fs.createReadStream(namingconv)
                .pipe(csv())
                .on('data', (data) => results.push(data))
                .on('end', () => {
                    const clone = (obj) => Object.assign({}, obj);

                    const renameKey = (object, key, newKey) => {
                        var final = [];
                        for (i = 0; i < object.length; i++) {
                            const clonedObj = clone(object[i]);
                            const targetKey = clonedObj[key];
                            delete clonedObj[key];
                            clonedObj[newKey] = targetKey;
                            final.push(object[i]);
                        }
                        return final;
                    };
                    results_masked = renameKey(results, "dix", "dp_volume")
                    fs.unlink(namingconv, function () { })
                    res.send(results_masked)
                });
        });
    });
});

module.exports = router;