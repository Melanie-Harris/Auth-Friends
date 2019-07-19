import React from 'react';
import {Redirect} from 'react-router-dom';

export default function Logout(props) {
    const LogOutHandler = () => {
        localStorage.removeItem('token')
        props.history.push('/')
    }
    return (
    
        <div>
            <button onClick={LogOutHandler}> Log Out</button>
        </div>
    )
}
