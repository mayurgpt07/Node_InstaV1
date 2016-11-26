var mongoose = require('mongoose');

module.exports = mongoose.model('Pic', {
    name: 'String',
    url: 'String',
    uploadDate: {
        type: Date,
        default: Date.now
    }
});