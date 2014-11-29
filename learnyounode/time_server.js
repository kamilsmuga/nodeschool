var net = require('net')
var strftime = require('strftime')
var port = process.argv[2]

var server = net.createServer(function(socket){ 
	var format = '%Y-%m-%d %H:%M%n'
	socket.end(strftime(format, new Date()))
})

server.listen(port)