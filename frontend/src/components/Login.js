import React from "react";
import ReactDom from "react-dom";
import "./Logincss.css";
import { useState } from "react";
import axios from "axios";
import {Link, useNavigate} from 'react-router-dom';
import { toast } from "react-toastify";
function Login(){
    const nav = useNavigate();
     const handleclick = ()=>{
        nav('/')
     }
     const handles = ()=>{
      nav('/home')
     }
     
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const handleSubmit = (e) =>{
    e.preventDefault()
    axios.post('http://localhost:3001/login',{email,password})
    .then(result => {
      console.log(result);
      if(result.data === "Success"){
        toast.success('Login Success');
        nav('/first')
      }
     
    })
    .catch(err => {
      console.error("Error:",err);
      if(err.response){
        
        alert("Server Error: "+err.response.data);
      }
      else if(err.request){
        alert("No response received from server");
      }
      else{
        alert("Error setting up the request: " + err.message);
      }
    });
  }

     return <div className="outers">
      <form className="inners" onSubmit={handleSubmit}>
        <h1 className="loginhead">Login</h1>
        <br />  
        <label className= "login1" htmlFor="email">Email</label>
        <input type="text" className="loginput1"placeholder="Email" required
        onChange={(e) => setEmail(e.target.value)}/>
        <label className="login2" htmlFor="email">Password</label>
        <input type="password" className="loginput2" placeholder="Confirm Password" required
        onChange={(e) => setPassword(e.target.value)}/>
        <button type="submit" className="loginbtn">Login</button>
        <br /><br />
        <p className="loginnav">Don't have an account? <Link to={'/'} >Signup</Link></p>
      </form>
     </div>
     
}

export default Login;