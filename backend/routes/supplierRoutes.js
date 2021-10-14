const express = require("express");
const router = express.Router();
const {
  getAllSuppliers,
  getSupplierById,
} = require("../controller/supplierController");

router.get("/", getAllSuppliers);

router.get("/:id", getSupplierById);

module.exports = router;
