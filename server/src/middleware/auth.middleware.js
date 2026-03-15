const jwt=require('jsonwebtoken');
const blacklistModel=require('../models/blacklist.model')

async function authUser(req,res,next) {

    const token=req.cookies.token;

    if(!token){
        return res.status(400).json({
            message:"No token provided"
        })
    }

    const isBlacklisted=await blacklistModel.findOne({
        token
    })

    if(isBlacklisted){
          return res.status(400).json({
            message:" token provided  invalid"
        })
    }

    const decoded=jwt.verify(token,process.env.JWT_SECRET_KEY);

    try {
        req.user=decoded;

        next();
       
    
    } catch (error) {
        return res.status(400).json({
            message:" token provided"
        })
    }
    


    
}

module.exports={authUser}