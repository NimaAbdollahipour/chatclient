import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Signup() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    function handleSubmit(e){
        e.preventDefault()
        axios.post(baseUrl+'/user/signup',{
            username:username,
            email:email,
            password:password
        }).then((res)=>{
            navigate('/');
        }).catch((e)=>{
            console.log(e.message);
        })
    }
    return (
        <div className='vc'>
            <div className='col'>
                <form onSubmit={handleSubmit} className='col'>
                    <input type='text' value={username} placeholder='Username'
                    onChange={(e)=>setUsername(e.target.value)}/>
                    <input type='email'value={email} placeholder='Email'
                    onChange={(e)=>setEmail(e.target.value)}/>
                    <input type='password'value={password} placeholder='Password'
                    onChange={(e)=>setPassword(e.target.value)}/>
                    <button type='submit' className='btn-p'>sign-up</button>
                    <Link to='/' className='link'>sign-in</Link>
                </form>
                <Link to='/reset-password' className='link'>get one time code</Link>
            </div>
        </div>
    )
}

export default Signup