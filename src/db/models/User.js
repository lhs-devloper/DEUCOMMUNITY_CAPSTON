const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {type: String, unique: true}, 
    password: String,
    phone: String,
    salt: String,
    posts: [{
        type: mongoose.Schema.Types.ObjectId, ref: "Post"
    }],
    comments: [{
        type: mongoose.Schema.Types.ObjectId, ref: "Comment"
    }]
},{
    timestamps: true
})

module.exports = mongoose.model('User', UserSchema);