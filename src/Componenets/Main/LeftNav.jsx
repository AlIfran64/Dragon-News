import React, { Suspense } from 'react';
import Categories from '../Categories/Categories';

const LeftNav = () => {
  return (
    <div>
      <Suspense fallback={
        <div className='flex justify-center'>
          <span className="loading loading-spinner loading-lg "></span>
        </div>
      }>
        <Categories></Categories>
      </Suspense>
    </div>
  );
};

export default LeftNav;