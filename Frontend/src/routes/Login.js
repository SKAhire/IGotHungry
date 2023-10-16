import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../context/users/UserContext'

const Login = () => {
  const context = useContext(UserContext);
  const {userLogin} = context;
  
  const [credentials, setCredentials] = useState({ email: "", password: "" })


  const handleSubmit = async (e) => {
    e.preventDefault();
    userLogin(credentials.email, credentials.password)
  }


  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const response = await fetch('http://localhost:5000/user/login', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       email: credentials.email,
  //       password: credentials.password
  //     })
  //   });

  //   const json = await response.json();
  //   if (json.success) {
  //     // save the auth token and redirect 
  //     localStorage.setItem('token', json.authToken);
  //     navigate('/')
  //   } else {
  //     alert('Invalid Credentials')
  //   }
  // }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  return (
    <>

      <div className="Banner" style={{ 'backgroundImage': `url("../images/banner/banner_2.jpg")` }}>
        <div className="bannerDiv">
        </div>
        <div className="bannerInfo">
          <h1>Login</h1>
          <p className="path">
            <Link to="/">Home</Link>/Login
          </p>
          <p>
            Here is the step by step guideance to create RecipeName
          </p>
        </div>
      </div>

      <div className="loginF">
        <div className="lComment">
          <h3>Login to I Got Hungry</h3>

          <form onSubmit={handleSubmit} method='Post'>
            <div className='form-control'>
              <label htmlFor="email">Email</label>
              <input type="email" name='email' id='email' onChange={onChange} value={credentials.email} />
            </div>
            <div className='form-control'>
              <label htmlFor="password">Password</label>
              <input type="password" current-password name='password' id='password' onChange={onChange} value={credentials.password} />
            </div>

            <div className="logBtn">
              <button type="submit">Login</button>
              <Link >Forgot Password?</Link>
              <p>New to I Got Hungry <Link to="/signup">Create Account!</Link></p>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login
