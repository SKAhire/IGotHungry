import React, { useContext, useEffect, useState } from 'react'
import UserContext from '../context/users/UserContext'
import RecipeContext from '../context/recipes/RecipeContext';
import Posts from '../components/Posts';
import Pagination from '../components/Pagination';
import { Link, useNavigate } from 'react-router-dom';

const AddRecipes = () => {

    // pagination
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);


    const recipeContext = useContext(RecipeContext);
    const { recipes, getRecipes } = recipeContext;


    useEffect(() => {

            setLoading(true);
            getRecipes()
            setPosts(recipes);
            setLoading(false);
    }, [recipes, getRecipes]);

    const context = useContext(UserContext);
    const { user, getUser } = context;
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem('token')) {
            getUser()
            if (!user._id === "652a8cfca1d3daa036a9b045") {
                navigate("/")
            }
        }
        // eslint-disable-next-line
    }, [])

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
                <div className="paginationDiv">
                    <Posts posts={currentPosts} loading={loading} />
                    <Pagination
                        postsPerPage={postsPerPage}
                        totalPosts={posts.length}
                        paginate={paginate}
                    />
                </div>
            </div>

        </>
    )
}

export default AddRecipes
