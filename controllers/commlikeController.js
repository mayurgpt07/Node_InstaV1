var express = require('express'),
    commlikeRouter = express.Router(),
    Pics = require('../datasets/pics.js'),
    Comments = require('../datasets/comments.js'),
    mongoose = require('mongoose');

var router = function() {
    commlikeRouter.route('/comment').
    post(function(req, res) {
        var body = req.body;
        console.log(body);
        console.log(req.session);
        var commentsInfo = new Comments();
        commentsInfo.user = req.user;
        commentsInfo.commentText = req.user;
        Pics.update({
            _id: body.pics._id
        }, {
            $set: {
                commentCount: body.pics.commentCount,
                commentUser: commentsInfo
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

    return commlikeRouter;
};

module.exports = router;