const mongoose=require('mongoose');
const UserSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    }
},{collection:users});

// this collection sample for how to assign custom collection name in mongo db

module.exports=mongoose.model('User',UserSchema);
// Specify 'userx' as the custom collection name
// module.exports = mongoose.model('User', UserSchema, 'userx');