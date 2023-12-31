import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import CartProvider from "./context/CartContext";
import ProductsProvider from "./context/ProductsContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProductsProvider>
    
      <CartProvider>
        <App />
      </CartProvider>
    
    </ProductsProvider>
  </React.StrictMode>
);
