var express = require('express');
var app = express();
var path = require('path');
var port = (process.env.PORT || 8000);

app.use(express.static('src'));
app.use("/data", express.static(__dirname + '/data'));
app.use("/js", express.static(__dirname + '/js'));
app.use("/css", express.static(__dirname + '/css'));
app.use("/node_modules", express.static(__dirname + '/node_modules'));


// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port);