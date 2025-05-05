import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';

const Navbar = () => {

  const { user, userLogOut } = useContext(AuthContext);
  console.log(user);


  // Handle log out
  const handleLogOut = () => {
    userLogOut().then(() => {
      // Sign-out successful.
      alert('Log out successfully');
    });
  };

  return (
    <div className='w-11/12 mx-auto'>

      <div className='flex items-center justify-between'>

        {/* left */}
        <div>{user?.email || 'Not logged in'}</div>


        {/* middle */}
        <div className='space-x-3 ml-44'>
          <NavLink to={'/'} className={({ isActive }) => isActive ? "border-b" : ""}>Home</NavLink>
          <NavLink to={'/about'} className={({ isActive }) => isActive ? "border-b" : ""}>About</NavLink>
          <NavLink to={'/careers'} className={({ isActive }) => isActive ? "border-b" : ""}>Career</NavLink>

        </div>


        {/*  */}
        {/* right */}
        <div className='flex justify-center items-center gap-3'>
          <img className='w-10 rounded-full' src={`${user ? user.photoURL : '../../../images/user.png'}`} alt="" />
          {
            user ?
              <button onClick={handleLogOut} className='btn btn-primary px-10'>Logout</button>
              : <Link to={'/auth/login'}>
                <button className='btn btn-primary px-10'>Login</button>
              </Link>
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;