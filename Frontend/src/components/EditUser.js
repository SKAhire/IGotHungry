import React, { useContext, useState } from 'react'
import UserContext from '../context/users/UserContext'


const EditUser = () => {

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

            <div className="loginF">
                <div className="lComment">
                    <h3>Edit Profile</h3>

                    <form onSubmit={handleSubmit} method='Post'>
                        <div className='form-control'>
                            <label htmlFor="name">Name</label>
                            <input type="text" name='name' id='name' onChange={onChange} />
                        </div>
                        <div className='form-control'>
                            <label htmlFor="email">Email</label>
                            <input type="email" name='email' id='email' onChange={onChange} />
                        </div>


                        <div className="logBtn">
                            <button type="submit">Save</button>
                        </div>
                    </form>

                    <h3>Change Password</h3>

                    <form onSubmit={handleSubmit} method='Post'>

                        <div className='form-control'>
                            <label htmlFor="password">Password</label>
                            <input type="password" name='password' id='password' onChange={onChange} minLength={5} />
                        </div>
                        <div className='form-control'>
                            <label htmlFor="cpassword">Confirm Password</label>
                            <input type="password" name='cpassword' id='cpassword' onChange={onChange} minLength={5} />
                        </div>
                        <div className="logBtn">
                            <button type="submit">Change Password</button>
                        </div>

                    </form>

                </div>
            </div>
           
        </>
    )
}

export default EditUser
