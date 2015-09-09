var fs = require("fs");
var file = fs.readFileSync(process.argv[2], 'utf-8');
var numLineBreaks = file.split("\n").length;
console.log("The number of line breaks is " + numLineBreaks);

// OMDB API Homework can be found in omdbapiRequest.js