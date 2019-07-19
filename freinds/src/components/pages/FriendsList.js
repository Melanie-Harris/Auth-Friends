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
    const addFriendsHandler= ()=>{
        props.history.push('/AddFriends')
    }

    return (
        <div>
            FriendsList
        {friends.map((friend) => {
            return (<div>
                <div>{friend.name}</div>
                 <div>{friend.age} 
                 <div>{friend.email}</div></div></div>)
                 
           })} 
            <button onClick={addFriendsHandler}> Add Friends</button>
            <Logout 
            history={props.history}/>
        </div>
    )
}
