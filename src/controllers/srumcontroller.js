


// https://stackoverflow.com/questions/13850819/can-i-determine-if-a-string-is-a-mongodb-objectid
// chck it
const mongoose=require('mongoose');
const Task=require('../models/task.js')
const getAllScrums=async(req,res)=>{
  
    try{
        const data=await Task.find({});
        res.status(200).json({status:true,data:data});
    }
    catch(error)
    {
        res.status(500).json({status:false,message:error});
    }

}

const createScrum=async(req,res)=>{
    try{
       let task=req.body.task;
       let data=await Task.create({
        task:task,
        project:'p-one',
        status:false
       })
       res.status(200).json({status:true,data:data});

    }
   catch(error)
   {
    res.status(500).json({status:false,message:'interal server error'});
   }
}

const deleteScrum=async(req,res)=>{
    
    if(mongoose.Types.ObjectId.isValid(req.params.id))
    {
        try{
              await Task.findByIdAndDelete(req.params.id)  
              res.status(200).json({status:true,message:'success'});
        }
        catch{
            res.status(500).json({status:false,message:'internal server error'});
        }

    }
    else{
        res.json({status:false,message:'invalid id'});
    }
}

const updateScrum=async (req,res)=>{
   
    try{
        if(mongoose.Types.ObjectId.isValid(req.params.id))
        {
                 let task=await Task.findByIdAndUpdate(req.params.id,{status:true});
               if(task)
               {
                    res.json({status:true,message:'success'});

               }
               else{
                res.json({status:false,message:'task not foundnv'});

               }
        
        }
        else{
            res.json({status:false,message:'invalid id'});
        }
    }
    catch(error)
    {
        res.status(500).json({status:false,message:'internal server error'});

    }
}
module.exports={getAllScrums,createScrum,deleteScrum,updateScrum};