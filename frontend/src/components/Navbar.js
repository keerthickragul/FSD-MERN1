import React from 'react';
import logo from '../images/logo.jpg'
import cart from '../images/menu.png'
import search from '../images/search lens.png'
import './Navbarcss.css'
 function Navbar(){
    return<>
   <header className='head'>
      <img src={logo} alt='logo' className='logo' ></img>
       <nav >
         
         <input type='text' placeholder='Search'></input>
         <ul className='nav_links'>
            <li><a href='/insert'>Add</a></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Contact</a></li>
         </ul>
       </nav>
       <a  href='#' className='cart'><img src={cart} className='cart' ></img></a>
   </header>
    </>
 }
 export default Navbar;
