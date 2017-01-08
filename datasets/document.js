var mongoose = require('mongoose');

module.exports = mongoose.model('Document', {
    docs: {
    	data: Buffer,
    	contentType: String
    }
});