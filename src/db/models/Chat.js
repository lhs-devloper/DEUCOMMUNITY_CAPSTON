const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const chatSchema = new Schema({
    room:{
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Room"
    },
    user: String,
    chat: String,
    img: String,
},{
    timestamps: true,
})

module.exports = mongoose.model('Chat', chatSchema);