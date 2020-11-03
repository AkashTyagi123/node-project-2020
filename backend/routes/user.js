const express = require('express');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const cryptoRandomString = require('crypto-random-string');
const mailer = require('../Mailer/Mailer');
const jwt = require('jsonwebtoken');
const saltRounds = 10;
const app = express.Router();
app.use(express.json());

// @POST /user/new
// Access: public
// Description: This route is designed to register a new user in the database
app.post('/new',(req,res)=>{
    const {name,email,password} = {...req.body};
    User.findOne({email})
    .then(user=>{
        if(user){
            return res.json({"msg":`A user with the email already exist.Try someting else`,"isSuccess":false})
        }
        else{
            bcrypt.genSalt(saltRounds, function(err, salt) {
                bcrypt.hash(password, salt, function(err, hash) {
                    // Store hash in your password DB.
                    
                    // We need a metod to send mail so that user can confirm theri mail
                     const newUser = new User({name,email,password:hash});
                     //to set the expiration of activity to 2 hours
                     newUser.activeExpires = Date.now() + 2 * 3600 * 1000;
                     newUser.activeToken = Date.now()+cryptoRandomString({length: 15, type: 'url-safe'});
                     const link = 'http://localhost:5000/user/active/'
                                   + newUser.activeToken;
                          
                     mailer({
                        to: req.body.email,
                        subject: 'Action Required-Activate your account now',
                        html: 'Welcome to the family of Kidcoder. We are glad to have you on board with us.Please click <a href="' + link + '"> here </a> to activate your account.'
                    });
                     newUser.save()
                     .then(user=>res.json({"msg":`New user created for ${user.email}.Please check your mail to complete registartion`,"isSuccess":true}))
                     .catch(err=>{
                         if(err.code === 11000)
                            return  res.json({"msg":`A user with the email already exist.Try someting else`,"isSuccess":false});
                        return res.json({"msg":"Some error occured","isSuccess":false});
                     });
                });
            });
        }
    })
    .catch(err=>{
        return res.json({"msg":"Some error occured","isSuccess":false});
    });
    
   
});

// @POST /user/login
// Access:-Public
// Descriptuon:- This post is designed to handle the get request to login a User
app.post('/login',(req,res)=>{
    const {email,password} = {...req.body};
    
    User.findOne({email})
    .then(user=>{
        if(!user)
           return res.json({"msg":"Invalid credentials...Try Again","isSuccess":false,id:null});
        if(!user.isActive){
            return res.json({"msg":"Looks Like the account is not active yet. Please activate your account by following instruction given in mail","isSuccess":false,id:null});
        }
       
        bcrypt.compare(password,user.password)
        .then(isMatch=>{
            //Here in this route we need to check whether the user has activated his/her account
            //the corresponding required property in db is user.isActive
           
            if(isMatch){
                // A JWT token is assigned here for the user
                jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:3600},(err,token)=>{
                    if(err)
                        console.log("Error is"+ err);
                    
                    return res.json({"msg":"Login Success","redirect":"/dashboard",token,"isSuccess":true,id:user._id});
                })
                

            }
            else{
            return res.json({"msg":"Invalid credentials...Try Again","isSuccess":false,id:null});
            }
        })
        .catch(err=>res.json({"msg":err,"isSuccess":false}));
    })
    .catch(err=>res.json({"msg":err,"isSuccess":false}));


});
// @GET /user/active/:activeToken
// access- public
// DESC: This route is made to handle the activation of user when he/she clicks on the activation link
app.get('/active/:activeToken',(req,res)=>{
    const activeToken = req.params.activeToken;
    User.findOne({activeToken})
    .then(user=>{
        if(!user)
            return res.json({"msg":"Invalid token identified. This will be reported to the administartor"});

        if(new Date(user.activeExpires).getTime() < Date.now){
            return res.json({"msg":"Token no longer valid. Try to generate a new one."});
        }

        user.isActive = true;
        user.save()
        .then(u=>res.json({"msg":`Account active for the email ${u.email}. You can login now.`}))
        .catch(err=>res.json({"msg":err}));

    }).catch(err=>res.json({"msg":err}));
});

// @POST /user/reset
// acces public
// Desc:- This route is use to handle a post request from the forgot password link
// app.post('/reset',(req,res)=>{
//     const {email}={...req.body};
//     User.findOne({email})
//     .then(user=>{
//         if(!user)
//             return res.json({"msg":"This user does not exist"});

//         const token = user.activeToken;
//         //This link is not working when I am sending it in mail. Will try to work on it
//         const link =  'http://localhost:5000/user/reset/'+ token;
//         resetMailer({
//             to: email,
//             subject: 'Action Required-Activate your account now',
//             html: 'We heard you lost your password but dont worry.Please click <a href="' + link + '"> here </a> to reset your password.'
//         });

//         res.json({"msg":"Check your mail and follow the instruction to reset your password"});

//     })
//     .catch(err=>res.send({"msg":err}));

// });



// app.get('/reset/:activeToken',(req,res)=>{
//     // Here I need to make enter a password in a form and store it in my DB
// });


module.exports = app;

