import React, { useEffect, useState } from 'react';
import Logout from '../Logout';
import { axiosWithAuth } from '../../axiosAuth';



export default function FriendsList(props) {
    const [friends, setFriends] = useState([]);
    useEffect(() => {
        console.log("starting component")
        axiosWithAuth()
        .get('http://localhost:5000/api/friends')
        .then((res)=>{
            console.log('got friends')
            setFriends(res.data)
        })
        .catch((e)=>{
            console.log("couldnt reach server")
        })
    });
    return (
        <div>
            FriendsList
        {friends.map((friend) => {
            return (<div>
                <div>{friend.name}</div>
                 <div>{friend.age} 
                 <div>{friend.email}</div></div></div>)
                 
           })} 

            <Logout 
            history={props.history}/>
        </div>
    )
}
