var express = require('express');
var	app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
	res.render('calculate', {data: "Welcome to the Calculator"});
});

app.get('/add/:op1/:op2', function(req, res){
	var num1 = parseInt(req.params.op1);
	var num2 = parseInt(req.params.op2);
	var sum = (num1 + num2).toString();
	res.send(sum);
});

app.get('/sub/:op1/:op2', function(req, res){
	var num1 = parseInt(req.params.op1);
	var num2 = parseInt(req.params.op2);
	var sum = (num1 - num2).toString();
	res.send(sum);
});

app.get('/mult/:op1/:op2', function(req, res){
	var num1 = parseInt(req.params.op1);
	var num2 = parseInt(req.params.op2);
	var sum = (num1 * num2).toString();
	res.send(sum);
});

app.get('/div/:op1/:op2', function(req, res){
	var num1 = parseInt(req.params.op1);
	var num2 = parseInt(req.params.op2);
	var sum = (num1 / num2).toString();
	res.send(sum);
});

app.listen(3000, function() {
	console.log("server running on port 3000");
});