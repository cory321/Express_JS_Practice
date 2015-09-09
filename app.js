var express = require('express');
var fs = require("fs");
var app = express();

var file = fs.readFileSync('test.txt', 'utf-8');

app.set('view engine', 'ejs');

app.get('/', function(request, response){
	response.render('index', file);
});

app.listen(3000, function(){
	console.log("Server on 3000");
});

	
