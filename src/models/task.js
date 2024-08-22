const mongoose=require('mongoose')
const TaskSchema=new mongoose.Schema({
    task:{
        required:true,
        type:String
    },
    project:{
        required:true,
        type:String
    },
    status:{
        required:true,
        type:Boolean
    }
},{timestamps:true})

const TaskModel=mongoose.model('Task',TaskSchema);
module.exports=TaskModel;
