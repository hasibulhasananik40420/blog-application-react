import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
const Singup = () => {
    // const [google , setGoogle] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setconfirmPassword] = useState('')
    const [error, setError] = useState('')
    const [ createUserWithEmailAndPassword , user] = useCreateUserWithEmailAndPassword(auth)
    const navigate = useNavigate()

    if(user){
        navigate('/videos')
    }
     //continue with google
     const [singInWithGoogle ] = useSignInWithGoogle(auth)

    const handleWithGoogle= ()=>{
        
        singInWithGoogle(auth)
        console.log('google');

    }

    const handleEmailBlur = (event) => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = (event) => {
        setPassword(event.target.value)
    }

    const handleConfirmPasswordBlur = (event) => {
        setconfirmPassword(event.target.value)
    }
     
    const handleCreateUser= (event)=>{
       event.preventDefault()
       if(password !==confirmPassword){
           setError("Your password didn't match")
           return
       }
       if(password.length <6){
           setError("Password must be 6 charactar .")
           return
       }
       createUserWithEmailAndPassword(email, password)
    }

    return (
        <div className='form-container'>
            <div>
                <form onSubmit={handleCreateUser}>
                    <h1 className='form-title'>Sing Up</h1>

                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm-password" id="" required />
                    </div>
                     <p style={{color:'red'}}>{error}</p>
                    <input className='from-submit' type="submit" value="Sing Up" required />
                </form>
                <p>
                    Already have an account ? <Link className='form-link' to='/login'>Please Login</Link>
                </p>
                <button onClick={()=> handleWithGoogle()} className='btn'> Continue with Google</button>
            </div>
        </div>
    );
};

export default Singup;