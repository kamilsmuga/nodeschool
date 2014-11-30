var http = require('http')
var url = require('url')
var map = require('through2-map')
var port = process.argv[2]

var myFormat = function (hour, minute, second) {
	this.hour = hour
	this.minute = minute
	this.second = second
}

var myUnixFormat = function (unixtime) {
	this.unixtime = unixtime
}


var server = http.createServer(function(request, response) {
	if (request.method == 'GET') {
		var parsedUrl = url.parse(request.url, true)
		var parsedIso =  new Date(parsedUrl.query['iso'])

		if (parsedUrl.pathname.toString().indexOf('parsetime') > -1) {
			var myFormatObject = new myFormat(parsedIso.getHours(), parsedIso.getMinutes(), parsedIso.getSeconds())
			var myJson = JSON.stringify(myFormatObject)
			response.writeHead(200, {"Content-Type": "application/json"});
			response.end(myJson)
			
		}
		else if (parsedUrl.pathname.toString().indexOf('unixtime') > -1) {
			var myUnixFormatObject = new myUnixFormat(parsedIso.valueOf())
			var myJson = JSON.stringify(myUnixFormatObject)
			response.writeHead(200, {"Content-Type": "application/json"});
			response.end(myJson)
		}
	}
})

server.listen(port)