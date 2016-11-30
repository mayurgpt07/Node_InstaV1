var express = require('express'),
    uploadRouter = express.Router(),
    cloudinary = require('cloudinary'),
    Pic = require('../datasets/pics.js');

var router = function() {
    uploadRouter.route('/').
    post(function(req, res) {
        console.log("Pueto entrar perfovor");
        var fileName = req.files.file.path;
        // console.log(fileName);
        console.log(req.body);
        // cloudinary.uploader.upload(fileName, function(response) {
        //     console.log(response);
        //     var picture = new Pic();
        //     picture.name = response.original_filename;
        //     picture.url = response.secure_url;
        //     picture.description = res.description;

        // });

    });

    return uploadRouter;
};

module.exports = router;