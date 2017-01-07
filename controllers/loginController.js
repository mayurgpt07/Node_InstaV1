    var express = require('express'),
        User = require('../datasets/user.js'),
        loginRouter = express.Router(),
        passport = require('passport');

    var router = function() {
        // loginRouter.route('/login')
        //     .post(passport.authenticate('local', {
        //         failureRedirect: '/'
        //     }), function(req, res) {
        //         console.log('This is', req.session.passport.user);
        //         var user = req.session.passport.user;
        //         res.send(user).status(200);
        //     });

        loginRouter.route('/login')
            .post(function(req, res, next) {
                passport.authenticate('local', function(err, user, info) {
                    // if (err) {
                    //     console.log('OLA amigos');
                    //     res.send('Login error').status(404);
                    // }
                    // req.login(user, function(err) {
                    //     if (err) {
                    //         console.log('Error in session');
                    //         res.send('Login error in session').status(404);
                    //     }
                    // });
                    if(user === false){
                        console.log('entered in false user');
                        res.status(404).send('Login error bitch');
                    }else{
                        req.login(user,function(err){
                            if(err){
                                console.log('entered in err of session');
                                res.status(404).send('Login error in session');
                            }
                            else{
                                console.log('All is well');
                                res.status(200).send(user);
                            }
                        });
                    }
                })(req, res, next);
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

        loginRouter.route('/logout')
            .post(function(req, res) {
                console.log('body from request isss....', req.body);
                console.log(req.user);
                var body = req.body;
                var sessionBody = req.user;
                if ((body.email === sessionBody.email) && (body.password === sessionBody.password)) {
                    req.logout();
                    res.send('Logged out');
                }
            });

        return loginRouter;
    };

    module.exports = router;