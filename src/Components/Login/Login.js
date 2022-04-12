import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase.init';
import './Login.css'
const Login = () => {

      const [email , setEmail] = useState('')
      const [password , setPassword] = useState('')
      const navigate = useNavigate()

      const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
       
      const location = useLocation()
       const from = location.state?.from?.pathname || '/'

       if(user){
           navigate(from , {replace: true})
       }

       const handleEmailBlur = event=>{
           setEmail(event.target.value)
       }

       const handlePasswordBlur = event=>{
        setPassword(event.target.value)
    }

    const handleUserLogin=event=>{
        event.preventDefault()
        signInWithEmailAndPassword(email , password)
    }
     
    return (
        <div className='form-container'>
          <div>
          <form onSubmit={handleUserLogin}>
          <h1 className='form-title'>Please Login</h1>
            
            <div className="input-group">
                <label htmlFor="email">Email</label>
                <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
            </div>
             <div className="input-group">
                 <label htmlFor="password">Password</label>
                 <input onBlur={handlePasswordBlur} type="password" name="password" id="" required/>
             </div>
              <p style={{color:'red'}}>{error?.message}</p>
              {loading && <p>Loading...</p>}
             <input className='from-submit' type="submit" value="Login" required />
          </form>
          <p>
              New to Blog ? <Link className='form-link' to='/singup'> Create an account</Link> 
          </p>
           <button className='btn'> Continue with Google</button>
         
          </div>
        </div>
    );
};

export default Login;