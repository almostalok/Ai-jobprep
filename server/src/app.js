const cookieParser = require('cookie-parser');
const express=require('express');
require('dotenv').config();
const connectDB=require('./config/db');
const authRoutes=require('./routes/authRoutes')

connectDB();

const app=express();
app.use(express.json());
app.use(cookieParser());


app.get('/',(req,res)=>{
    res.send(`server is runn    ing`);
});

app.use('/api/auth',authRoutes);

module.exports=app

