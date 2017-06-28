//dependencies
var path = require('path');

//export.html routes
module.exports = function(app) {
	// console.log('enter htmlroute');

	app.get('/',function (req, res){
		res.sendFile(path.join(__dirname, '../public/home.html'));
	});

	// Survey Page
	app.get('/survey', function(res, res){
		res.sendFile(path.join(__dirname, '../public/survey.html'));
	});

};
