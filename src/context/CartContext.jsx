import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  //item amount state
  const [itemAmount, setItemAmount] = useState(0);
  const [total, setTotal] = useState(0);

  
//Update item amount cart


useEffect(()=>{
  const total = cartItems.reduce((accumulator, currentItem)=>{
    return accumulator + currentItem.price * currentItem.amount
  },0)
  setTotal(total);
  
 
});

useEffect (()=>{
  const amount = cartItems.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.amount;
  }, 0);
  setItemAmount(amount);
}, [cartItems]);





//// add to cart items 1 by 1
  const addToCart = (product) => {
    const existingCartItem = cartItems.find((item) => item.id === product.id);

    if (existingCartItem) {
      setCartItems((prevCartItems) =>
        prevCartItems.map((item) =>
          item.id === product.id ? { ...item, amount: item.amount + 1 } : item
        )
      );
    } else {
      setCartItems((prevCartItems) => [...prevCartItems, { ...product, amount: 1 }]);
    }
  };
  //erase from cart trash 1 by 1
  const removeFromCart = (productId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== productId)
    );
  };

  //remove all cart erase all items //clear button categorypage
  const clearCart = ()=>{
    //use state pass empty array
    setCartItems([]);
  }
  //increase items add checkoutPage
  const increaseAmount = (productId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.id === productId ? { ...item, amount: item.amount + 1 } : item
      )
    );
  };

    //decrease items add checkoutPage
    const decreaseAmount = (productId) => {
      setCartItems((prevCartItems) =>
        prevCartItems.map((item) =>
          item.id === productId ? { ...item, amount: item.amount - 1 } : item
        ).filter((item) => item.amount > 0)
      );
    };

  //console.log(cartItems);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart,
    increaseAmount, decreaseAmount,itemAmount , total}}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
