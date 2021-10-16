import { Route, BrowserRouter } from "react-router-dom";
import StartPage from "./components/startPage/StartPage";
import Products from "./components/products/Products";
import Header from "./components/header/Header";
import Orders from "./components/orders/orders";
import Footer from "./components/footer/Footer";
import Checkout from "./components/checkout/Checkout";
import React, {useState, useEffect} from "react";
import axios from "axios";
import "./App.css"
import AddressForm from "./components/checkout/AddressForm";
import Suppliers from "./components/suppliers/Suppliers"

function App () {

  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [suppliers, setSuppliers] = useState([]);
  const [cartItem, setCartItem] = useState([]);

 console.log(products);
  const onAdd = (product) => { 
    const exist = cartItem.find(x => x._id === product._id);
    if(exist) {
      setCartItem(cartItem.map(x => x._id === product._id ? {...exist, qty: exist.qty + 1} : x))
  } else {
    setCartItem([...cartItem, {...product,qty:1}])
  }
};

const removeItem = (product) => {
  const exist = cartItem.find(x => x._id === product._id);
  if(exist.qty === 1) {
    setCartItem(cartItem.filter(x => x._id !== product._id))
  }else {
    setCartItem(cartItem.map(x => x._id === product._id ? {...exist, qty: exist.qty - 1} : x))
  }
}


const removeAllItems = () => {
    setCartItem([])
}

const cartNum = cartItem.length;

const addNewOrderToState = (order) => {
  setOrders([order,...orders])
}
  
  useEffect(() => {
    getData();

  }, []);


  const getData = async () => {
    try {
      const resp = await axios.get("http://localhost:5000/api/products");
      const data = resp.data;
      setProducts( data );

      const resp2 = await axios.get("http://localhost:5000/api/orders");
      const data2 = resp2.data;
      setOrders( data2 );

      const resp3 = await axios.get("http://localhost:5000/api/suppliers");
      const data3 = resp3.data;
      setSuppliers( data3 );
    } catch (err) {
      console.log("Error reciving products");
    }
  };

    return (
      <>
        <div className="App">
          {/* Navbar */}
          <BrowserRouter>
            <Header cartNum={cartNum}/>
            <Route path="/" exact>
              <StartPage />
            </Route>
            <Route path="/products" exact>
              <Products
                Products={products}
                onAddItem={onAdd}
              />
            </Route>
            <Route path="/orders" exact>
              <Orders orders={orders}  />
            </Route>
            <Route path="/shop" exact>
              <Checkout cartItem={cartItem} onAdd={onAdd} removeItem={removeItem} removeAllItems={removeAllItems}/>
            </Route>
            <Route path="/address" exact>
              <AddressForm addNewOrderToState={addNewOrderToState}/>
            </Route>
            <Route path="/suppliers" exact>
              <Suppliers suppliers={suppliers} />
            </Route>
            <Footer />
          </BrowserRouter>

          {/* Product that we offer */}
          {/* About restoran */}
          {/* Footer and @copyright */}

          {/* Page of products */}
          {/* Page of suppliers */}
          {/* Page of orders */}
        </div>
      </>
    );
}

export default App;