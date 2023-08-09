import React from "react";
import { Link } from "react-router-dom";
import {BiHomeAlt2} from 'react-icons/bi'

const Appbar = () => {
  return (
    <div>
      <div className=" max-w-[1640px mx-auto p-4]">
        <ul className=" text-gray-800 max-w-[1640px] max-sm:hidden  cursor-pointer  mx-auto flex justify-around items-center p-4">
        <Link className="text-xl py-4 flex" to="/">
            {" "}
            <p className="text-[20px] "><BiHomeAlt2/> </p>
          </Link>
          <Link className="  hover:text-slate-500  text-xl py-4 flex " to='/AllProductsPage'>
            {" "}
            Discover
          </Link>
          <Link className="  hover:text-slate-500 text-xl py-4 flex " to="/CategoryPage/amps">
            {" "}
            Amps & Mics
          </Link>
          <Link className=" hover:text-slate-500  text-xl py-4 flex" to="/CategoryPage/guitars">
            {" "}
            Guitars
          </Link>
          <Link className=" hover:text-slate-500  text-xl py-4 flex" to="/CategoryPage/bass">
            {" "}
            Bass
          </Link>
          <Link className=" hover:text-slate-500  text-xl py-4 flex" to="/CategoryPage/drums">
            {" "}
            Drums
          </Link>
    
        </ul>

      </div>

    </div>
  );
};

export default Appbar;
