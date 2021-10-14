const mongoose = require("mongoose");

const supplierSchema = new mongoose.Schema({
    "CompanyName": {
        type: String,
        required: true
    },
    "ContactName": {
        type: String,
        required:true,
    },
    "Address": {
        type: String,
        required:true
    },
    "Country": {
        type: String,
        required:true,
    },
})

const Supplier = mongoose.model('supplier', supplierSchema);

module.exports = Supplier;