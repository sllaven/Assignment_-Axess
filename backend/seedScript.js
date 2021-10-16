require("dotenv").config()

const productsData = require("./data/products");
const ordersData = require("./data/orders");
const suppliersData = require("./data/suppliers.js");

const connectDB = require("./config/db");

const Product = require("./models/product.js");
const Order = require("./models/order.js");
const Supplier = require("./models/supplier.js");
 

connectDB();


const importData = async () => {
    try {

        await Product.deleteMany({});
        await Product.insertMany(productsData);

        await Order.deleteMany({});
        await Order.insertMany(ordersData);

        await Supplier.deleteMany({});
        await Supplier.insertMany(suppliersData);


        console.log("Data import sucess");

        process.exit(0);
    } catch (error) {
        console.error("Error in importing data");

        process.exit(1);
    }
}

importData();