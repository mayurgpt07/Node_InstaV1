var mongoose = require('mongoose');

module.exports = mongoose.model('User', {
    name: 'String',
    email: 'String',
    password: 'String',
    joinedDate: {
        type: Date,
        default: Date.now
    }
});