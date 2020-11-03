const express = require('express');
const File = require('../models/File');
const multer = require('multer');
const path = require("path");

const app = express.Router();
app.use(express.json());
const storage = multer.diskStorage({
    destination: "./uploads/",
    filename: function(req, file, cb){
       cb(null,"IMAGE-" + Date.now() + path.extname(file.originalname));
    }
 });
 
 const upload = multer({
    storage: storage,
    limits:{fileSize: 1000000},
 }).single("myfile");
 const obj =(req,res) => {
    upload(req, res, () => {
       console.log("Request ---", req.body);
       console.log("Request file ---", req.file);//Here you get file.
       const file = new File();
       file.meta_data = req.file;
       file.save().then(()=>{
       res.send({message:"uploaded successfully"})
       })
       /*Now do where ever you want to do*/
    });
 }
  
app.post('/',obj);
  
module.exports = app;

