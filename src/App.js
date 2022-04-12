import { Route, Routes } from 'react-router-dom';
import './App.css';
import BlogDetails from './Components/BlogDetails/BlogDetails';
import Home from './Components/Home/Home';
import Invantory from './Components/Invantory/Invantory';
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import Singup from './Components/Singup/Singup';
import Videos from './Components/Videos/Videos';

function App() {
  return (
    <div className="App">
            <Navbar></Navbar>
         <Routes>
            
           <Route path='/' element={<Home></Home>}> </Route>
            <Route path='/videos' element={<Videos></Videos>}></Route>
            <Route path='/invantory' element={
              <RequireAuth>
                <Invantory></Invantory>
              </RequireAuth>
            }></Route>
             <Route path='/login' element={<Login></Login>}> </Route>
              <Route path='/singup' element={<Singup></Singup>}></Route>
            <Route path='/blog/:id' element={<BlogDetails></BlogDetails>}></Route>
         </Routes>
    </div>
  );
}

export default App;
