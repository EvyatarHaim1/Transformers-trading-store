const router = require('express').Router();
const Request = require('request');
const Product = require('../models/product.model');
const mongoose = require('mongoose')
 

router.route('/getRobotsApi').get(async(req, res) => {
  await Request(`http://thetestingworldapi.com/api/studentsDetails`, (err, response)=>{
    const data = JSON.parse(response.body)
    console.log(data)
  })
})
// router.route('/').post((req,res)=>{
//    product
//      .save()
//      .then(result =>{
//        console.log(result)
//     })
//     .catch(err=> {console.log(err)
//    })
//     res.status(201).json({
//         massage: 'Handeling Get requests to products',
//         createdProduct : product
//     })
//     res.send('hola')
// })


module.exports = router