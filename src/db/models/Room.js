const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const roomSchema = new Schema({
    name: {
        type: String, 
        require:true
    },
    content: {
        type: String,
        require: true
    }
},{
    timestamps: true
})

module.exports = mongoose.model('Room', roomSchema);