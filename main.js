var express = require('express');
var app = express();
var path = require("path");

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/static/index.html'));
});
app.listen(80);
