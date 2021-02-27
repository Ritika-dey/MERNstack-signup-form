const express = require("express");
const app = express(); 
const port = 80;
const mongoose = require('mongoose');
const routUrls = require('./routes/route');
const cors = require('cors');
 
mongoose.connect("mongodb://localhost:27017/tutorial" , { useNewUrlParser: true , useUnifiedTopology: true})
.then( () => console.log("connection sucessful"))
.catch(err => console.log(err));

//body parser activation
app.use(express.json())
app.use(cors())

app.use('/app' , routUrls)
app.listen(port , () => console.log(`Listening to port ${port}`));