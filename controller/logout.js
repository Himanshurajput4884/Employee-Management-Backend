const logout = async (req, res) =>{
    try{
        
        const rootUser = req.body.rootUser.filter((curelim)=>{
            return curelim.token != req.body.token;
        });
        res.clearCookie("usercookie", {path:"/"});
        req.rootUser.save();
        return res.status(201).json({status:201});
    }
    catch(error){
        console.log("Error in logout: ", error);
        return res.status(401).json({error: error});
    }
}

module.exports = logout;