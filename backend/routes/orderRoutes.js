const express = require("express");
const router = express.Router();
const { getAllOrders, getOrderById } = require("../controller/orderController");

router.get("/", getAllOrders);

router.get("/:id", getOrderById);

module.exports = router;
