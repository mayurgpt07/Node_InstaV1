var express = require('express'),
	uploadRouter = express.Router();

var router = function(){
	uploadRouter.route('/').
	post(function(req, res){
		console.log("Pueto entrar perfovor");

	});

	return uploadRouter;
};

module.exports = router;