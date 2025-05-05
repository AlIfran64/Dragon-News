import React, { useContext, useState, useNavigate } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';

const Register = () => {

  const [terms, setTerms] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();


  // get data
  const { createRegister, setUser, updateUserProfile } = useContext(AuthContext)

  // Register
  const handleRegister = (e) => {


    // Reset
    setTerms(false);
    setError("");
    setSuccess(false);


    e.preventDefault();


    // get data from input
    const name = e.target.name.value;
    const photoUrl = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const terms = e.target.terms.checked;


    // Validate
    if (!terms) {
      setError("Please accept our terms and conditions");
      return;
    }


    // create register
    createRegister(email, password).then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      updateUserProfile({ displayName: name, photoUrl: photoUrl }).then(() => {
        // Profile updated!
        setUser({ ...user, displayName: name, photoUrl: photoUrl });
        navigate('/');
        // ...
      }).catch((error) => {
        console.log(error);

        // An error occurred
        setUser(user);
        // ...
      });
      setSuccess(true);

      // ...
    })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);

        // ..
      });
  }

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="bg-base-100 shrink-0 shadow-2xl px-20 py-8">
          <h1 className="text-2xl font-bold mb-5">Please Register!</h1>
          <div className="">
            <form onSubmit={handleRegister}>

              {/* Name */}
              <label className="label">Name</label>
              <input type="text" name='name' className="input mb-3" placeholder="Email" /> <br />

              {/* Photo url */}
              <label className="label">Photo url</label>
              <input type="text" name='photo' className="input mb-3" placeholder="Photo url" /> <br />

              {/* Email */}
              <label className="label">Email</label>
              <input type="email" name='email' className="input mb-3" placeholder="Email" /> <br />

              {/* Password */}
              <label className="label">Password</label>
              <input type="password" name='password' className="input" placeholder="Password" /> <br />


              <div onClick={() => setTerms(!terms)} className='mt-4'>
                {/* Checkbox */}
                <label className="label">
                  <input type="checkbox" name='terms' className="checkbox" />
                  Accept Term & Conditions
                </label>
              </div>
              <br />

              <button type='submit' className="btn btn-neutral w-full">Register</button>
            </form>

            <div className='mt-5'>
              <p className='text-center '>Already have an account? Please <Link to={'/auth/login'} className='text-blue-500 font-semibold'>Login</Link></p>
            </div>

            {/* error or success */}
            {
              error && <p className='text-red-500 font-semibold pt-5'>{error}</p>
            }
            {
              success && <p className='text-green-500 font-semibold pt-5'>Account created Successfully!</p>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;