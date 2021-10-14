const Order = require('../models/order');

const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find({});

        res.json(orders);
    } catch (error) {
        console.error(error);
        res.status(500).json({massage: "Error on Server"})
    }
}

const getOrderById = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        res.json(order);
    } catch (error) {
        console.error(error);
        res.status(500).json({massage: "Error on Server"})
    }
}

module.exports = {
    getAllOrders,
    getOrderById
}