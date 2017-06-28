
var path = require('path');

//import the filr feild entries
var friends = require('../data/friends.js');
//import API routes
module.exports = function(app){
	app.get('/api/friends/',function(req, res){
		res.json(friends);
	});

app.post('/api/friends',function(req, res){

//Captyre the user input
var userInput = req.body;
console.log('userInput=' + JSON.stringify(userInput));
var userResponses = userInput.scores;
console.log('userInput' + userResponses);
// compute best friend match)
var matchName = '';

//check all the existing friends in the list
for (var i = 0; i < friends.length; i++) {
	 console.log('friends = ' + JSON.stringify(friends[i]));
}
	 //compute differences
	 var diff =0;
	 for(var j =0; j < userResponses.length; j++) {
	 	diff += Math.abs(friends[i].scores[j] - userResponses[j]);

}
console.log('diff = '+diff);


	if(diff < totalDifference) {
		console.log('closest match found' + diff);
		console.log('friends name= ' +friend[i].name);
		console.log('friends Image = '+ friend[i].photo);

		totalDifference = diff;
		matchName = friends[i].name;
		matchImage =friends[i],photo;
	}

friends.push (userInput);
res.json({status:'ok',matchName:matchName,matchImage:matchImage});

})

}
