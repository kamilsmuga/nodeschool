var http = require('http')
var bl = require('bl') 
var url1 = process.argv[2]
var url2 = process.argv[3]
var url3 = process.argv[4]
var map = {}

function doGet(url) {
	http.get(url, function(response) {
	response.pipe(bl(function(err, data) {
			if (err) {
				console.error('Error occured while loading url: ' + url + 'Error: ' + err)
			}
			map[url] = data.toString()
			notify()
		}))	
	})
}

function notify() {
	if (Object.size(map) < 3) {
		return
	}
	else {
		console.log(map[url1])
		console.log(map[url2])
		console.log(map[url3])
	}
}

Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
}

doGet(url1)
doGet(url2)
doGet(url3)