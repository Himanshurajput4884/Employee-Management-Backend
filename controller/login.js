const admin = require("../model/admin");
const bcrypt  = require("bcryptjs");
const jwt = require("jsonwebtoken");

const login = async (req, res) =>{
    // console.log("login page: ", req.body);
    const { username, password } = req.body;
    if(!username || !password){
        return res.status(401).json({ error: "Fill all the details."});
    }

    try{
        const validUser = await admin.findOne({username: username});
        if(validUser){
            const isMatch = await bcrypt.compare(password, validUser.password);

            if(!isMatch){
                return res.status(401).json({error: "Incorrect Username and Password."});
            }
            else{
                const token = await validUser.generateAuthtoken();
                
                res.cookie("usercookie", token, {
                    expires: new Date(Date.now()+9000000),
                    httpOnly: true
                })

                const result = {
                    validUser,
                    token
                }
                console.log("\nLogin page: ", result);
                res.status(201).json({ status:201, result});
            }
        }
    }
    catch(error){
        console.log("Error in login: ",error);
        return res.status(401).json(error);
    }
}



module.exports = login;