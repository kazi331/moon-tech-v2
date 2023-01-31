import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { BsFillCartFill } from "react-icons/bs";
import { IoIosListBox } from "react-icons/io";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { cart } = useSelector(state => state.product);
  const cartCount = cart.reduce((count, curProduct) => count + curProduct.quantity, 0)

  return (
    <nav className='h-14 sticky top-2 z-10 bg-indigo-200 rounded-full m-2 max-w-7xl mx-auto px-5'>
      <ul className='h-full  mx-auto flex justify-between items-center gap-3 font-semibold text-indigo-900'>
        <Link to='/'><h1 className="whitespace-nowrap">Moon Tech</h1></Link>
        <li className='flex bg-white mx-auto h-8 w-full max-w-lg  rounded-full pr-3'>
          <input className='h-8 rounded-full w-full text-sm border-0 focus:ring-0 outline-none' type='text' name='search' id='search' />
          <button> <BiSearchAlt /></button>
        </li>
        <li> <Link to='/'>Home</Link></li>
        <li> <Link to='/top-rated' className="whitespace-nowrap">Top Rated</Link></li>
        <li> <Link to='/about'>About</Link></li>
        <li> <Link to='/dashboard'>Dashboard</Link></li>
        <Link to='/'>
          <li title='Wishlist' className='bg-indigo-500 p-2 rounded-full'>
            <IoIosListBox className='text-white' />
          </li>
        </Link>
        <Link to='/cart'>
          <li title='cart' className='relative bg-indigo-500 p-2 rounded-full'>
            <BsFillCartFill className='text-white ' />
            <div className="absolute -top-2 -right-2 h-6 w-6 bg-white text-indigo-500 text-xs rounded-full flex items-center justify-center ring-1 ring-indigo-500">{cartCount}</div>
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
