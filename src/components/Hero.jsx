//hero home page // promotions //
import React from "react";
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className=" max-w-[1640px mx-auto p-4]">
      <Link to='/AllProductsPage'>
      <img
        className=" p-4 justify-center mx-auto w-full max-h-[500px] object-contain"
        src="https://static.guitarcenter.com/static/gc/2019/page-collection/cyber-monday-coupon/desktop/gc-md-hf-cyber_monday_coupn-12-01-19-v2.jpg"
        alt="promo"
      />
     {/*<img
        className=" p-4 justify-center mx-auto w-full max-h-[500px] object-contain"
        src="https://coupons.cnet.com/image/eyJrZXkiOiJjbnRcL3VwbG9hZHNcL3Nob3BcL2d1aXRhci1jZW50ZXJcL1NjcmVlbnNob3RfMjAyMy0wNS0xN19hdF8xMV8wMV8zOS5wbmcifQ==?ts=1684314558"
        alt="promo"
  />*/}
      <div className=" grid grid-row-3 gap-2  justify-items-center h-48 ">
      <h1 className="text-[30px] font-bold lg:text-[50px] ">Touring Essentials </h1>
      <h2 className="text-[20px] " >Get the gear you need, when you need it</h2>
      <button className="  bg-red-700 text-white ml-16 hover:bg-red-500 "> Shop Now</button>
      </div>
      {/*section for daily picks display categories at home page*/ }
      </Link>
    </div>
    
  );
};

export default Hero;
