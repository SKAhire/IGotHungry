import React, { useContext, useState, useEffect } from 'react'
import UserContext from '../context/users/UserContext'


const EditUser = () => {

    const context = useContext(UserContext);
    const { user, getUser, editUser } = context;
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    // const [credentials, setCredentials] = useState({ ename: "", eemail: "" })

    useEffect(() => {
        if (localStorage.getItem('token')) {
            getUser()
        }
        // eslint-disable-next-line
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        editUser(name, email)
    }
    const onChangeName = (e) => {
        setName({ ...name, [e.target.name]: e.target.value });
    }
    const onChangeEmail = (e) => {
        setEmail({ ...email, [e.target.name]: e.target.value });
    }
    return (
        <>

            <div className="loginF">
                <div className="lComment">
                    <h3>Edit Profile</h3>

                    <form onSubmit={handleSubmit} method='Post'>
                        <div className='form-control'>
                            <label htmlFor="ename">Name</label>
                            <input type="text" name='ename' id='ename' value={user.username} onChange={onChangeName} />
                        </div>
                        <div className='form-control'>
                            <label htmlFor="email">Email</label>
                            <input type="email" name='eemail' id='eemail' value={user.email} onChange={onChangeEmail} />
                        </div>


                        <div className="logBtn">
                            <button type="submit">Save</button>
                        </div>
                    </form>

                    <h3>Change Password</h3>

                    {/* <form onSubmit={handleSubmit} method='Post'>

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

                    </form> */}

                </div>
            </div>

        </>
    )
}

export default EditUser
