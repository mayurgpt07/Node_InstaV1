    var express = require('express'),
    User = require('../datasets/user.js'),
    loginRouter = express.Router(),
    passport = require('passport');

var router = function() {
    loginRouter.route('/login')
        .post(passport.authenticate('local',{
            failureRedirect: '/'
        }),function(req, res) {
             console.log('This is', req.session.passport.user);
             var user = req.session.passport.user;
             res.send(user).status(200);
        });

    loginRouter.route('/signup')
        .post(function(req, res) {
            console.log(req.body);
            var user = new User();
            user.name = 'mayur';
            user.email = req.body.email;
            user.password = req.body.password;
            user.save(function(err, result) {
                if (err) {
                    throw err;
                } else {
                    console.log("Signed up and ready to go");
                    req.login(result, function(err) {
                        if (err) {
                            console.log(err);
                        } else {
                            console.log(req.user);
                            res.send(req.user).status(200);
                        }
                        console.log("logged in");
                    });
                }
                // res.send("Signed up all good").status(200);
            });
        });

    return loginRouter;
};

module.exports = router;