import React, { } from 'react';
import UserContext from './UserContext';
import { useNavigate } from 'react-router-dom';

const UserState = (props) => {
    const host = "http://localhost:5000";
    let navigate = useNavigate();
    // const userInitial = [];
    // const [user, setUser] = useState(userInitial);

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

    return (
        <UserContext.Provider value={{ userLogin, userSignin }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState
