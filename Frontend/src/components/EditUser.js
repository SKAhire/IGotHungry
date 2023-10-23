import React, { useContext, useState, useEffect } from 'react'
import UserContext from '../context/users/UserContext'
import { Link, useNavigate } from 'react-router-dom';


const EditUser = () => {

    const context = useContext(UserContext);
    const { user, getUser, editUser, editPass } = context;

    useEffect(() => {
        if (localStorage.getItem('token')) {
            getUser()
        }
        // eslint-disable-next-line
    },[])

    const [credentials, setCredentials] = useState({ ename: user.username, eemail: user.email })
    const [changePass, setChangePass] = useState({ password: "", cpassword: "" })
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        editUser(credentials.ename, credentials.eemail)
    }
    const handleChangePass = async (e) => {
        e.preventDefault();
        if (changePass.password === changePass.cpassword) {
            editPass(changePass.password);
            setChangePass({ password: "", cpassword: "" })
        }
    }
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    const onChangePass = (e) => {
        setChangePass({ ...changePass, [e.target.name]: e.target.value })
    }

    const handleLogout = ()=>{
        localStorage.removeItem('token')
        navigate('/')
    }
    return (
        <>

            <div className="profileMain">
                <div className="profileMenu">
                    <div className="menuOptions">
                    {
                            user._id==="652a8cfca1d3daa036a9b045" ?
                                <Link to="/my-profile/recipes">Recipes</Link>
                                :
                                <Link to="/bookmark">Bookmark</Link>

                        }
                        
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                </div>
                <div className="profileCont">
                    <div className="loginF">
                        <div className="lComment">
                            <h3>Edit Profile</h3>

                            <form onSubmit={handleSubmit} method='Post'>
                                <div className='form-control'>
                                    <label htmlFor="ename">Name</label>
                                    <input type="text" name='ename' id='ename' value={credentials.ename} onChange={onChange} />
                                </div>
                                <div className='form-control'>
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name='eemail' id='eemail' value={credentials.eemail} onChange={onChange} />
                                </div>


                                <div className="logBtn">
                                    <button type="submit">Save</button>
                                </div>
                            </form>

                            <h3>Change Password</h3>

                            <form onSubmit={handleChangePass} method='Post'>

                                <div className='form-control'>
                                    <label htmlFor="password">Password</label>
                                    <input type="password" name='password' id='password' onChange={onChangePass} value={changePass.password} autoComplete="off" minLength={5} />
                                </div>
                                <div className='form-control'>
                                    <label htmlFor="cpassword">Confirm Password</label>
                                    <input type="password" name='cpassword' id='cpassword' onChange={onChangePass} value={changePass.cpassword} autoComplete="off" minLength={5} />
                                </div>
                                <div className="logBtn">
                                    <button type="submit">Change Password</button>
                                </div>

                            </form>

                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default EditUser
