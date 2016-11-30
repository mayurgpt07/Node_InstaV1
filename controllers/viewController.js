var express = require('express'),
	Pics = require('../datasets/pics.js'),
    viewRouter = express.Router();

var router = function() {
    viewRouter.route('/').
    get(function(req, res) {
        console.log("hi there");
        Pics.find({}).
        limit(10).
        exec(function(err, photos) {
            if (err) {
                res.send('Error').status(500);
            } else {
                res.send(photos).status(200);
            }
        });
    });
    return viewRouter;
};

module.exports = router;