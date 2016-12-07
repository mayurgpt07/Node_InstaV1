var mongoose = require('mongoose'),
	User = require('../datasets/user.js');

module.exports = mongoose.model('Comments',{
	user: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'User'
    },
    comment : [String]
});