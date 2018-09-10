var fs = require('fs');
var mime = require('mime');
var extract = require('./extract');

var readFile = function (url, responceServer, dirFiles) {
	var path = extract(url, dirFiles);
	fs.readFile(path, function (err, data) {
		if (err) {
			handleError(err, responceServer);
			return;
		} else {
			responceServer.setHeader('Content-Type', mime.getType(path));
			responceServer.end(data);
		}
	});
}

var handleError = function (error, responceServer) {
	responceServer.writeHead(404);
	responceServer.end('Page NotFound 404');
}

module.exports = readFile;