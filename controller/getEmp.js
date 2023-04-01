const mongoose = require("mongoose");
const employee = require("../model/empSchema");

const getEmp = async(req, res)=>{
    try{
        const data = await employee.find({});
        return res.status(201).json({status:201, data:data});
    }
    catch(error){
        console.log("Error in getEmp: ", error);
        return res.status(401).json({error: "Something went wrong"});
    }
}

module.exports = getEmp;