var express = require('express'),
    uploadRouter = express.Router(),
    cloudinary = require('cloudinary'),
    fs = require('fs'),
    Pic = require('../datasets/pics.js'),
    Doc = require('../datasets/document.js');

var router = function() {
    uploadRouter.route('/').
    post(function(req, res) {
        console.log("Pueto entrar perfovor");
        console.log(req.files.file);
        var a;
        var file = req.files.file;
        var filePath = req.files.file.path;
        var doc = new Doc();
        doc.docs.data = fs.readFileSync(filePath);
        doc.docs.contentType = 'application/pdf';
        doc.save(function(err, result) {
            if (err) {
                throw err;
            } else {
                a = result._id;
                console.log('Saved', result);
                res.send(result).status(200);
            }
        });



        // var fileName = req.files.file.path;
        // var fileData = req.body.data;
        // console.log(fileName);
        // console.log(fileData);
        // cloudinary.uploader.upload(fileName, function(response) {
        //     console.log(response);
        //     var picture = new Pic();
        //     picture.name = req.body.name || response.original_filename;
        //     picture.url = response.secure_url;
        //     picture.description = req.body.description;
        //     picture.save(function(err, result){
        //     	if(err){
        //     		throw err;
        //     	}
        //     	else{
        //     		console.log("Saved it", result);
        //     	}
        //     });
        // });
    });

    return uploadRouter;
};

module.exports = router;