var express = require('express'),
    commlikeRouter = express.Router(),
    Pics = require('../datasets/pics.js'),
    mongoose = require('mongoose');

var router = function() {
    commlikeRouter.route('/comment').
    post(function(req, res) {
        var body = req.body;
        console.log(body.pics);
        console.log(req.session);
        /*		Pics.findById(id, function(err, result){
        			if(err){
        				throw err;
        			}
        			else{
        				console.log(result);
        			}
        		});
        */
        Pics.update({
            _id: body.pics._id
        }, {
            $set: { 
            	'commentCount' : body.pics.commentCount,
            }
        },function(err, result){
        	console.log(result);
        });
    });

    return commlikeRouter;
};

module.exports = router;