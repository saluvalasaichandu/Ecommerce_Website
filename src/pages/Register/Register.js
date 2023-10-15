import React from 'react'
import { useState } from 'react'
import AmazonLogo from "../../Amazon_Logo.png";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import {useDispatch} from "react-redux"
import { registerInitiate } from '../../redux/actions';
const Register = () => {
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    let dispatch=useDispatch();
    const Register=(e)=>{
        e.preventDefault();
        dispatch(registerInitiate(email,password))
        setEmail("");
        setPassword("");
    }
  return (
    <div className='py-24 my-24 px-16 mx-96 text-lg bg-slate-100'>
        <Link to="/">
            <img src={AmazonLogo} alt="Logo" className='w-1/4'/>
        </Link>
        <div>
            <h1>Create Account</h1>
            <form >
                <h3>Email</h3>
                <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email"/>
                <h3>Password</h3>
                <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password'/>
                <button type="submit" onClick={Register} className='py-4 flex justify-between bg-yellow-400 border-y-8'>Continue</button>
                <div>
                    <p>Already has an Account</p>
                    <Link to="/login">
                        <p className='bg-gray-400 border-y-8'>Sign in</p>
                    </Link>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Register;