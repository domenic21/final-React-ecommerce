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
            
            <div className='flex justify-center -space-x-px overflow-hidden rounded-md border bg-white shadow-sm'>
            
              {/**clear cart */}
              <div className='cursor-pointer py-4 '>
                <button className=" hover:bg-red-200 bg-red-500 mx-2 inline-block px-4 py-2 text-sm font-medium text-black-700 focus:relative" onClick={clearCart}>Clear Cart</button>
                <Link to='/CheckoutForm'>
                <button className=" hover:bg-red-200 bg-red-500 mx-2 inline-block px-4 py-2 text-sm font-medium text-black-700 focus:relative">Buy Now!..</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    };
export default CheckoutPage