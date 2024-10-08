//initialising server and connecting to database
const express = require('express');
const cors = require('cors');
const {connect} = require('mongoose');
require('dotenv').config()



// importing routes and error middleware

const userRoutes=require('./routes/userRoutes')

const { notFound,errorHandler } = require('./middleware/errorMiddleware');


///middlewares and intializations
const app=express();
app.use(express.json({extended:true}))
app.use(express.urlencoded({extended:true}))
app.use(cors())




//routes
app.use('/api/users',userRoutes)




//error handling
app.use(notFound)
app.use(errorHandler)
//database connecting
connect(process.env.MONGO_URI).then(app.listen(process.env.PORT||4000,()=> console.log(`server is live on ${process.env.PORT}`))).catch(error=>{console.log(error)})
