const router = require('express').Router();
const Request = require('request');
const Product = require('../models/product.model');
const mongoose = require('mongoose')
 

router.route('/saveRobotsInDB').post(async(req, res) => {
 let products = Object.values(data.results).map(e=>(
        { 
            name: e.name,
            price: e.name.price,
            sellerId: e.sellerId,
            sellerName: e.sellerName,
            quantityLeft: e.quantityLeft,
            image: e.image,
            sold: {
              boughtBy : e.sold.boughtBy,
              quantity: e.sold.quantity
            }
            
        }
        ))
        products.forEach(e=> {
        Products = new Product(e)
        Products.save()
       .then(result =>{
        console.log(result)
     })
     .catch(err=> {console.log(err)
    })
})
     res.send('The products saved in the MongoDB atlas DB')
    });
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