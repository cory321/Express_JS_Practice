var http = require("http");
var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(request, response){

	var url = "http://omdbapi.com/?i=tt0241527";
	var returnedData;

	http.get(url, function(res) {

		res.setEncoding('utf8');

		res.on('data', function (chunk) {
	    	returnedData = JSON.parse(chunk);
		});

		res.on('end', function() {
			response.render('index', returnedData);
		});
	});
});

app.listen(3000, function(){
	console.log("Server on 3000");
});

