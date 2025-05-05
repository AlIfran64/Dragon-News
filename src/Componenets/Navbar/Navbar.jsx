import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
  return (
    <div className='w-11/12 mx-auto my-5'>

      <div className='flex items-center justify-between'>

        {/* left */}
        <div className=''></div>


        {/* middle */}
        <div className='space-x-3 ml-44'>
          <NavLink to={'/'} className={({ isActive }) => isActive ? "border-b" : ""}>Home</NavLink>
          <NavLink to={'/about'} className={({ isActive }) => isActive ? "border-b" : ""}>About</NavLink>
          <NavLink to={'/careers'} className={({ isActive }) => isActive ? "border-b" : ""}>Career</NavLink>

        </div>



        {/* right */}
        <div className='flex justify-center items-center gap-3'>
          <img src="../../../images/user.png" alt="" />
          <button className='btn btn-primary px-10'>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;