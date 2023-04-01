const mongoose = require("mongoose");

const empSchema = mongoose.Schema({
    name:{
        type:String,
        required: true,
    },
    empId:{
        type:Number,
    },
    age:{
        type:Number,
        required:true,
    },
    department:{
        type:String,
        required: true,
    },
    locality:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        required:true,
    },
    city:{
        type:String,
        required:true,
    },
    createdById: {
        type:String,
        required:true,
    },
    createdAt:{
        type: Date,
    },
    createdBy:{
        type:String,
        required: true,
    }
});


const employee = mongoose.model("employee", empSchema);

module.exports = employee;