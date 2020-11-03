const express = require('express');

const mongoose = require('mongoose');
require('dotenv').config()
const app = express();
const port = process.env.PORT;
const db_uri = process.env.ATLAS_URI;
const userRouter = require('./routes/user');
const uploadRouter = require('./routes/upload');
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use('/user',userRouter);
app.use('/upload',uploadRouter);
mongoose.connect(db_uri,{useCreateIndex:true,useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    console.log("MongoDB Connection detected and connected");
})
.catch(err=>console.log(err));
app.listen(port,()=>{
  console.log(`App started on ${port}`);
});