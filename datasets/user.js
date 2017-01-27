var mongoose = require('mongoose'),
	Pics = require('../datasets/pics.js');

module.exports = mongoose.model('User', {
    name: 'String',
    email: 'String',
    password: 'String',
    joinedDate: {
        type: Date,
        default: Date.now
    },
    isAdmin: {type: Boolean, default: false},
    isVerified: {type: Boolean, default: false}
});