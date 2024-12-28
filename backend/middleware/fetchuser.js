var jwt=require('jsonwebtoken');

const JWT_SECRET='Sanket is IT person'; 

const fetchuser=(req,res,next)=>{
    // Get the user from JET token and ass id to req object
    const token=req.header('auth-token');
    if (!token){
        res.status(401).send({error:"Plesse authenticate using valid token"})
    }
    try{
        const data=jwt.verify(token,JWT_SECRET);
        req.user=data.user;
        next();
    } catch(error){
        res.status(401).send({error:"Plesse authenticate using valid token"})
    }
}

module.exports=fetchuser;