var fs = require('fs')

var pathToFile = process.argv[2]

var buf = fs.readFileSync(pathToFile)

var str = buf.toString()

var splits = str.split('\n')

console.log(splits.length - 1)