var express = require('express'),
	profileRouter = express.Router(),
	User = require('../datasets/user.js');

var router = function(){
	profileRouter.route('/:id').
		get(function(req, res){
			console.log(req.params.id);
			var id = req.params.id;
			console.log(req.session);
			User.findById(id, function(err, result){
				if(err){
					throw err;
				}
				else{
					res.send(result).status(200);
				}
			});
		});
	return profileRouter;
};

module.exports = router;