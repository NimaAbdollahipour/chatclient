import { useEffect } from "react";
import { useState } from "react"
import { apiGet } from "../api";

export default function ChatSearch(props){
    //const category = props.category;
    const category = 'user';
    const [chats, setChats] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    useEffect(()=>{
        if(category==='user'){
            apiGet('/users',{q:searchValue}).then((res)=>setChats(res.data.users))
        }
    },[searchValue]);

    return(
        <div>
            <input text value={searchValue} onChange={(e)=>{setSearchValue(e.target.value)}}/>
            <ul>
                {chats.map((item,id)=><li key={id}>
                    <span>{item.username}</span>
                </li>)}
            </ul>
        </div>
    )
}