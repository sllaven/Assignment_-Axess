require("dotenv").config();

const express = require("express");

const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");
const supplierRoutes = require("./routes/supplierRoutes");

const connectDB = require("./config/db");
const cors = require('cors');

connectDB();

const app = express();

app.use(express.json());
app.use(cors({
    origin: '*'
}));

app.get("/", (req, res) => {
  res.json({ message: "API running..." });
});

app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/suppliers", supplierRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));