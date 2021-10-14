const Supplier = require('../models/supplier');

const getAllSuppliers = async (req, res) => {
    try {
        const suppliers = await Supplier.find({});

        res.json(suppliers);
    } catch (error) {
        console.error(error);
        res.status(500).json({massage: "Error on Server"})
    }
}

const getSupplierById = async (req, res) => {
    try {
        const supplier = await Supplier.findById(req.params.id);
        res.json(supplier);
    } catch (error) {
        console.error(error);
        res.status(500).json({massage: "Error on Server"})
    }
}

module.exports = {
    getAllSuppliers,
    getSupplierById
}