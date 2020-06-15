const router = require('express').Router();
const Request = require('request');
const user = require('../models/user.model');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;


router.route('/getUsersFromApi').get(async(req, res) => {
   await Request(`https://randomuser.me/api/?results=600`,(err, response) => {
       const data = JSON.parse(response.body)
    let users = Object.values(data.results).map(e=>(
        { 
            firstname: e.name.first,
            lastname: e.name.last,
            email: e.email,
            age: e.dob.age,
            city: e.location.city,
            phone: e.cell,
            password: e.login.password,
            country: e.location.country,
            acquired:[],
            products:[],
            picture: e.picture.large,
            credit: 500
        }
        ))
        users.forEach(e=> {
        user1 = new user(e)
        user1.save()
       .then(result =>{
        console.log(result)
     })
     .catch(err=> {console.log(err)
    })
})
     res.send('The users received from the Api and saved in the MongoDB atlas DB')
    });
});



router.route('/getUsersFromDB').get(async(req, res) => {
    user.find({}, function (err, people) {
        res.send(people)
    })  
})



 router.route('/loginUser').post(async(req, res) => {
     console.log(req.body)
     const Email = req.body.auth.loginUser.email.toLowerCase()
     const Password = req.body.auth.loginUser.password.toLowerCase()
     if(!Password){
         res.send({
             success:false,
             message:'Error: Missing Password'
         });
     }
    if(!Email){
        res.send({
            success:false,
            message:'Error: Missing email'
        });
    }
    user.findOne({ email: Email , password: Password }, function (err, foundUser) {
        if(err){
            res.end('Error: Server error');
        }
            else{
            res.send(foundUser)
        }
    });
})



router.route('/register').post(async(req, res) => {
    console.log(req.body)
    const newUser = new user({
        firstname: req.body.auth.newuser.firstname.charAt(0).toUpperCase() + req.body.auth.newuser.firstname.slice(1).toLowerCase(),
        lastname: req.body.auth.newuser.lastname.charAt(0).toUpperCase() + req.body.auth.newuser.lastname.slice(1).toLowerCase(),
        email: req.body.auth.newuser.email.toLowerCase(),
        age: req.body.auth.newuser.age,
        city:req.body.auth.newuser.city.charAt(0).toUpperCase() + req.body.auth.newuser.city.slice(1).toLowerCase(),
        phone:req.body.auth.newuser.phone,
        password: req.body.auth.newuser.password.toLowerCase(),
        country: req.body.auth.newuser.country.charAt(0).toUpperCase() + req.body.auth.newuser.country.slice(1).toLowerCase(),
        acquired:"",
        products:"",
        picture: req.body.auth.newuser.picture,
        credit: req.body.auth.newuser.credit
    });
    console.log(newUser)
    await newUser.save()
    .then(result =>{
        console.log(result)
     })
     .catch(err=> {console.log(err)
    })
     res.send('New user created and saved properly in DB')
})



 

module.exports = router