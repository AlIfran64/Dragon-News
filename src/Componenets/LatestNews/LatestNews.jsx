import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
  return (
    <div className='w-11/12 mx-auto my-3'>
      <div className='py-3 w-full flex justify-center items-center gap-3 bg-base-200 p-3'>
        <p className='text-base-100 bg-secondary py-2 px-4'>Latest</p>
        <Marquee pauseOnHover={true}>
          <p className='font-semibold'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
        </Marquee>
      </div>
    </div>
  );
};

export default LatestNews;