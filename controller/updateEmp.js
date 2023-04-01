const mongoose = require("mongoose");
const employee = require("../model/empSchema");

const updateEmp = async (req, res)=>{
    try{
        const id = req.params.id;
        const emp = await employee.findById(id);
        if(!emp){
            return res.status(401).json({err: "Employee not found."});
        }
        await emp.updateOne(req.body);
        return res.status(201).json({status:201, success: "Post Update Successfully"});
    }
    catch(err){
        console.log("Error in /update/:id, ", err);
        return res.status(401).json({error: "Something went wrong"});
    }
}

module.exports = updateEmp;