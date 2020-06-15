const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required:true},
    price:{ type: Number, required:true},
    sellerId: { type: Number, required:true},
    sellerName: { type: String, required:true},
    quantityLeft: { type: Number, required:true},
    image: { type: String, required: true},
    sold: {
            boughtBy : String,
            quantity: Number
        }
   })

const Product = mongoose.model("product", productSchema)
module.exports = Product
