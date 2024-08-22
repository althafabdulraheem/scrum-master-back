const express=require('express');
const route=express.Router();
const {getAllScrums,createScrum,deleteScrum,updateScrum}=require('../controllers/srumcontroller.js')


// get all tasks
function check(req,res,next){

   if(req.body?.name ==='ram')
   {
      next();
   }
   else{
      console.log(req.body);
      res.send('go away stupid');
   }
}
// all tasks
route.get('/tasks',getAllScrums)

// create task
route.post('/tasks',createScrum)

// delete task

route.delete('/tasks/:id',deleteScrum)

// update task
route.put('/task/:id',updateScrum);
module.exports=route;