require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT|| 3002;
const uri = process.env.MONGO_URL;

const app = express();
mongoose.connect(uri);
app.listen(3002,()=>{
    console.log("App started!");
});
