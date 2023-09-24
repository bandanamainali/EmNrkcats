const mongoose= require("mongoose");

const validator = require("validator");
const studentSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },
    
     email:{
        type:String,
        required:true,
        unique:[true,"email id is already used"],
        
     }  
    
});
// we will create a new collection
const Student = new mongoose.model('Class',studentSchema);
module.exports =Student;