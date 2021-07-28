const express = require('express');
const cors = require('cors');
const app = express();

//add the front end url here
// Then, it will solve the problem of cors
const whitelist = [ 'http://localhost:1624/time-event-log', "http://localhost:1624/"];
var corsOptionsDelegate = (req, callback) => {
    var corsOptions;
    console.log(req.header('Origin'));
    if(whitelist.indexOf(req.header('Origin')) !== -1) {
        corsOptions = { origin: true };
    }
    else {
        corsOptions = { origin: false };
    }
    callback(null, corsOptions);
};

exports.cors = cors();
exports.corsWithOptions = cors(corsOptionsDelegate);