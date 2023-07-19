
import CardItems from "./CardItems";
import {Link} from "react-router-dom"
//Import context to display Products
import { useContext} from "react";
import { ProductsContext } from "../context/ProductsContext";


const ItemListContainer = () => {

  //add product context 
  const {products} = useContext(ProductsContext);
    
// Add error handling
//if (!products || products.length === 0) {
// console.log("error data")// You can display a loading message or spinner here.
//};

  


// for the return display cards

  return (
    <div className="grid grid-cols-2 lg:grid   xs:grid-cols-1 lg:justify-items-center  rounded-lg lg:grid-cols-4 gap-6 pt-16 border shadow-lg ">
      {products.map((data)=>{
         return (
          <div key={data.id}>
            
              
            <CardItems data={data}  />
           
          </div>
        );
       
      })}
      
     





    </div>
  );
};

export default ItemListContainer;