const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required:true},
    price:{ type: Number, required:true},
    sellerId: { type: Number, required:true},
    sellerName: { type: String, required:true}
});

const Product = mongoose.model("product", productSchema)
module.exports = Product
