var http = require('http');
var express = require('express');
const config = require("./config");
const loaders = require("./loaders");
require('./loaders/dbConnect')

var app = express();

config();
loaders();

http.createServer(app).listen(process.env.APP_PORT || 5000, function() {
    console.log(`Express app started on : ${ process.env.APP_HOST || 'http://localhost' }:${  process.env.APP_PORT || 5000}`)
});

app.get('/', function(req, res) {
    res.send('Welcome Our Home Page');
});