const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: { type: String },
    content: { type: String },
    owner: { type: Schema.Types.ObjectId, ref: "User"},
    comments: [{
        type: Schema.Types.ObjectId, ref: "Comment"
    }],
    meta: {
        views: { type: Number, default: 0, required: true },
    },
}, {
    timestamps: true,
})

module.exports = mongoose.model('Post', PostSchema);