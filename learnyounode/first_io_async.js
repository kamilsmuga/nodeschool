var fs = require('fs')

var pathToFile = process.argv[2]

fs.readFile(pathToFile, 'utf-8', readFileCallback)

function readFileCallback(err, data) {
	if (err) {
		console.log('Error while reading from file: ' + pathToFile + '. Erro message: ' + err)
		return
	}
	var sum = data.split('\n').length - 1
	console.log(sum)
}