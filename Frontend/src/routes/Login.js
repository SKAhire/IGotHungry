import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
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

          <form action="" method='Post'>
            <div className='form-control'>
              <label htmlFor="name">Name</label>
              <input type="text" name='name' id='name' />
            </div>
            <div className='form-control'>
              <label htmlFor="email">Email</label>
              <input type="email" name='email' id='email' />
            </div>
            <div className='form-control'>
              <label htmlFor="password">Password</label>
              <input type="password" name='password' id='password' />
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
