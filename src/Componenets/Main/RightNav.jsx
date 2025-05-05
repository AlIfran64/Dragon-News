import React from 'react';
import SocialLogin from '../SocialLogin/SocialLogin';
import FindUs from '../FindUs.jsx/FindUs';
import QZone from '../QZone.jsx/QZone';

const RightNav = () => {
  return (
    <div>
      <div>
        <SocialLogin></SocialLogin>
      </div>


      <div className='mt-5'>
        <FindUs></FindUs>
      </div>

      <div className='mt-5'>
        <QZone></QZone>
      </div>
    </div>
  );
};

export default RightNav;