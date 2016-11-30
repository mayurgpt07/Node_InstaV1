var express = require('express'),
    uploadRouter = express.Router(),
    cloudinary = require('cloudinary'),
    Pic = require('../datasets/pics.js');

var router = function() {
    uploadRouter.route('/').
    post(function(req, res) {
        console.log("Pueto entrar perfovor");
        var fileName = req.files.file.path;
        var fileData = req.body.data;
        console.log(fileName);
        console.log(fileData);
        cloudinary.uploader.upload(fileName, function(response) {
            console.log(response);
            var picture = new Pic();
            picture.name = req.body.name || response.original_filename;
            picture.url = response.secure_url;
            picture.description = req.body.description;
            picture.save(function(err, result){
            	if(err){
            		throw err;
            	}
            	else{
            		console.log("Saved it", result);
            	}
            });
        });
        res.send('Done').status(200);
    });

    return uploadRouter;
};

module.exports = router;