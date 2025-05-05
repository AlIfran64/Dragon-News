import React, { useContext, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';

const Login = () => {


  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();



  // get data
  const { userLogin } = useContext(AuthContext);



  // handle log in
  const handleLogin = (e) => {

    // Reset
    setError("");
    setSuccess(false);

    e.preventDefault();

    // Get data from input
    const email = e.target.email.value;
    const password = e.target.password.value;


    // log in
    userLogin(email, password).then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      setSuccess(true);
      navigate(`${location.state ? location.state : '/'}`)
      // ...
    })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage)
      });
  }


  return (
    <div className="hero bg-base-200 min-h-screen ">
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <div className="bg-base-100 shrink-0 shadow-2xl px-20 py-8">
          <h1 className="text-2xl font-bold mb-5">Login now!</h1>
          <div className="">
            <form onSubmit={handleLogin}>

              {/* email */}
              <label className="label">Email</label>
              <input type="email" name='email' className="input mb-3" placeholder="Email" /> <br />

              {/* password */}
              <label className="label">Password</label>
              <input type="password" name='password' className="input" placeholder="Password" />
              <div><a className="link link-hover">Forgot password?</a></div>
              <button className="btn btn-neutral w-full mt-4">Login</button>
            </form>

            <div className='mt-5'>
              <p className='text-center '>Didn't have an account? Please <Link to={'/auth/register'} className='text-blue-500 font-semibold'>Register</Link></p>
            </div>

            {/* error or success */}
            {
              error && <p className='text-red-500 font-semibold pt-5'>{error}</p>
            }
            {
              success && <p className='text-green-500 font-semibold pt-5'>Account Login Successfully!</p>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;