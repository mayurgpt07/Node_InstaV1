var mongoose = require('mongoose'),
    Comment = require('../datasets/comments.js'),
    User = require('../datasets/user.js');

module.exports = mongoose.model('Pic', {
    name: 'String',
    description: 'String',
    url: 'String',
    uploadDate: {
        type: Date,
        default: Date.now
    },
    commentUser: {
        type: Array,
        
        user: {
            type: Array,
            ref: 'User'
        },
        commentText: [String]
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