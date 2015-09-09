//boilerplate code

var express = require('express');


//set view engine to ejs
app.set('view engine', 'ejs');

var vegetables = [
	"carrots",
	"onions",
	"tomatoes",
	"lettuce"
];

//GET Request to '/' runs the function below

app.get('/', function(req, res) {
	//This will print hello
	res.render('index', {veggies: vegetables});
});

app.get('/hey', function(req,res){
	res.send(vegetables.join(", "));
});

app.get('/hey/:name', function(req, res){
	res.send('Hey ' + req.params.name);
});

// GET request with Query

app.get('/hi', function(req, res){
	var name = req.query.name;
	res.send("Hey, " + name);
});


//start server

app.listen(3000, function() {
	console.log("server running on port 3000");
});