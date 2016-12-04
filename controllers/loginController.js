var express = require('express'),
    User = require('../datasets/user.js'),
    loginRouter = express.Router(),
    passport = require('passport');

var router = function() {
    loginRouter.route('/login')
        .post(passport.authenticate('local', {
            successRedirect: '/#/share',
            failureRedirect: '#/login'	
        }), function(req, res) {
            res.redirect('/share');
        });

    loginRouter.route('/signup')
        .post(function(req, res) {
        	console.log(req.body);
        	var user =  new User();
        	user.name = 'mayur';
        	user.email = req.body.email;
        	user.password = req.body.password;
        	user.save(function(err, result){
        		if(err){
        			throw err;
        		}
        		else
        		{
        			console.log("Signed up and ready to go");
        			req.login(result, function(){
        				console.log("logged in");
        			});
        		}
        	// res.send("Signed up all good").status(200);
        	});
        });

    return loginRouter;
};

module.exports = router;