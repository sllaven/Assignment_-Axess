const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    "ProductName": {
        type: String,
        required: true
    },
    "Discontinued": {
        type: Number,
        required:true,
    },
    "UnitPrice": {
        type: Number,
        required:true
    },
    "QuantityPerUnit": {
        type: String,
        required:true,
    },
    "imgUrl": {
        type: String,
        required: true
    }
})

const Product = mongoose.model('product', productSchema);

module.exports = Product;