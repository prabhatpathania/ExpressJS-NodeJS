var express = require('express');
var app = express();
var dataFile = require('./data/data.json');

app.set('port', process.env.PORT || 3000); //to avoid hardcoding the port number
app.get('/', function (req, res) {
    var info = '';
    dataFile.speakers.forEach(function (item) {
        info += `<li>
                    <h2>${item.name}</h2>
                    <p>${item.summary}</p>
                </li>`;
    });
    res.send(`  <h1>Art Academy Meetups</h1>
                ${info} `);
});


app.listen(app.get('port'), function () {
    console.log("Listening to port " + app.get('port'));
});

//var http = require('http');
//var myServer = http.createServer(function(request, response){
//    response.writeHead(200, {"Content-Type": "text/html"});     //text/plain
//    response.write("<h3>Response from app.js</h3>");
//    response.end();
//});
//myServer.listen(3000);
//console.log('Go to http://localhost:3000 on your browser');
