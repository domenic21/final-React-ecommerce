import React, { useContext } from 'react'
import {CartContext} from '../context/CartContext'
import CartCheckout from '../components/CartCheckout'
import { Link } from 'react-router-dom';
const CheckoutPage = () => {

    const {cartItems, clearCart,} =useContext(CartContext)
    return (
        <div>
          
          <div className='bg-black '><h2 className='text-white font-bold'>Shopping Cart</h2></div>
          <div>
            {cartItems.map((item) => {
              return (
                <div key={item.id}>
                  
                  <CartCheckout item={item} />
                </div>
              );
            })}
          </div>
          <div>
            
            <div className='flex justify-center w-full uppercase text-xl font-semibold'>
            
              {/**clear cart */}
              <div className='cursor-pointer py-4 '>
                <button className="border-t-amber-50  hover:bg-red-500 bg-red-700 mx-2 absolute bottom-4 " onClick={clearCart}>Clear Cart</button>
                <Link to='/CheckoutForm'>
                <button className="border-t-amber-50  hover:bg-red-500 bg-red-700 mx-2 absolute bottom-3 right-3 ">Buy Now!..</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    };
export default CheckoutPage