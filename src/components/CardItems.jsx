import { CartContext } from "../context/CartContext";
import React,{ useContext } from "react";

import { Link } from "react-router-dom";


const CardItems = ({ data }) => {
  const {addToCart} = useContext(CartContext)
  const handleAddToCart = () => {
    addToCart(data);
   
    
  };

  const {id, title, name, img, price, categoria, category, type} = data;
  return (
    <div className="mb-4 relative overflow-hidden group transition   ">
      <div className="border border-[#e4e4e4] h-[300px] md:border-hidden">
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[200px] mx-auto flex justify-center items-center">
           <Link to={`/DetailPage/${id}`}>
            <img
              className="max-h-[160px] group-hover:scale-110 transition duration-300"
              src={img}
              alt=""
            />
            </Link>
            
          </div>
        </div>
        <div className="absolute top-0 right-0 p-2 ">
          <button onClick={handleAddToCart} className="bg-red-600 text-white hidden hover:bg-red-500">
            Add to Cart
          </button>
        </div>
      </div>
      <div>
        <div>
          {categoria ? category : type}

          <h2 className="font-semibold mb-1">
            {name} {title}
          </h2>
          <div className=" p-2 relative font-semibold ">${price}</div>
          <button onClick={handleAddToCart} className="  bg-red-600 text-white    hover:bg-red-500">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardItems;
