import { format } from 'date-fns';
import React from 'react';

const Header = () => {
  return (
    <div className='w-11/12 mx-auto py-8'>
      <div className='flex justify-center items-center'>
        <img src="/images/logo.png" alt="logo" />
      </div>
      <p className='text-center mt-5 text-accent'>Journalism Without Fear or Favour</p>
      <p className='text-center mt-2 font-semibold text-accent'>{format(new Date(), "EEEE, MMMM MM, yyyy")}</p>
    </div>
  );
};

export default Header;