const mongoose = require("mongoose");
const {body,validationResult} = require("express-validator")

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        minlength:5,
        require:true
    },
    phone:{
        type:Number,
        require:true
    },

    isAdmin:{
        type:Boolean,
        require:true
    }
})

module.exports = mongoose.model("user",userSchema)