import React from 'react'
import AmazonLogo from "../../Amazon_Logo.png";
import {Link} from "react-router-dom";
import { Email } from '@mui/icons-material';
import { useState } from 'react';
const Login = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const signIn=(e)=>{
        e.preventDefault();

    }
  return (
    <div className=' py-24 px-16 mx-96 my-24 text-lg bg-gray-200'>
        <Link to="/">
            <img src={AmazonLogo} alt="Login-Logo" className='w-1/3'/>
        </Link>
        <div className=''>
            <h1 className='font-bold'>Sign In</h1>
            <form>
                <h3>Email</h3>
                <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email'/>
                <h3>Password</h3>
                <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password' className=''/>
                <button type='submit' onClick={signIn} className=' p-2  flex justify-between bg-yellow-400 w-auto border-y-8'>Sign In</button>
            </form>
        </div>
        <p>New to Amazon?</p>
        <Link to="/register">
            <button className='bg-gray-400 border-y-8'>Create your Account</button>
        </Link>
    </div>
  )
}

export default Login;