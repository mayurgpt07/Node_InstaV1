var cloudinary = require('cloudinary'),
    express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    Pic = require('./datasets/pics.js'),
    app = express(),
    multiparty = require('connect-multiparty'),
    multipartMiddleware = multiparty(),
    uploadRouter = require('./controllers/uploadController.js')();

//Set configurations
var configs = require('./config/config.js')();

//	mongoose.connect(process.env.MONGO_CONNECTION);

var port = process.env.port || 8002;

app.use('/app', express.static(__dirname + '/app'));
app.use(bodyParser.json());
app.use(multipartMiddleware);
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/usejs', express.static(__dirname + '/usejs'));
app.use('/share',multipartMiddleware,uploadRouter);
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});
app.listen(port, function() {
    console.log("Bitches started " + port);
});

// cloudinary.uploader.upload('./Picture1.jpg',function(result){
// 	console.log(result);
// 	var picture = new Pic();
// 	picture.url = result.secured_url;
// 	picture.name = 'Pictire1.jpg';
// 	picture.save();
// });