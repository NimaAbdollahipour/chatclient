import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import baseUrl from '../api'
import AppContext from '../contexts/AppContext'

function ForgotPassword() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {setToken, setRefreshToken} = useContext(AppContext);
    function getPassword(e){
        e.preventDefault()
        axios.get(baseUrl+'/user/reset-password',{
            username:username,
        }).then((res)=>{
            alert(res.data.msg+":"+res.data.token);
        }).catch((e)=>{
            alert(e.message);
        })
    }
    function signIn(e){
        e.preventDefault()
        axios.post(baseUrl+'/user/one-time-signin',{
            username:username,
            password:password
        }).then((res)=>{
            setToken(res.data.token);
            setRefreshToken(res.data.refreshToken);
            alert(res.data.msg);
        }).catch((e)=>{
            alert(e.message);
        })
    }
    return (
        <div className='vc'>
            <div className='col'>
                <form onSubmit={getPassword} className='col'>
                    <input type='text' value={username} placeholder='Username or Email'
                    onChange={(e)=>setUsername(e.target.value)}/>
                    <button type='submit' className='btn-s'>get password</button>
                </form>
                <form onSubmit={signIn} className='col'>
                    <input type='text' value={username} placeholder='Code'
                    onChange={(e)=>setPassword(e.target.value)}/>
                    <button type='submit' className='btn-p'>sign in</button>
                </form>
                <Link to='/' className='link'>sign-in</Link>
            </div>
        </div>
    )
}

export default ForgotPassword