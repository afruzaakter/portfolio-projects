import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/fav-icon.png'

const Navbar = () => {
  const menuItem = <>
    <li className='mr-2 font-bold text-info '><NavLink to="/home">HOME</NavLink></li>
    <li className='mr-2 font-bold text-info '><NavLink to="/about">ABOUT</NavLink></li>
    <li className='mr-2 font-bold text-info '><NavLink to="/services">SERVICES</NavLink></li>
    <li className='mr-2 font-bold text-info '><NavLink to="/contact">CONTACT</NavLink></li>

  </>
  return (
    <div className='navbar p-5 fixed top-0'>
      <div class="navbar bg-base-100">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {menuItem}
            </ul>
          </div>
          <Link to='/home' class="btn btn-ghost normal-case text-xl ml-10">
            <img className='w-10 mr-2' src={logo} alt="" />
            AFRUZA  <span className='text-info ml-2'> AKTER SONIA</span> </Link>
        </div>
        <div class="navbar-center hidden lg:flex ml-48">
          <ul class="menu menu-horizontal p-0">
            {menuItem}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Navbar;