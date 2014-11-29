var bl = require('bl')
var http = require('http')
var url = process.argv[2]

http.get(url, function (response) {
		
		response.pipe(bl(function(err, data) {
			if (err) {
				console.error('Error occured while loading url: ' + url + 'Error: ' + err)
			}
			console.log(Number(data.toString().length))
			console.log(data.toString())
		}))		
	}) 