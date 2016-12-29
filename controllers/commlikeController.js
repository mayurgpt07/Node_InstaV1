var express = require('express'),
    app = express(),
    commlikeRouter = express.Router(),
    Pics = require('../datasets/pics.js'),
    mongoose = require('mongoose'),
    User = require('../datasets/user.js');

var router = function(io, sessionMiddleware) {
    commlikeRouter.route('/comment').
    post(function(req, res) {
        var body = req.body;
        Pics.update({
            _id: body.pics._id
        }, {
            $inc: {
                commentCount: 1
            },
            '$push': {
                commentUser: {
                    user: {
                        _id: req.user._id,
                        name: req.user.name,
                        email: req.user.email
                    },
                    comment: body.commentText
                }
            }

        }, function(err, result) {
            if (err) {
                throw err;
            } else {
                console.log(result);
                res.send(result).status(200);

            }
        });
    });
    io.use(function(socket, next) {
        sessionMiddleware(socket.request, socket.request.res, next);
    });

    io.sockets.on('connection', function(socket) {
        console.log('Started the socket connection');
        var data;
        //console.log('Helllllllo!!',socket.request.session);
        socket.on('like', function(data) {
            var body = socket.request.session.passport.user;
            var status;
            Pics.update({
                _id: data.pics._id
            }, {
                $inc: {
                    likeCount: 1
                },
                '$push': {
                    likeUser: {
                        user: {
                            _id: body._id,
                            name: body.name,
                            email: body.email
                        },
                        liked: true
                    }
                }
            }, function(err, result) {
                if (err) {
                    data = {
                        status: 404,
                        user: body,
                        message: 'Sorry something went wrong',
                        liked: false

                    };
                    throw err;
                } else {
                    console.log(result);
                    data = {
                        status: 200,
                        user: body,
                        liked: false
                    };
                }
                socket.emit('likeBack', data);
            });
        });
    });


    return commlikeRouter;
};

module.exports = router;