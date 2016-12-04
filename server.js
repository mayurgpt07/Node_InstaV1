var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    app = express(),
    session = require('express-session'),
    passport = require('passport'),
    multiparty = require('connect-multiparty'),
    multipartMiddleware = multiparty(),
    uploadRouter = require('./controllers/uploadController.js')(),
    viewRouter = require('./controllers/viewController.js')(),
    loginRouter = require('./controllers/loginController.js')();

//Set configurations
var configs = require('./config/config.js')();

mongoose.connect(process.env.MONGO_CONNECTION);

var port = process.env.port || 8002;

app.use('/app', express.static(__dirname + '/app'));
app.use(bodyParser.json());
app.use(multipartMiddleware);
app.use(session({
    secret: 'mayur',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
// require('./config/strategies/local.strategy.js')();
require('./config/passport.js')();
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/usejs', express.static(__dirname + '/usejs'));
app.use('/share', multipartMiddleware, uploadRouter);
app.use('/', loginRouter);
app.use('/getNewPics', viewRouter);
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