import React, { useEffect } from 'react';
import EditUser from '../components/EditUser';
import { Link, useNavigate } from 'react-router-dom';

const Profile = () => {
    const navigate = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate('/')
        }
        // eslint-disable-next-line
    })
    
    return (
        <>

            <div className="Banner" style={{ 'backgroundImage': `url("../images/banner/banner_2.jpg")` }}>
                <div className="bannerDiv">
                </div>
                <div className="bannerInfo">
                    <h1>My Profile</h1>
                    <p className="path">
                        <Link to="/">Home</Link>/My Profile
                    </p>
                    <p>
                        Here is the step by step guideance to create RecipeName
                    </p>
                </div>
            </div>

            <EditUser />
            {/* <div className="profileMain">
                <div className="profileMenu">
                    <div className="menuOptions">
                        <Link to="/bookmark">Bookmark</Link>
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                </div>
                <div className="profileCont">
                    <EditUser />
                </div>
            </div> */}

        </>
    )
}

export default Profile
