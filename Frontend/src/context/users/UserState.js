import React, { useState } from 'react';
import UserContext from './UserContext';
import { useNavigate } from 'react-router-dom';

const UserState = (props) => {
    const host = "http://localhost:5000";
    let navigate = useNavigate();
    const token = localStorage.getItem('token')
    const userInitial = [];
    const [user, setUser] = useState(userInitial);

    const getUser = async ()=>{
        const response = await fetch(`${host}/user/getuser`,{
            method: 'GET',
            headers: {
                'auth-token': token
            },
        })
        const json = await response.json();
        setUser(json)
    }

    //login 
    const userLogin = async (email, password) => {
        const response = await fetch(`${host}/user/login`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
        const json = await response.json();
        if (json.success) {
            // save the auth token and redirect 
            localStorage.setItem('token', json.authToken);
            navigate('/')
        } else {
            alert('Invalid Credentials')
        }
    }

    // add user
    const userSignin = async (name, email, password) => {
        const response = await fetch(`${host}/user/adduser`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: name,
                email: email,
                password: password
            })
        })
        const json = await response.json();
        if (json.success) {
            // save the auth token and redirect 
            // localStorage.setItem('token', json.authToken);
            navigate('/login')
        } else {
            alert('Invalid Credentials')
        }
    }
    // edit user
    const editUser = async (name, email) => {
        const response = await fetch(`${host}/user/edituser`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': token
            },
            body: JSON.stringify({
                username: name,
                email: email
            })
        })
        const json = await response.json();
        if (json.success) {
            // save the auth token and redirect 
            // localStorage.setItem('token', json.authToken);
            navigate('/my-profile')
        } else {
            alert('Invalid Credentials')
        }
    }

    return (
        <UserContext.Provider value={{ user, getUser, userLogin, userSignin, editUser }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState
