var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    app = express(),
    session = require('express-session'),
    passport = require('passport'),
    multiparty = require('connect-multiparty'),
    cookieParser = require('cookie-parser'),
    multipartMiddleware = multiparty(),
    port = process.env.port || 8002,
    //assign port
    serverDet = app.listen(port, function() {
        console.log("Bitches started " + port);
    }),
    io = require('socket.io').listen(serverDet),
    //session middleware establishment
    sessionMiddlware = session({
        secret: process.env.SESSION_SECRET || 'mansi',
        resave: false,
        saveUninitialized: true
    }),
    uploadRouter = require('./controllers/uploadController.js')(),
    viewRouter = require('./controllers/viewController.js')(),
    loginRouter = require('./controllers/loginController.js')(),
    commlikeRouter = require('./controllers/commlikeController.js')(io, sessionMiddlware);


//Set cloud configurations
var configs = require('./config/config.js')();

mongoose.connect(process.env.MONGO_CONNECTION);

// console.log(io);

//app conigurations
app.use('/app', express.static(__dirname + '/app'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cookieParser());
app.use(multipartMiddleware);
app.use(sessionMiddlware);
app.use(passport.initialize());
app.use(passport.session());

//module configuration
require('./config/passport')(app);
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/usejs', express.static(__dirname + '/usejs'));
//middleware
app.use('/share', uploadRouter);
//route configurations  
app.use('/auth', loginRouter);
// app.use('/profile', profileRouter);
app.use('/getNewPics', viewRouter);
app.use('/upload', commlikeRouter);
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});