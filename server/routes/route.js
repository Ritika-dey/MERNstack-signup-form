const { request, response } = require('express');
const express = require('express');
const router = express.Router();
const signupTemplate = require('../models/models');

router.post('/signup' , (req , res) =>{
     const data = new signupTemplate({
         username : req.body.username , 
         email : req.body.email ,
         password : req.body.password
     })
     data.save()
     .then(result => {
         res.json(result) })
     .catch(err => console.log(err))
})

// router.get('/signin' , )
module.exports = router