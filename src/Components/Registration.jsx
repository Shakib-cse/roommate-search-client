import React, { use, useState } from 'react';
import { AuthContext } from '../Provider/AuthContext';
import { Link, useNavigate } from 'react-router';
import { sendEmailVerification } from 'firebase/auth';

const Registration = () => {

    const {createSingIn, logout, googleLogin} = use(AuthContext);

    const [error, setError] = useState('');
    const [passwordValid, setPasswordValid] = useState([]);

    const navigate = useNavigate();

      const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name,value);

    if (name === 'password') {
      // Check for at least one lowercase, one uppercase, and one number
      const isValida_z = /[a-z]/.test(value);
      const isValidA_Z = /[A-Z]/.test(value);
      const isValidDig = /\d/.test(value);

      const passwordErrors = [];
      
      if (!isValida_z) passwordErrors.push('at least one lowercase letter');
      if (!isValidA_Z) passwordErrors.push('at least one uppercase letter');
      if (!isValidDig) passwordErrors.push('at least one number');

      setPasswordValid(passwordErrors.join(' ||| '));


    }

  };

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const userData = Object.fromEntries(formData.entries());


        const email = formData.get('email');
        const password = formData.get('password');

        console.log(email,password);

        if(password.length < 6) {
            setError('Password must be 6 characters long');
            return;
        }else{
            setError('')
        }


        // register/sign up
        createSingIn(email, password)
        .then((userCredential)=>{
          const creationTime = userCredential?.user?.metadata?.creationTime;
          const lastSignInTime = userCredential?.user?.metadata?.lastSignInTime;

          const userAllData = {...userData,creationTime,lastSignInTime};
          //send data to backend
        fetch('http://localhost:3000/users', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(userAllData)
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data);
        })
             // Send verification email
      sendEmailVerification(userCredential.user)
        .then(() => {
          alert('Verification email sent. Please check your inbox.');
          // Logout to prevent auto login before email is verified
          logout().then(() => {
            navigate('/login');
          });
        })
        .catch(() => {
          setError('Failed to send verification email');
        });
    
        })
        .catch(error=>{
            alert(error.message);
        })

        

    }

    //google login
    const handleGoogleSubmit = () => {
        googleLogin()
        .then(()=>{
            if(location.state){
        navigate(location.state)
      }else{
        navigate('/')
      }
            alert('Login successfully');
        })
        .catch((error)=>{
            console.log(error.message);
        })
    }

    return (
        <div className='flex justify-center items-center py-3'>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <legend className="fieldset-legend">Registration</legend>

  <div className='text-warning'>{error}</div>

  <form onSubmit={handleSubmit}>
    
  <label className="label">Name</label>
  <input type="text" className="input" placeholder="Name" name='name' />

  <label className="label">Age</label>
  <input type="number" className="input" placeholder="Age" name='age' />

  <label className="label">Email</label>
  <input type="email" className="input" placeholder="Email" name='email' />

  <label className="label">Password</label>
  <input type="password" className="input" placeholder="Password" name='password' onChange={handleChange} />

  <div className='text-warning'>{passwordValid}</div>

  <button type='submit' className="btn btn-neutral mt-4">Registration</button>
  </form>
  {/* Google */}
<button className="btn bg-white text-black border-[#e5e5e5] my-3" onClick={handleGoogleSubmit}>
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</button>

<div>Already have an account? <Link to='/login' className='underline link-secondary'>Login</Link></div>
</fieldset>
        </div>
    );
};

export default Registration;