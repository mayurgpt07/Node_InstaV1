var express = require('express'),
	Pics = require('../datasets/pics.js'),
    Docs = require('../datasets/document.js'),
    fs = require('fs'),
    viewRouter = express.Router();

var router = function() {
    viewRouter.route('/').
    get(function(req, res) {
        console.log("hi there");
        Docs.find({}).
        limit(10).
        exec(function(err, photos) {
            if (err) {
                res.send('Error').status(500);
            } else {
                // console.log(photos[0].docs);
                res.contentType(photos[0].docs.contentType);
                res.send(photos[0].docs.data).status(200);
            }
        });
    });
    return viewRouter;
};

module.exports = router;