import axios from "axios"

const baseUrl = 'http://localhost:3300'

const handleAuth = (e)=>{
    if(e.response.status===401){
        refreshTokens();
    }
}

export const api = ()=>{
    return axios.create({
        baseURL:baseUrl,
        headers:{
            'authorization':'Bearer '+ localStorage.getItem('token')
        }
    })
}

export const apiGet =async (url, params)=>{
    let res;
    try{
        res = await api().get(url,{params:params});
    }
    catch(e){
        console.log(e.message);
        handleAuth(e);
    }
    return res;
}

export const apiPut =async (url,data)=>{
    let res;
    try{
        res = await api().put(url,data);
    }
    catch(e){
        console.log(e.message);
        handleAuth(e);
    }
    return res;
}

export const apiPost =async (url,data)=>{
    let res;
    try{
        res = await api().post(url,data);
    }
    catch(e){
        console.log(e.message);
        handleAuth(e);
    }
    return res;
}

export const apiDelete =async (url,params)=>{
    let res;
    try{
        res = await api().delete(url,{params:params});
    }
    catch(e){
        console.log(e.message);
        handleAuth(e);
    }
    return res;
}

export const noAuthGet = async (url, params)=>{
    let res;
    try{
        res = await axios.get(baseUrl + url, {params:params});
    }
    catch(e){
        console.log(e.message);
    }
    return res;
}

export const noAuthPost = async (url, data)=>{
    let res;
    try{
        res = await axios.post(baseUrl + url, data);
    }
    catch(e){
        console.log(e.message);
    }
    return res;
}

export const refreshTokens = ()=>{
    axios.get(baseUrl + '/user/refresh',{headers:{
        'authorization':'Bearer '+ localStorage.getItem('refreshToken')
    }}).then(res=>{
        console.log(res.status);
        localStorage.clear();
        localStorage.setItem('token',res.data.token);
        localStorage.setItem('refreshToken',res.data.refreshToken);
    }).catch((e)=>{
        console.log(e.message);
        window.location.href='/';
    })
}

export default baseUrl