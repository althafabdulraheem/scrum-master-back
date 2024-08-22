const mongoose=require('mongoose')
const DbConnect=()=>{mongoose.connect(process.env.DB).then(()=>{
    console.log('connected to db successfully')
}).catch((error)=>{
    console.log('error= '+error)
})
}
module.exports=DbConnect;