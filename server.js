const express= require('express');
const dotenv=require('dotenv')
const colors=require('colors')
const morgan=require('morgan')
const cors=require('cors');
const { connect } = require('mongoose');
const connectDB = require('./config/db');


dotenv.config()

//mongodb connection

connectDB();
//rest object
const app=express();
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/v1/inventory", require("./routes/inventoryRoutes"));
const PORT=process.env.PORT || 8085;

app.listen(PORT,(req,res)=>
{
    console.log(`node server Running In ${process.env.DEV_MODE} on port ${process.env.PORT}!`)
})
