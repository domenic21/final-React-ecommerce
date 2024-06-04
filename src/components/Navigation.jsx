import React, {useState, useContext} from 'react';
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag } from 'react-icons/ai';
import {  BsSoundwave ,BsSpeakerFill } from 'react-icons/bs';
import {TbTruckDelivery} from 'react-icons/tb'
import {FaUserFriends, FaWallet,FaGuitar,FaDrumSteelpan} from 'react-icons/fa'
import {GiGuitar} from 'react-icons/gi'
import {MdFavorite, MdHelp} from 'react-icons/md'
import CartWidget from './CartWidget';
import { CartContext } from '../context/CartContext';

import { Link } from 'react-router-dom';
const Navbar = () => {
  
const [nav, setNav] = useState(false)
const { itemAmount} =useContext(CartContext)

  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
      {/* Left side */}
      <div className='flex items-center'>
        <div onClick={()=> setNav(!nav)} className='cursor-pointer'>
          <AiOutlineMenu size={30} />
        </div>
        <Link to='/'>
        <h1 className='text-xl sm:text-3xl lg:text-4xl px-2'>
          Dom <span className='font-bold'>Guitar Center</span>
        </h1>
        </Link>
    
      </div>

      {/* Search Input */}
      {/*add functionality to the search bar importorting function and use effect already created in products context*/}

      <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
        <AiOutlineSearch size={25} />
        <input
          className='bg-transparent p-2 w-full focus:outline-none'
          type='text'
          placeholder='Search..'
   
        />
      </div>
      {/* Cart import */}
      <Link to='/CheckoutPage'>
      <button className='bg-black text-white md:flex items-center py-2 rounded-full'>
         
        <CartWidget size={20} className='mr-2' /> 
        <p className='text-white relative font-bold top-1 right-0'> {itemAmount}</p> 
        
      </button>
      </Link>
  

      {/* Mobile Menu */}
      {/* Overlay */}
      {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}
      

      
      <div className={nav ? ' overflow-hidden grid grid-rows-2 fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : ' overflow-hidden grid grid-rows-2 fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300' }>
        <AiOutlineClose
            onClick={()=> setNav(!nav)}
          size={30}
          className='absolute right-4 top-4 cursor-pointer'
        />
        <div>
        <h2 className='text-2xl p-4'>
          Dom <span className='font-bold'>Guitar Center</span>
        </h2>
        <ul className='flex flex-col p-4 text-gray-800 cursor-pointer '>
            <Link to="/CategoryPage/amps" >   <li className=' py-4 flex text-sm md:text-lg  hover:text-slate-500   truncate'><BsSpeakerFill size={25} className='mr-4' /> Amps & Mics</li> </Link> 
            <Link to="/CategoryPage/guitars">   <li className='text-sm md:text-lg lg:text-xl hover:text-slate-500   truncate py-4 flex'><FaGuitar size={25} className='mr-4' /> Guitars</li></Link> 
            <Link to="/CategoryPage/bass">   <li className='text-sm md:text-lg lg:text-xl hover:text-slate-500   truncate py-4 flex'><GiGuitar size={25} className='mr-4' /> Bass</li></Link> 
            <Link to="/CategoryPage/drums" >    <li className='text-sm md:text-lg lg:text-xl hover:text-slate-500   truncate py-4 flex'><FaDrumSteelpan size={25} className='mr-4' /> Drums</li></Link> 
            <Link  to="/CategoryPage/accessories">    <li className='text-sm md:text-lg lg:text-xl hover:text-slate-500   truncate py-4 flex'><BsSoundwave size={25} className='mr-4' /> Acessories</li></Link> 
          
            </ul>
        </div>
        <nav className=' bg-black mt-16'>
            <ul className='flex flex-col p-4 text-white cursor-pointer '>
                <li className='text-sm md:text-lg lg:text-xl  truncate py-4 flex'><TbTruckDelivery size={25} className='mr-4' /> Orders</li>
                <li className='text-sm md:text-lg lg:text-xl  truncate py-4 flex'><MdFavorite size={25} className='mr-4' /> Favorites</li>
                <li className='text-sm md:text-lg lg:text-xl  truncate py-4 flex'><FaWallet size={25} className='mr-4' /> Wallet</li>
                <li className='text-sm md:text-lg lg:text-xl  truncate py-4 flex'><MdHelp size={25} className='mr-4' /> Help</li>
                <li className='text-sm md:text-lg lg:text-xl  truncate py-4 flex'><AiFillTag size={25} className='mr-4' /> Promotions</li>
              
            </ul>
        </nav>
        
      </div>
      
    </div>
  );
};

export default Navbar; 