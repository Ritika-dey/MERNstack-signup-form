const { request, response } = require('express');
const express = require('express');
const router = express.Router();
const signupTemplate = require('../models/models');

router.post('/signup' , (req , res) =>{
     const data = new signupTemplate({
         username : request.body.username , 
         email : request.body.email ,
         password : request.body.password
     })
     data.save()
     .then(result => response.json(result))
     .catch(err => console.log(err))
})


module.exports = router