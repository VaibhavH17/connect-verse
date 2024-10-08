const HttpError = require("../models/errorModel")
const User=require('../models/userModel')
const bcrypt =require('bcryptjs')
const jwt=require("jsonwebtoken")


//unprotected
const registerUser=async(req,res,next)=>{
    try {
        const {email,password,confirmPassword}=req.body;
        if( !email ||!password || !confirmPassword)
        {
            return next(new HttpError("Fill in all the fields.",422))
        }
        const newEmail=email.toLowerCase()
        const emailExists=await User.findOne({email:newEmail})
        if(emailExists)
        {
            return next(new HttpError("Email already exists.",422))
        }
        if((password.trim()).length<8) return next(new HttpError("Password should atleast contain 8 characters",422));
        if(password!=confirmPassword)return next(new HttpError("Passwords do not match.",422));
        const salt =await bcrypt.genSalt(10)
        const hashedPass=await bcrypt.hash(password,salt);
        const newUser=await User.create({email:newEmail,password:hashedPass})
        res.status(201).json(`New User ${email} created`)
     
    } catch (error) {
        console.log(error)
        return next(new HttpError("User registration failed.",422))
        
    }
}












//================login user============
//post:api/users/login
//unprotected
const loginUser=async(req,res,next)=>{
   try {
const {email,password}=req.body;
if(!email || !password)
{
    return next(new HttpError("Fill in all fields",422))
}
const newEmail=email.toLowerCase();
const user=await User.findOne({email:newEmail})
if(!user)
{
    return next(new HttpError("Invalid Credentials.",422))
}
const comparePass=await bcrypt.compare(password,user.password)
if(!comparePass)
{
    return next(new HttpError("Invalid credentials",422))
}
const {_id:id}=user;
const token=jwt.sign({id},process.env.JWT_SECRET,{expiresIn:"1d"})
res.status(200).json({token,id})

} catch (error) {
     return next(new HttpError("login failed.Please check your credentials."))
   }
}
module.exports ={
    registerUser,loginUser
}