import React from 'react';
import axios from "axios";



export const axiosWithAuth =() => {
    const token= localStorage.getItem('token');

    return axios.create({
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`,
        }
    });
};

function name(name1,name2){
    return 
}

export const login= (userCredentials) => {
    axios.post('/api/login', userCredentials )
        .then(res => {
            localStorage.setItem('token', res.data.token);
        })
}


// Axios configuration that attaches an Authorization: <token> header to requests
// Whenever the application needs to exchange data with a protected endpoint, it will import this module, instead of the usual import axios from "axios";.

// When you login, you want to save the token that’s returned to localStorage, so that the above axiosWithAuth module can grab it for other calls that require the Authorization header to be on it