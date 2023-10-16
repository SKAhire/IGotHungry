import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../context/users/UserContext'

const Signup = () => {
  const context = useContext(UserContext);
  const {userSignin} = context;
  
  const [credentials, setCredentials] = useState({ name:"", email: "", password: "", cpassword:"" })


  const handleSubmit = async (e) => {
    e.preventDefault();
    userSignin(credentials.name, credentials.email, credentials.password)
  }
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
          <h3>Create account with I Got Hungry</h3>

          <form onSubmit={handleSubmit} method='Post'>
            <div className='form-control'>
              <label htmlFor="name">Name</label>
              <input type="text" name='name' id='name' onChange={onChange} />
            </div>
            <div className='form-control'>
              <label htmlFor="email">Email</label>
              <input type="email" name='email' id='email' onChange={onChange} />
            </div>
            <div className='form-control'>
              <label htmlFor="password">Password</label>
              <input type="password" name='password' id='password' onChange={onChange} minLength={5} />
            </div>
            <div className='form-control'>
              <label htmlFor="cpassword">Confirm Password</label>
              <input type="password" name='cpassword' id='cpassword' onChange={onChange} minLength={5} />
            </div>

            <div className="logBtn">
              <button type="submit">Signin</button>
              <p>Already have an account <Link to="/signup">Login!</Link></p>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Signup
