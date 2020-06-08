const express = require('express');
const fileUpload = require('express-fileupload')
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const dotenv = require("dotenv");
const path = require('path')
const port = process.env.PORT || 4200
const api = require('./routes/users');
const mongoose = require('mongoose');
const Schema = mongoose.Schema
require('dotenv').config();

const googleApiKey = 'AIzaSyATM-75tdth23pxfUNsJiJJZklHUHAHZIM';
const ClientID = `14300606897-59eqrltd3u5c52qdh035akhkb4c8umi9.apps.googleusercontent.com`;
const client_secret = `dlDj3qpLnuicwFDhuh67rE3G`;


app.use(bodyParser.json({limit: '10mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}));
app.use(cors());
app.use(fileUpload());

// app.post('/upload', (req,res)=>{
//     if(req.files=== null){
//         return res.status(400).json({msg: 'No file uploaded'})
//     }
// })
// const file = req.files.file

// file.mv(`${__dirname}/client/public/uploads/${file.name}`, err=>{
//     if(err){
//         console.log(err)
//         return res.status(500).send(err);
//     }
//     res.json({fileName: file.name, filePath: `/uploads/${file.name}`})
// })

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
    next()
})
  
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true , useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log('MongoDB database conecction established successfully');
})

const productsRouter = require('./routes/products');
const usersRouter = require('./routes/users');

// app.use('/products', productsRouter);
app.use('/users', usersRouter);
// app.use('/', routes);

app.listen(port, function () {
    console.log(`Running on port ${port}`)
})
