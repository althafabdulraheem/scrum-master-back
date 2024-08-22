const express=require('express');
const route=express.Router();
const login=require('../controllers/usercontroller');
console.log(login)
route.post('/login',login);

module.exports=route;
