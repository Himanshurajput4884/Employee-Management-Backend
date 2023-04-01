const admin = require("../model/admin");

const validUser = async(req, res) =>{
    // console.log("validUser req: \n",req.body);
    try{
        const validUserOne = await admin.findOne({_id: req.body.userId});
        return res.status(201).json({ status:201, validUserOne});   
    }
    catch(error){
        res.status(401).json({status:401, error});
    }
}

module.exports = validUser;