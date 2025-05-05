import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoutes = ({ children }) => {

  // get data
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <div className='w-11/12 mx-auto flex justify-center items-center bg-white py-3 rounded-2xl'>
      <span className="loading loading-spinner loading-lg"></span>
    </div>
  }

  if (user && user?.email) {
    return children;
  }
  else {
    return <Navigate state={location.pathname} to={'/auth/login'}></Navigate>
  };

};

export default PrivateRoutes;