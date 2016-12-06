var mongoose = require('mongoose'),
    User = require('../datasets/user.js');

module.exports = mongoose.model('Pic', {
    name: 'String',
    description: 'String',
    url: 'String',
    uploadDate: {
        type: Date,
        default: Date.now
    }
});