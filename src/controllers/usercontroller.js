const User=require('../models/user.js');
const jsonToken=require('jsonwebtoken');

const createToken=(id)=>{
    return jsonToken.sign(id,process.env.SECRET,{expiresIn:'3d'})
}
const login=async(req,res)=>{
    try{
        const {email,password}=req.body;
        if(!email || !password)
        {
            res.status(400).json({error:'missing required parameters'});
        }
        const user=await User.login(email,password);
        if(user)
        {
            const token=createToken(user.id)
            res.status(200).json({status:true,user:user,token:token})
        }
        else{
        res.status(400).json({status:false,message:'something went wrong'});

        }


    }
    catch(error)
    {
        res.status(400).json({status:false,error:error.message});
    }
}

module.exports=login;