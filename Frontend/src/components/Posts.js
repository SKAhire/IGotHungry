import React from 'react';
import { Link } from 'react-router-dom';

const Posts = ({ posts, loading }) => {

    

    if (loading) {
        return <h2>Loading...</h2>;
    }

    return (

        <>

            <table className='recipeTable'>
                <thead>
                    <tr>
                        <th>Recipes Name</th>
                        <th>Author</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map(post => (
                        <tr key={post._id}>
                            <td>{post.title}</td>
                            <td>{post.author}</td>
                            <td><Link to={`/my-profile/edit-recipe/${post._id}`}><i className="fa-regular fa-pen-to-square m-2 cardIcon" to="/"></i>Edit</Link>
                            <Link to={`/my-profile/delete-recipe/${post._id}`}><i className="fa-regular fa-trash-can m-2 cardIcon" ></i>Delete</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>

            </table>


        </>

    );
};

export default Posts;