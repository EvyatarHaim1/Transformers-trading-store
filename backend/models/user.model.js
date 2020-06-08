const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Joi = require('@hapi/joi');

const usersSchema = new Schema({
    firstname: { type: String, required: true},
    lastname: { type: String, required: true},
    email: { type: String, required: true, unique: true },
    age: { type: Number, required: true},
    city :  String, 
    phone: { type: String, required: true},
    password: { type: String, required: true},
    country:  String,
    acquired: Array,
    products: Array,
    picture: { type: String, required: true},
    credit: Number,
})

const User = mongoose.model("user", usersSchema)
module.exports = User
