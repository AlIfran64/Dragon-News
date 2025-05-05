import React from 'react';
import Navbar from '../../Componenets/Navbar/Navbar';
import { Outlet } from 'react-router';

const Auth = () => {
  return (
    <div className='bg-base-200 h-screen'>
      <header className='py-5'>
        <Navbar></Navbar>
      </header>

      <main className='w-11/12 mx-auto'>
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default Auth;