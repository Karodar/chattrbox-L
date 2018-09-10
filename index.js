var http = require('http');
var read = require('./read.js');
var wss = require('./websockets-server.js');

var server = http.createServer(function (req, res) {
	console.log('Responding to a request');

	read(req.url, res);
});
server.listen(3000);