import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css'
import Logo from '../../Assets/Image/logo.png'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import { signOut } from 'firebase/auth';
const Navbar = () => {
    const {pathname} = useLocation()
    const [user] = useAuthState(auth)

    const handleSingOut=()=>{
       signOut(auth)
    }
    return (
       <div >
            <div style={pathname.includes('blog') ? {display: 'none'} : {display: 'flex'}} className='navbar'>
            <div className="logo-container">
               <img src={Logo} alt="" />
            </div>
             
            <div className="link-contaner">
               <Link to='/'> Home</Link>
               <Link to='videos'> Videos</Link>
               <Link to='invantory'> Invantory</Link>
               {  user? 
                 <a className='sing-out' onClick={handleSingOut}>Sing Out </a>
                :
                  <Link to='login'> Login</Link>
                  
               }
            </div>
        </div>
        </div>
    );
};

export default Navbar;