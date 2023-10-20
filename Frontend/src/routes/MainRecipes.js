import React, { useContext, useEffect } from 'react'
import UserContext from '../context/users/UserContext'
import { Link, useNavigate } from 'react-router-dom';

const AddRecipes = () => {
    const context = useContext(UserContext);
    const { user, getUser } = context;
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem('token')) {
            getUser()
            if(!user._id==="652a8cfca1d3daa036a9b045"){
                navigate("/")
            }
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
                        <Link to="/">Home</Link>/<Link to="/my-profile">My Profile</Link>/Recipes
                    </p>
                    <p>
                        Here is the step by step guideance to create RecipeName
                    </p>
                </div>
            </div>

            
           <div className="MainRecipesCont">
            <div className="recipesOp">
                <Link to="/my-profile">Back</Link>
                <Link to="/my-profile/add-recipe">Add +</Link>
            </div>
           </div>

        </>
  )
}

export default AddRecipes
