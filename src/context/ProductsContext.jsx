import React, { createContext, useState, useEffect } from "react";
// firebase to iterate thru the id of each product
import { db } from "../firebase/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

//create context
//make the call to the database to get each item
//add the export
//add the provider then add to the app.jsx

export const ProductsContext = createContext();

 const ProductsProvider = ({ children }) => {
  //add the call to db

  const productsCollectionRef = collection(db, "products");
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const data = await getDocs(productsCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setProducts(filteredData);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getProducts();
    //console.log(products); // check retrieval of products
  }, []);

  return(
  <ProductsContext.Provider value={{ products }}>
 {children}
  </ProductsContext.Provider>
  )};


export default ProductsProvider;
