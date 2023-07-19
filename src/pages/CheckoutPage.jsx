import React, { useContext } from 'react'
import {CartContext} from '../context/CartContext'
import CartCheckout from '../components/CartCheckout'
import { Link } from 'react-router-dom';
const CheckoutPage = () => {

    const {cartItems, clearCart, total} =useContext(CartContext)
    return (
        <div>
          CheckoutPage
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
            <div className='flex justify-center w-full uppercase bg-red-500  text-xl font-semibold'>
              {/*total cart checkout*/}
              <div className=''><span>Total Cart:</span>${total.toFixed(2)} </div>
              {/**clear cart */}
              <div className='cursor-pointer py-4 '>
                <button onClick={clearCart}>Clear Cart</button>
                <Link to='/CheckoutForm'>
                <button>Buy Now!..</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    };
export default CheckoutPage