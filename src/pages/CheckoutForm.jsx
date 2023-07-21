
import React, { useState,useContext } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import OrderCheckout from "../components/OrderCheckout";
import {CartContext} from '../context/CartContext'

//
const initialState = {
  name: "",
  lastname: "",
  email:"",
  
  phone:"",
  
  cardNumber:"",
  
  phone:"",
  
  postalCode:"",

};

const CheckoutForm = () => {

  const { clearCart} =useContext(CartContext)
  //logic yo pass data to firebase from the inputs

  const [values, setValues] = useState(initialState);
  const [orderId, setOrderId] = useState(null);

  const handleOnChange = (e) => {
    // Destructuring values
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    //console.log(values); // Log the values when the form is submitted

    //firebase data submit
    const docRef = await addDoc(collection(db, "orders"), {
      values
    });
    //console.log("document written ", docRef.id);
    //display order id
    setOrderId(docRef.id)


    setValues(initialState); // Reset the form fields
    
    
  };

  return (
    <div>
      

      <div className="bg-white h-screen max-w-[1640px mx-auto p-4] py-12 md:py-24 flex justify-center max-w-screen-xl">
        <div className="max-w-full w-full  max-h-full mx-4 lg:mx-8">
          <form className="max-w-full  " onSubmit={onSubmit}>
            <div className="col-span-3">
              <label
                htmlFor="FirstName"
                className="block text-lg font-medium text-gray-700"
              >
                First Name
              </label>

              <input
                onChange={handleOnChange}
                value={values.name}
                type="text"
                name="name"
                className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
              />
            </div>

            <div className="col-span-3">
              <label
                htmlFor="LastName"
                className="block text-lg font-medium text-gray-700"
              >
                Last Name
              </label>

              <input
                onChange={handleOnChange}
                value={values.lastname}
                type="text"
                name="lastname"
                className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
              />
            </div>

            <div className="col-span-6">
              <label
                htmlFor="Email"
                className="block text-lg font-medium text-gray-700"
              >
                Email
              </label>

              <input
               onChange={handleOnChange}
               value={values.email}
                type="email"
                name="email"
                className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
              />
            </div>

            <div className="col-span-6">
              <label
                htmlFor="Phone"
                className="block text-lg font-medium text-gray-700"
              >
                Phone
              </label>

              <input
               onChange={handleOnChange}
               value={values.phone}
                type="tel"
                name="phone"
                className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
              />
            </div>

            <fieldset className="col-span-6">
              <legend className="block text-sm font-medium text-gray-700">
                Card Details
              </legend>

              <div className="mt-1 -space-y-px rounded-md bg-white shadow-sm">
                <div>
                  <label htmlFor="CardNumber" className="sr-only">
                    {" "}
                    Card Number{" "}
                  </label>

                  <input
                   onChange={handleOnChange}
                   value={values.cardNumber}
                    type="text"
                    name="cardNumber"
                    placeholder="Card Number"
                    className="relative mt-1 w-full rounded-t-md border-gray-200 focus:z-10 sm:text-sm"
                  />
                </div>

                <div className="flex">
                  <div className="flex-1">
                    <label htmlFor="CardExpiry" className="sr-only">
                      {" "}
                      Card Expiry{" "}
                    </label>

                    <input
                     onChange={handleOnChange}
                     value={values.cardExpiry}
                      type="text"
                      name="cardExpiry"
                      placeholder="Expiry Date"
                      className="relative w-full rounded-es-md border-gray-200 focus:z-10 sm:text-sm"
                    />
                  </div>

                  <div className="-ms-px flex-1">
                    <label htmlFor="CardCVC" className="sr-only">
                      {" "}
                      Card CVC{" "}
                    </label>

                    <input
                     onChange={handleOnChange}
                     value={values.cardCvc}
                      type="text"
                      name="cardCvc"
                      placeholder="CVC"
                      className="relative w-full rounded-ee-md border-gray-200 focus:z-10 sm:text-sm"
                    />
                  </div>
                </div>
              </div>
            </fieldset>

            <fieldset className="col-span-6">
              <legend className="block text-sm font-medium text-gray-700">
                Billing Address
              </legend>

              <div className="mt-1 -space-y-px rounded-md bg-white shadow-sm">
                <div>
                  <label htmlFor="Country" className="sr-only">
                    Country
                  </label>

                  <select
                    name="Country"
                    className="relative w-full rounded-t-md border-gray-200 focus:z-10 sm:text-sm"
                  >
                    <option>US</option>
                    <option>MX</option>
                    <option>ARG</option>\
                  </select>
                </div>

                <div>
                  <label className="sr-only" htmlFor="PostalCode">
                    {" "}
                    ZIP/Post Code{" "}
                  </label>

                  <input
                   onChange={handleOnChange}
                   value={values.postalCode}
                    type="text"
                    name="postalCode"
                    placeholder="ZIP/Post Code"
                    className="relative w-full  mb-6 rounded-b-md border-gray-200 focus:z-10 sm:text-sm"
                  />
                </div>
              </div>
            </fieldset>

            <div className="col-span-6">
              <button onClick={clearCart} className="block w-full rounded-md bg-black p-2.5 text-sm text-white transition hover:bg-slate-600">
                Pay Now
              </button>
            </div>
          </form>
          {orderId ? <OrderCheckout orderId={orderId} />:null }
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
