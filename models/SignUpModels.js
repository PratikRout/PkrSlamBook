const mongoose = require('mongoose')

const signUpTemplate = new mongoose.Schema({
    q1:{
        type:String,
        required:true
    },
    q2:{
        type:String,
        required:true
    },
    q3:{
        type:String,
        required:true
    },
    q4:{
        type:String,
        required:true
    },
    q5:{
        type:String,
        required:true
    },
    q6:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('mytable', signUpTemplate)