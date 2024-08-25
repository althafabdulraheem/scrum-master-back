const mongoose=require('mongoose');
const validator=require('validator');
const bcrypt=require('bcrypt');
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
   
//    const salt=await bcrypt.genSalt(10)
//    const hash=await bcrypt.hash('123',salt);
// generated dummy password for testing

    if(!email || !password)
    {
        // return new Error('Missing required parameters')
        return {error:'missing required parameters'};
    }

    if(!validator.isEmail(email))
    {
        // return new Error('Invalid Email');
        return {error:'invalid email address'}
    }

    const user=await this.findOne({email:email})
    
    if(!user)
    {
        // return new Error('Invalid email address');
        return {error:'email not found'};
    }

    const match=await bcrypt.compare(password,user.password)
    if(!match)
    {
        // return newError('Invalid password');
        return {error:'invalid password'};
    }

    return user;
}

// this collection sample for how to assign custom collection name in mongo db

module.exports=mongoose.model('User',UserSchema);
// Specify 'userx' as the custom collection name
// module.exports = mongoose.model('User', UserSchema, 'userx');