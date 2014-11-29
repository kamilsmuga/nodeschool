var fs = require('fs')

var pathToFolder = process.argv[2]
var extension = process.argv[3]

fs.readdir(pathToFolder, parseDirs)

function parseDirs(err, list) {
	if (err) {
		console.log('Error while reading from directory: ' + pathToFolder + '. Erro message: ' + err)
		return
	}
	for (i = 0; i < list.length; i++) {
		var splitByDot = list[i].split('.')
		if (splitByDot.length >= 2) {
			if (splitByDot[splitByDot.length - 1].toUpperCase() === extension.toUpperCase()) {
				console.log(list[i])
			}
		} 
	}
}