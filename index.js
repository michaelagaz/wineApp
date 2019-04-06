var express = require('express');
var httpProxy = require('http-proxy');
var apiForwardingUrl = 'http://api.open-notify.org/astros.json?';
var server = express();
server.set('port', 8000);
server.use(express.static(__dirname + '/app'));
var apiProxy = httpProxy.createProxyServer();
// Grab all requests to the server with "/space/".
server.all("/api/*", function(req, res) {
    console.log("Request made to /api/");
});
server.listen(server.get('port'), function() {
    console.log('Express server listening on port ' + server.get('port'));
});