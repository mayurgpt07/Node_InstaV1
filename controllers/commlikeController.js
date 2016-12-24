var express = require('express'),
    commlikeRouter = express.Router(),
    Pics = require('../datasets/pics.js'),
    mongoose = require('mongoose'),
    User = require('../datasets/user.js');

var router = function() {
    commlikeRouter.route('/comment').
    post(function(req, res) {
        var body = req.body;
        // console.log(body);
        // console.log(req.session);
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
                //res.send(result).status(200);

            }
        });
    });

    return commlikeRouter;
};

module.exports = router;