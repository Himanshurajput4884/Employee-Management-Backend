const jwt = require("jsonwebtoken");
const admin = require("../model/admin");
const SecretKey = process.env.SECRET_KEY


const authenticate = async (req, res, next) =>{
    console.log(req.headers);
    try{
        const token = req.headers.authorization;

        const verifytoken = jwt.verify(token, SecretKey);
        // console.log("Verify Token:",verifytoken);
        
        const rootUser = await admin.findOne({_id:verifytoken._id});
        if(!rootUser){
            throw new Error("User not found");
        }
        req.body.token = token;
        req.body.rootUser = rootUser;
        req.body.userId = rootUser._id;
        // console.log("In authenticate\n",rootUser);
        next();
    }
    catch(error){
        return res.status(401).json({status:401, error: "Unauthorized no token provided"});
    }
}

module.exports = authenticate;