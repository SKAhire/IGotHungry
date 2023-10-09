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
                                <a href="#mainRecipe"><strong>&#x2B07;</strong> Jump to Recipie</a>
                            </div>
                        </div>
                        <div className="recipeSteps">
                            <h2>How To Make These Roasted Corn and Fried Egg Tacos</h2>

                            <div className="stepBody">
                                <h3>Step 1: Arrange cheese in a ring.</h3>
                                <p>Add your shredded cheese directly to a hot pan, arranging it in a little ring. (I use a cast iron or nonstick pan for this.)
                                </p>
                                <img src="https://pinchofyum.com/wp-content/uploads/Elote-Fried-Egg-Bowls-1-768x512.jpg" alt="" />
                            </div>
                            <div className="stepBody">
                                <h3>Step 2: Add the egg.</h3>
                                <p>Pop it right in the center of your cheese ring.
                                </p>
                                <img src="https://pinchofyum.com/wp-content/uploads/Elote-Fried-Egg-Bowls-3-768x512.jpg" alt="" />
                            </div>
                            <div className="stepBody">
                                <h3>Step 3: Add corn!</h3>
                                <p>Yes, corn. Fresh, frozen, cooked, raw, any and all of it is good. Right now I’m really into the Mexican roasted corn from Trader Joe’s.
                                </p>
                                <img src="https://pinchofyum.com/wp-content/uploads/Elote-Fried-Egg-Bowls-4-768x512.jpg" alt="" />
                            </div>
                            <div className="stepBody">
                                <h3>Step 4: Tighten up the edges in a bit.</h3>
                                <p>You don’t have to do this but I like to kind of nudge those crispy edges in so your egg is a bit more contained.
                                </p>
                                <img src="https://pinchofyum.com/wp-content/uploads/Elote-Fried-Egg-Bowls-5-768x512.jpg" alt="" />
                            </div>
                            <div className="stepBody">
                                <h3>Step 5: Transfer to a tortilla.</h3>
                                <p>I like to have refried black beans waiting as a little bed for the egg. Boop!
                                </p>
                                <img src="https://pinchofyum.com/wp-content/uploads/Fried-Egg-Tacos-1-768x512.jpg" alt="" />
                            </div>
                            <div className="stepBody">
                                <h3>Step 6: Make her pretty!</h3>
                                <p>Pickled onions, cilantro, and cotjia cheese are highly recommended. I also like that spicy green zhoug on there!
                                </p>
                                <img src="https://pinchofyum.com/wp-content/uploads/Fried-Egg-Tacos-2-768x512.jpg" alt="" />
                            </div>

                        </div>

                        <div className="mainRecipe" id="mainRecipe">
                            <div className="mainInfo">
                                <img src="https://pinchofyum.com/wp-content/uploads/Fried-Egg-Tacos-4-768x1152.jpg" alt="" />
                                <h2>Roasted Corn And Fried Egg Tacos</h2>
                                <ul>
                                    <li><span>Course: </span> Main Course</li>
                                    <li><span>Cuisine: </span> Indian</li>
                                    <li><span>Prep Time: </span> 10minutes</li>
                                    <li><span>Cook Time: </span> 45minutes</li>
                                    <li><span>Total Time: </span> 55minutes</li>
                                    <li><span>Servings: </span> 4 Portions</li>
                                    <li><span>Author: </span> Guru</li>
                                </ul>
                            </div>
                            <div className="mainIn">
                                <div className="ingredients">
                                    <h3>Ingredients</h3>
                                    <ul>
                                        <li className='line_through'>
                                            <input type="checkbox" name="checked" id="checked" />
                                            <span>4 eggs</span>
                                        </li>
                                        <li className='line_through'>
                                            <input type="checkbox" name="checked" id="checked" />
                                            <span>1 cup melty quesadilla-style cheese</span>
                                        </li>
                                        <li className='line_through'>
                                            <input type="checkbox" name="checked" id="checked" />
                                            <span>1 cup frozen roasted corn (see notes)</span>
                                        </li>
                                        <li className='line_through'>
                                            <input type="checkbox" name="checked" id="checked" />
                                            <span>3–4 tortillas</span>
                                        </li>
                                        <li className='line_through'>
                                            <input type="checkbox" name="checked" id="checked" />
                                            <span>1/2 cup refried black beans</span>
                                        </li>
                                        <li className='line_through'>
                                            <input type="checkbox" name="checked" id="checked" />
                                            <span>1/4 cup pickled red onions</span>
                                        </li>
                                        <li className='line_through'>
                                            <input type="checkbox" name="checked" id="checked" />
                                            <span>1/4 cup chopped cilantro</span>
                                        </li>
                                        <li className='line_through'>
                                            <input type="checkbox" name="checked" id="checked" />
                                            <span>1/4 cup Cotjia cheese</span>
                                        </li>
                                        <li className='line_through'>
                                            <input type="checkbox" name="checked" id="checked" />
                                            <span>aji verde, zhoug, or salsa verde</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="instructions">
                                    <h3>Instructions</h3>
                                    <ol>
                                        <li>Heat a nonstick or cast iron skillet over medium heat. Add your cheese in a ring shape.</li>
                                        <li>Once it starts to melt a little bit, crack an egg directly into the center. </li>
                                        <li>Spoon a bit of roasted corn around the edge of the egg. </li>
                                        <li>Use a spatula to pull the edges in a bit once the cheese starts to get golden brown; you don’t have to do this, but I find that it helps to contain the egg a bit and expose those golden brown lacy edges.</li>
                                        <li>Cover and let it cook for a minute or two.</li>
                                        <li>When the egg is cooked to your liking (I prefer it with the whites set and the yolk still a bit runny), transfer the egg to tortilla with refried black beans.</li>
                                        <li>Finish with pickled onions, cilantro, Cotija, and your sauce of choice. The crispy cheese edge. The runny yolk. The creamy beans, spicy sauce, tangy onions. Oh my word. YUM.</li>
                                    </ol>
                                </div>
                                <div className="tag">
                                    <h3>Filed Under </h3>
                                    <ul>
                                        <li>
                                            <Link>All Recipes</Link>
                                        </li>
                                        <li>
                                            <Link>Tacos</Link>
                                        </li>
                                        <li>
                                            <Link>Quick & Easy</Link>
                                        </li>
                                        <li>
                                            <Link>Eggs</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="comment">
                                <div className="lComment">
                                    <h3>Leave a Comment</h3>
                                    <form action="">
                                        <div className='form-control'>
                                            <label htmlFor="name">Name</label>
                                            <input type="text" name='name' id='name' />
                                        </div>
                                        <div className='form-control'>
                                            <label htmlFor="email">Email</label>
                                            <input type="email" name='email' id='email' />
                                        </div>
                                        <div className='form-control'>
                                            <label htmlFor="comment">Comment</label>
                                            <textarea name="comment" id="comment" cols="10" rows="10"></textarea>
                                        </div>
                                        <button type="submit">Submit</button>
                                    </form>
                                </div>
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
