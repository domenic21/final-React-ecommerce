import React ,{useContext}from "react";
import { CartContext } from "../../context/CartContext";

const ItemDetails = ({ data }) => {
  const {addToCart} = useContext(CartContext)
  const handleAddToCart = () => {
    addToCart(data);
    
  };
  const { title, name, info, img, price , description} = data;
  return (
    <section className="pt-32 pb-12 lg:py-32 h-screen flex items-center">
      <div className="mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div>
            <img className="max-w-[350px] lg:max-[500px]:" src={img} alt="" />
          </div>
          <div className=" flex-1 text-center lg:text-left">
            <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">
              {name} {title}
            </h1>
            <div className="text-xl text-red-500 font-medium mb-6">
            ${price}
            </div>
            <p className="mb-8 font-light text-sm text-left p-6 md:text-lg">{info} {description}</p>
            <button onClick={handleAddToCart} className="bg-red-700 text-white"> Add to cart</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItemDetails;
