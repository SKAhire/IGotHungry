const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Comments = new Schema({
    r_id:{
        type: String,
    },
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    comment:{
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})