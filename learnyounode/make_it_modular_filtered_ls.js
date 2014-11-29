var fs = require('fs')

module.exports = function(pathToFolder, extension, callbackFunction) {
	var files = []
	fs.readdir(pathToFolder, function(err, list) {
		if (err) {
			return callbackFunction(err)
		}

		for (i = 0; i < list.length; i++) {
			var splitByDot = list[i].split('.')
			if (splitByDot.length >= 2) {
				if (splitByDot[splitByDot.length - 1].toUpperCase() === extension.toUpperCase()) {
					files.push(list[i])
				}
			} 
		}	

		callbackFunction(null, files)
	})
}