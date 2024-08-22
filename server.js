require('dotenv').config()
const express=require('express');
const srumRoutes=require('./src/routes/scrumroutes.js');
const app=express();
const cors = require('cors')
const Db=require('./src/helpers/db.js');
app.use(express.json())
app.use(cors())
// cors is used to resolve cross orgin issue

// db
 Db()
// db

// routes
app.use('/api/scrum/',srumRoutes)

app.use('/',(req,res)=>{
    res.send('not found')
})

// routes ends

const port=process.env.PORT||8000;

 app.listen(port,(error)=>{
    if(!error)
    {
        console.log('successfully listened to port'+port)
    }
    else{
        console.log(error)
    }
 })