const mongoose=require('mongoose');
const validator=require('validator');
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
},{collection:'users'});

UserSchema.statics.login=async function (email,password){
    if(!email || !password)
    {
        throwError('Missing required parameters')
    }

    if(!validator.isEmail())
    {
        throwError('Invalid Email');
    }

    const user=await this.findOne({email:email})
    if(!user)
    {
        throwError('Invalid email address');
    }

    const match=await bcypt.compare(password,user.password)
    if(!match)
    {
        throwError('Invalid password');
    }

    return user;
}

// this collection sample for how to assign custom collection name in mongo db

module.exports=mongoose.model('User',UserSchema);
// Specify 'userx' as the custom collection name
// module.exports = mongoose.model('User', UserSchema, 'userx');