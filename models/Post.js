const mongoose = require('mongoose');
const PostSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    text: {
        type: String,
        required: [true, 'Text is required']
    },
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    avatar: {
        type: String,
        required: [true, 'Avatar is required']
    },
    likes: [{
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    }],
    comments: [{
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        text: {
            type: String,
            required: [true, 'Text is required']
        },
        name: {
            type: String,
            
        },
        avatar: {
            type: String,
            
        },
        date: {
            type: Date,
            default: Date.now
        }
 
    }],
    date: {
        type: Date,
        default: Date.now
    }
})
module.exports = Post = mongoose.model('Post', PostSchema);
    
