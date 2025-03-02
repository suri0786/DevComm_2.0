const mongoose = require('mongoose');
const ProfileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    company: {
        type: String
    },
    website: {
        type: String
    },
    location: {
        type: String
    },
    status: {
        type: String,
        required: [true, 'Status is required']
    },
    skills: {
        type: [String],
        required: [true, 'Skills is required']
    },
    bio: {
        type: String
    },
    githubusername: {
        type: String
    },
    experience: [{
        title: {
            type: String,
        },
        company: {
            type: String,
        },
        location: {
            type: String,
        },
        from: {
            type: Date,
            required: [true, 'From date is required']

        },
        description: {
            type: String,
        }

    }],
    education: [{
        school: {
            type: String,
            required: [true, 'School is required']
        },
        degree: {
            type: String,
            required: [true, 'Degree is required']
        },
        fieldofstudy: {
            type: String,
            required: [true, 'Field of study is required']
        },
        from: {
            type: Date,
            required: [true, 'From date is required']
        },
        to: {
            type: Date,
            required: [true, 'To date is required']
        },
        current: {
            type: Boolean,
            default: false
        },
        description: {
            type: String,
        }
    }],
    social: {
        youtube: {
            type: String
        },
        twitter: {
            type: String
        },
        facebook: {
            type: String
        },
        linkedin: {
            type: String
        },
        instagram: {
            type: String
        }
    },
    date: {
        type: Date,
        default: Date.now
    }
        
})
module.exports = Profile = mongoose.model('Profile', ProfileSchema);