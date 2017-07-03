var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var PORT = 3000;

//import the data feild entries
var friends = require('../data/friends.js');
//import API routes
	module.exports = function(app){
		app.get('/api/friends/',function(req, res){
			res.json(friends);
	});

<<<<<<< HEAD
	app.post('/api/friends',function(req, res){
	//Capture the user input
	var userInput = req.body;
		console.log('userInput=' + JSON.stringify(userInput));
	var userResponses = userInput.scores;
		console.log('userInput' + userResponses);
	// compute best friend match)
	var matchName = '';
	var totalDifference = 9999;
	//check all the existing friends in the list
		for (var i = 0; i < friends.length; i++) {
		 	console.log('friends = ' + JSON.stringify(friends[i]));
	//compute differences
	var diff =0;
	for(var j =0; j < userResponses.length; j++) {
=======
app.post('/api/friends',function(req, res){

//Capture the user input
var userInput = req.body;
console.log('userInput=' + JSON.stringify(userInput));
var userResponses = userInput.scores;
console.log('userInput' + userResponses);
// compute best friend match)
var matchName = '';
var totalDifference = 9999;
//check all the existing friends in the list
for (var i = 0; i < friends.length; i++) {
	 console.log('friends = ' + JSON.stringify(friends[i]));
//}
	 //compute differences
	 var diff =0;
	 for(var j =0; j < userResponses.length; j++) {
>>>>>>> 678d3fe730c9f2c2d19034dd0f1ea0119ad6927c
	 	diff += Math.abs(friends[i].scores[j] - userResponses[j]);
		console.log('diff = '+diff);

<<<<<<< HEAD
=======

console.log('diff = '+diff);


	if(diff < totalDifference) {
		console.log('closest match found' + diff);
		console.log('friends name= ' +friends[i].name);
		console.log('friends Image = '+ friends[i].photo);

		totalDifference = diff;
		matchName = friends[i].name;
		matchImage =friends[i].photo;
	}
}}
//friends.push (userInput);
res.json({status:'ok',matchName:matchName,matchImage:matchImage});
>>>>>>> 678d3fe730c9f2c2d19034dd0f1ea0119ad6927c

		if(diff < totalDifference) {
			console.log('closest match found' + diff);
			console.log('friends name= ' +friends[i].name);
			console.log('friends Image = '+ friends[i].photo);
			totalDifference = diff;
			matchName = friends[i].name;
			matchImage =friends[i].photo;
		}
    }}
 res.json({status:'ok',matchName:matchName,matchImage:matchImage});

  })
}
