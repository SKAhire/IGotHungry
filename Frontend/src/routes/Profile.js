import React from 'react';
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

        </>
    )
}

export default Profile
