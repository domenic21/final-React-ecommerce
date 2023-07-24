import React,{useContext} from "react";

import { BsFillTrashFill } from "react-icons/bs";
import { CartContext } from "../context/CartContext";
const CartCheckout = ({ item }) => {
  const { id, name, img, price, amount, title } = item;
  const { removeFromCart, increaseAmount, decreaseAmount , } = useContext(CartContext);

  const handleRemoveFromCart = () => {
    removeFromCart(id);
  };
  const handleIncreaseFromCart = () => {
    increaseAmount(id);

  };
  const handledecreaseFromCart = () => {
    decreaseAmount(id);

  };
  return (
    <section>
      <div className="mx-auto max-w-screen-xl border-b border-gray-200 flex justify-center px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid grid-auto gap-5 ">
          <img className="max-w-[200px]" src={img} alt="" />
        </div>
        <div className="text-lg  flex justify-end uppercase font-medium max-w-[240px] text-black hover:underline">
          {name}
          {title}
        </div>
        <div className="text-xl cursor-pointer">
          <BsFillTrashFill onClick={handleRemoveFromCart} className="hover:text-red-700 transition" />
        </div>
        <div>
          <p className="text-2xl font-medium tracking-tight text-gray-900  ">
            ${price}
          </p>
          <div>
            <div className="flex justify-evenly border">
              <button onClick={handledecreaseFromCart}>-</button>
             <p className=" font-bold">{amount}</p>
            <button onClick={handleIncreaseFromCart}>+</button>
            </div>
            <div className="flex-1 flex justify-end items-center font-medium">{`Total Items:$ ${parseFloat(price * amount).toFixed(2)}`}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartCheckout;
