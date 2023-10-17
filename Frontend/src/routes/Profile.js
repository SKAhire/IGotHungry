import React from 'react';
import EditUser from '../components/EditUser';
import { Link } from 'react-router-dom';

const Profile = () => {
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

            <div className="profileMain">
                <div className="profileMenu">
                    <div className="menuOptions">
                        <Link to="/bookmark">Bookmark</Link>
                        <Link to="/logout">Logout</Link>
                    </div>
                </div>
                <div className="profileCont">
                    <EditUser />
                </div>
            </div>

        </>
    )
}

export default Profile
