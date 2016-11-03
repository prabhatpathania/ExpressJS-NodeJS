var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('<h3>Response from Express</h3>');
});

app.listen(3000, function(){
    console.log("Listening to port 3000");
});

//var http = require('http');
//var myServer = http.createServer(function(request, response){
//    response.writeHead(200, {"Content-Type": "text/html"});     //text/plain
//    response.write("<h3>Response from app.js</h3>");
//    response.end();
//});
//myServer.listen(3000);
//console.log('Go to http://localhost:3000 on your browser');