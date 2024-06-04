import React from "react";
import { Link } from 'react-router-dom';

const HomeCards = () => {
  return (
    <div
      className="max-w-[1640px]  mx-auto p-4 py-12 grid md:grid-cols-3 gap-6 
    "
    >
      {/**Cards for categories link to inventary */}
      <div className="rounded-2xl  relative ">
        <div className=" absolute w-full h-full bg-black/50 text-white rounded-xl">
          <p className="font-bold text-2xl px-2 pt-4">Guitars</p>
          <Link to='/CategoryPage/guitars'><button className="border-t-amber-50  hover:bg-red-500 bg-red-700 mx-2 absolute bottom-4 ">
            Shop Now!
          </button>
          </Link>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] r w-full object-cover rounded-xl"
          src="/src/assets/guitaricon.jpg "
          alt=" logo icon"
        />
      </div>

      {/**Cards for categories link to inventary */}
      <div className="rounded-2xl  relative ">
        <div className=" absolute w-full h-full bg-black/50 text-white rounded-xl">
          <p className="font-bold text-2xl px-2 pt-4">Bass guitars </p>
          <Link to='/CategoryPage/bass'><button className="border-t-amber-50  hover:bg-red-500 bg-red-700 mx-2 absolute bottom-4 ">
            Shop Now!
          </button>
          </Link>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="/src/assets/bass.jpg"
          alt="guitar logo icon"
        />
      </div>

      {/**Cards for categories link to inventary */}
      <div className="rounded-2xl  relative">
        <div className=" absolute w-full h-full bg-black/50 text-white rounded-xl">
          <p className="font-bold text-2xl px-2 pt-4">Amps & Mics</p>
           <Link to='/CategoryPage/amps'><button className="border-t-amber-50  hover:bg-red-500 bg-red-700 mx-2 absolute bottom-4 ">
            Shop Now!
          </button>
          </Link>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://firebasestorage.googleapis.com/v0/b/react-final-ecommerce.appspot.com/o/fender%20amp%20ac.PNG?alt=media&token=ae5b48e7-b3e2-4d0d-bce7-bcee8c9ebfba"
          alt=" logo icon"
        />
      </div>

      {/**Cards for categories link to inventary */}
      <div className="rounded-2xl  relative">
        <div className=" absolute w-full h-full bg-black/50 text-white rounded-xl">
          <p className="font-bold text-2xl px-2 pt-4">Drums</p>
          <Link to='/CategoryPage/drums'><button className="border-t-amber-50  hover:bg-red-500 bg-red-700 mx-2 absolute bottom-4 ">
            Shop Now!
          </button>
          </Link>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="/src/assets/drums.jpg"
          alt="logo icon"
        />
      </div>

      {/**Cards for categories link to inventary */}
      <div className="rounded-2xl  relative">
        <div className=" absolute w-full h-full bg-black/50 text-white rounded-xl">
          <p className="font-bold text-2xl px-2 pt-4">Acessories</p>
          <Link to='/ErorrPage'><button className="border-t-amber-50  hover:bg-red-500  bg-red-700 mx-2 absolute bottom-4 ">
            Shop Now!
          </button>
          </Link>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="/src/assets/acces.jpg"
          alt="logo icon"
        />
      </div>

      {/**Cards for categories link to inventary */}
      <div className="rounded-2xl  relative">
        <div className=" absolute w-full h-full bg-black/50 text-white rounded-xl">
          <p className="font-bold text-2xl px-2 pt-4">Clearance</p>
          <button className="border-t-amber-50 bg-red-700 hover:bg-red-500 mx-2 absolute bottom-4 ">
            Shop Now!
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="/src/assets/sale.jpg "
          alt=" logo icon"
        />
      </div>
    </div>
  );
};

export default HomeCards;
