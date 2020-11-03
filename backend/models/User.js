const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = new Schema({
    name:{
      type:String,
        
    },
    isActive:{
        type:Boolean,
        default:false,
        
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String
    },
    companiesSelected:{
        type:Array
    },
    activeToken:{
        type:String
    },
    activeExpires:{
        type:Date
    }
});

const UserModel = mongoose.model('User',User);
module.exports = UserModel;
