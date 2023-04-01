const admin = require("../model/admin");
const bcrypt = require("bcryptjs");
// we have to validate the request data with the schema.

const signupUser = async (req, res)=>{
    // error handling using try and catch
    try{
        console.log(req.body);
        // const salt = await bcrypt.genSalt();     // previous way to implement salt.
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const data = {
            name: req.body.name,
            username: req.body.username,
            password: hashedPassword,
        }

        const newAdmin = new admin(data);
        newAdmin.save();
        return res.status(201).json({ success: "Register Successfully"});
    }
    catch(error){
        console.log("Error in signupuser ", error);
        return res.status(401).json({error: error});
    }

}

module.exports = signupUser;