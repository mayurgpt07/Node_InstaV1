var express = require('express'),
	profileRouter = express.Router(),
	User = require('../datasets/user.js');

var router = function(){
	profileRouter.route('/:id').
		get(function(req, res){
			console.log(req.params.id);
		});
	return profileRouter;
};

module.exports = router;