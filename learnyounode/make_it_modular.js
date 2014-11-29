var filteredLs = require('./make_it_modular_filtered_ls')

var pathToFolder = process.argv[2]
var extension = process.argv[3]

filteredLs(pathToFolder, extension, function (err, list) {
	if (err) {
		return console.log('Error while reading from directory: ' + pathToFolder + '. Erro message: ' + err)
	}
	for (i = 0; i < list.length; i++) {
		console.log(list[i])
	}
})


	