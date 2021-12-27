#!/usr/bin/env node

const [,, ...args] = process.argv

var vt2geojson = require('@mapbox/vt2geojson');

// remote file
vt2geojson({
    uri: args[0]
}, function (err, result) {
    if (err) throw err;
    console.log(result);
});

