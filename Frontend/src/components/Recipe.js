import React from 'react';
import { Link } from 'react-router-dom';

const Recipe = () => {
    return (
        <>

            <main>

                <div className="Banner" style={{ 'backgroundImage': `url("../images/banner/banner_2.jpg")` }}>
                    <div className="bannerDiv">
                    </div>
                    <div className="bannerInfo">
                        <h1>RECIPES</h1>
                        <p className="path">
                            <Link to="/">Home</Link>/<Link to="/recipes">Recipes</Link>/RecipeName
                        </p>
                        <p>
                            Here is the step by step guideance to create RecipeName
                        </p>
                    </div>
                </div>

                <div className="recipeDiv">

                    <div className="recipeBody">
                        <div className="recipeDesc">
                            <h2 className="recTitle">Roasted Corn and Fried Egg Tacos</h2>
                            <p>Roasted Corn and Fried Egg Tacos with a crispy, cheesy, lacy-edged egg, corn, cotjia cheese, cilantro, pickled onions and sauce all piled into a tortilla with refried beans.</p>
                            <img src="https://pinchofyum.com/wp-content/uploads/Fried-Egg-Tacos-4-768x1152.jpg" alt="" />
                            <p>My new favorite application of a fried egg! This little taco hits just right with a cheesy, corn-speckled fried egg, refried black beans, Cotija, cilantro, pickled red onions, and a spicy green sauce.</p>
                            <div className="viewAll">
                <Link to="#mainRecipe"><strong>&#x2B07;</strong> Jump to Recipie</Link>
            </div>
                        </div>
                    </div>

                    <div className="relatedres">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat deleniti aliquam, eum atque numquam repellendus aperiam in reiciendis ipsa quibusdam earum commodi dolores tenetur velit dolorem dolorum, harum vero sint nostrum optio, corrupti odit sit! Corporis molestiae a non nemo alias possimus similique dolorum accusantium dicta temporibus veritatis sit ex enim tempore, necessitatibus dolor asperiores amet voluptatem? Aut, blanditiis? Fugit qui eos ad magnam cum laborum nemo mollitia, distinctio quasi officiis vitae ea optio, laudantium quia reiciendis? Neque sint pariatur sequi repellat. Fugiat beatae repellat quis, temporibus ipsam dolorem iusto laborum exercitationem numquam cum eligendi consequuntur in quae repellendus. Sed eligendi dolor ullam eius nesciunt facilis, hic libero suscipit minima consequatur quisquam natus. Sint doloribus omnis perspiciatis sapiente dolorum nobis libero dolores fuga.
                    </div>

                </div>

            </main>

        </>
    )
}

export default Recipe
