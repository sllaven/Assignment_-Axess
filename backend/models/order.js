const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    "CustomerID": {
        type: String,
        required: true
    },
    "OrderDate": {
        type: String,
        required:true,
    },
    "ShipAddress": {
        type: String,
        required:true
    },
    "ShipCity": {
        type: String,
        required:true,
    },
})

const Order = mongoose.model('order', orderSchema);

module.exports = Order;