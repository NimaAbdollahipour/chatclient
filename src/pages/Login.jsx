import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import baseUrl from '../api'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    function handleSubmit(e){
        e.preventDefault()
        axios.post(baseUrl+'/user/signin',{
            username:username,
            password:password
        }).then((res)=>{
            localStorage.setItem('token',res.data.token);
            localStorage.setItem('refreshToken',res.data.refreshToken);
            navigate('/settings')
        }).catch((e)=>{
            console.log(e.message);
        })
    }
    return (
        <div className='vc'>
            <div className='col'>
                <form onSubmit={handleSubmit} className='col'>
                    <input type='text' value={username} placeholder='Username or Email'
                    onChange={(e)=>setUsername(e.target.value)}/>
                    <input type='password'value={password} placeholder='Password'
                    onChange={(e)=>setPassword(e.target.value)}/>
                    <button type='submit' className='btn-p'>sign-in</button>
                    <Link to='/signup' className='link'>sign-up</Link>
                </form>
                <Link to='/reset-password' className='link'>get one time code</Link>
            </div>
        </div>
    )
}

export default Login