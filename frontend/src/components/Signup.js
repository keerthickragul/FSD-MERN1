import React, { useState } from "react";
import ReactDom from "react-dom";
import "./Signupcss.css";
import signup from '../images/add-user.png'
import { HiOutlineMail } from "react-icons/hi";
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import { toast } from "react-toastify";
function SignUp(){
  const navs = useNavigate();
  const handleClick = ()=>{
     navs('/login')
  }
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const handleSubmit = (e) =>{
    e.preventDefault()
    axios.post('http://localhost:3001/register',{name,email,password})
    .then(result => {console.log(result)
      toast.success('Signup Success')
     navs('/login')
    })
    .catch(err => console.log(err))
  }
     return <div  className="outer">
      <form className="inner" onSubmit={handleSubmit}>
        <h1 className="signuphead">Signup</h1>
        <br />  
        <label className="signuplabel1" htmlFor="name">Name</label>
        <input type="text" className="signupinput1" placeholder="Name" required
        onChange={(e) => setName(e.target.value)}/>
        <label className="signuplabel2" htmlFor="email">Email</label>
        <input className="signupinput2" type="text" placeholder="Email" required 
         onChange={(e) => setEmail(e.target.value)}/>
        <label className="signuplabel3" htmlFor="pass">Password</label>
        <input className="signupinput3" type="password" placeholder="Password" required
        onChange={(e) => setPassword(e.target.value)}/>
        <button type="submit" className="signbtn">Signup</button>
        <br /><br />
        <p>Already registered?<Link to={'/login'}>Login</Link></p>-
      </form>
     </div>
     
}

export default SignUp;