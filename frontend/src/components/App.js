import React from 'react';
import SignUp from './Signup';
import Login from './Login';
import Home from './Home';
import Cart from './Cart';
import Payment from './Payment';
import "./Logincss.css";
import "./Signupcss.css";
import First from './First';
import Insert from './Insert';

import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <>
    <ToastContainer/>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<SignUp />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/home' element={<Home />}></Route>
      <Route path='/first' element={<First/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/payment' element={<Payment />}></Route>
      <Route path='/insert' element={<Insert />}></Route>
    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
