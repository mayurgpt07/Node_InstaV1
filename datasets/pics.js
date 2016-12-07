var mongoose = require('mongoose'),
    Comment = require('../datasets/comments.js');

module.exports = mongoose.model('Pic', {
    name: 'String',
    description: 'String',
    url: 'String',
    uploadDate: {
        type: Date,
        default: Date.now
    },
    commentUser: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Comment'
    },
    likeCount: {
        type: Number,
        default: 0
    },
    commentCount: {
        type: Number	,
        default: 0
    }
});