const mongoose = require("mongoose");
const employee = require("../model/empSchema");

const getEmpId = async (req, res)=>{
    try{
        const id = req.params.id;
        const emp = await employee.findById(id);
        return res.status(201).json({status:201, result:emp});
    }
    catch(error){
        console.log("Error in GetEmpId: ", error);
        return res.status(401).json({status:401, error:"Something went wrong"});
    }
}

module.exports = getEmpId;