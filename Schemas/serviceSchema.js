const mongoose = require('mongoose');
const serviceSchema=mongoose.Schema({
    name:{
        type:String, 
        required:true
    },
    price:{
        type:String, 
        required:true
    },
    description:{
        type:String, 
        required:true
    },
    img:{
        data: Buffer,
        contentType: String
        
    },
    date:{
        type:Date, 
        default:Date.now
    }
})
module.exports =serviceSchema;