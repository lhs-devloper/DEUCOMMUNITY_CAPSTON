const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const roomSchema = new Schema({
    title: {
        type: String, 
        require:true
    },
    max: {
        type: Number,
        require: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
},{
    timestamps: true,
})

module.exports = mongoose.model('Room', roomSchema);