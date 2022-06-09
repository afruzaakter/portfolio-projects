import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const menuItem = <>
          <li className='mr-2 font-bold text-primary '><NavLink to="/">HOME</NavLink></li>
          <li className='mr-2 font-bold text-primary '><NavLink to="/about">ABOUT</NavLink></li>
          <li className='mr-2 font-bold text-primary '><NavLink to="/services">SERVICES</NavLink></li>
          <li className='mr-2 font-bold text-primary '><NavLink to="/contact">CONTACT</NavLink></li>
        
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
    <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal p-0">
    {menuItem}
    </ul>
  </div>
 
</div>
        </div>
    );
};

export default Navbar;