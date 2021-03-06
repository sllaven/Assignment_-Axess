require("dotenv").config();

const express = require("express");

const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");
const supplierRoutes = require("./routes/supplierRoutes");

const connectDB = require("./config/db");
const cors = require('cors');
const { Mongoose } = require("mongoose");

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

// Heroku code
if (process.env.NODE_ENV ==='production') {
  
  app.use(express.static(__dirname + '../frontend/build'));

  app.get('*', (req,res)=> {
    res.sendFile(path.join(__dirname,  '../frontend/build/index.html'))
  })
}else {
  app.get("/", (req,res)=> {
    res.send("Api running")
  }) 
}
// Heroku code end


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));