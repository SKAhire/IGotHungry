import React from 'react';

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
                        <tr key={post.id}>
                            <td>{post.title}</td>
                            <td>{post.id}</td>
                            <td>Action</td>
                        </tr>
                    ))}
                </tbody>

            </table>


        </>

    );
};

export default Posts;