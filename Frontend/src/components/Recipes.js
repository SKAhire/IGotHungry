import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const Recipes = () => {
    return (
        <>

            <div className="poprecipies">
                <div className="popHead">
                    <span>
                        <em></em>
                    </span>
                    <h2>Popular Recipes</h2>
                    <p>Here are some of the most poplular recipes from I Got Hungry</p>
                </div>
                <OwlCarousel className='owl-theme' loop margin={10} stagePadding={10} dots={true} nav={false} center={true}>

                    <div class='item'>
                        <a href="/">
                            <div className="recipesCard" style={{ background: `url("../images/popImage/sample4.jpg") center center` }}>
                                <div className="recipeInfo">
                                    <h6>Kale Apple Salad with Crispy Shallots</h6>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class='item'>
                        <a href="/">
                            <div className="recipesCard" style={{ background: `url("../images/popImage/sample3.jpg") center center` }}>
                                <div className="recipeInfo">
                                    <h6>Kale Apple Salad with Crispy Shallots</h6>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class='item'>
                        <a href="/">
                            <div className="recipesCard" style={{ background: `url("../images/popImage/sample2.jpg") center center` }}>
                                <div className="recipeInfo">
                                    <h6>Kale Apple Salad with Crispy Shallots</h6>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class='item'>
                        <a href="/">
                            <div className="recipesCard" style={{ background: `url("../images/popImage/sample1.jpg") center center` }}>
                                <div className="recipeInfo">
                                    <h6>Kale Apple Salad with Crispy Shallots</h6>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class='item'>
                        <a href="/">
                            <div className="recipesCard" style={{ background: `url("../images/popImage/sample4.jpg") center center` }}>
                                <div className="recipeInfo">
                                    <h6>Kale Apple Salad with Crispy Shallots</h6>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class='item'>
                        <a href="/">
                            <div className="recipesCard" style={{ background: `url("../images/popImage/sample3.jpg") center center` }}>
                                <div className="recipeInfo">
                                    <h6>Kale Apple Salad with Crispy Shallots</h6>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class='item'>
                        <a href="/">
                            <div className="recipesCard" style={{ background: `url("../images/popImage/sample2.jpg") center center` }}>
                                <div className="recipeInfo">
                                    <h6>Kale Apple Salad with Crispy Shallots</h6>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class='item'>
                        <a href="/">
                            <div className="recipesCard" style={{ background: `url("../images/popImage/sample1.jpg") center center` }}>
                                <div className="recipeInfo">
                                    <h6>Kale Apple Salad with Crispy Shallots</h6>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class='item'>
                        <a href="/">
                            <div className="recipesCard" style={{ background: `url("../images/popImage/sample4.jpg") center center` }}>
                                <div className="recipeInfo">
                                    <h6>Kale Apple Salad with Crispy Shallots</h6>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class='item'>
                        <a href="/">
                            <div className="recipesCard" style={{ background: `url("../images/popImage/sample3.jpg") center center` }}>
                                <div className="recipeInfo">
                                    <h6>Kale Apple Salad with Crispy Shallots</h6>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class='item'>
                        <a href="/">
                            <div className="recipesCard" style={{ background: `url("../images/popImage/sample2.jpg") center center` }}>
                                <div className="recipeInfo">
                                    <h6>Kale Apple Salad with Crispy Shallots</h6>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class='item'>
                        <a href="/">
                            <div className="recipesCard" style={{ backgroundImage: `url("../images/popImage/sample1.jpg")` }}>
                                <div className="recipeInfo">
                                    <h6>Kale Apple Salad with Crispy Shallots</h6>
                                </div>
                            </div>
                        </a>
                    </div>

                </OwlCarousel>


            </div>

            <div className="latestRes">
                <div className="popHead">
                    <span>
                        <em></em>
                    </span>
                    <h2>Latest Recipes</h2>
                    <p>Here are the latest recipes from I Got Hungry</p>
                </div>
                <div className="latestList">
                    <div className="latestInfo">
                        <img src="https://pinchofyum.com/cdn-cgi/image/width=360,height=360,fit=crop/wp-content/uploads/Chimichurri-Shrimp-4.jpg" alt="" />
                        <div className="latestIditals">
                            <p className="latestDate">
                                OCTOBER 2, 2023
                            </p>
                            <a href="/"><h4>Chimichurri Shrimp with Tomatoes</h4></a>
                            <p className="latestSum">
                                Saucy, punchy, and delightful Chimichurri Shrimp! Served with a tomato salad, a pile of hot steamy rice, and a dollop of creamy tzatziki.
                            </p>
                            <a href="/">Continue Reading</a>
                        </div>
                    </div>
                    <div className="latestInfo">
                        <img src="https://pinchofyum.com/cdn-cgi/image/width=360,height=360,fit=crop/wp-content/uploads/Chimichurri-Shrimp-4.jpg" alt="" />
                        <div className="latestIditals">
                            <p className="latestDate">
                                OCTOBER 2, 2023
                            </p>
                            <a href="/"><h4>Chimichurri Shrimp with Tomatoes</h4></a>
                            <p className="latestSum">
                                Saucy, punchy, and delightful Chimichurri Shrimp! Served with a tomato salad, a pile of hot steamy rice, and a dollop of creamy tzatziki.
                            </p>
                            <a href="/">Continue Reading</a>
                        </div>
                    </div>
                    <div className="latestInfo">
                        <img src="https://pinchofyum.com/wp-content/uploads/Creamy-Baked-Orzo-Square-300x300.png" alt="" />
                        <div className="latestIditals">
                            <p className="latestDate">
                                OCTOBER 2, 2023
                            </p>
                            <a href="/"><h4>Chimichurri Shrimp with Tomatoes</h4></a>
                            <p className="latestSum">
                                Saucy, punchy, and delightful Chimichurri Shrimp! Served with a tomato salad, a pile of hot steamy rice, and a dollop of creamy tzatziki.
                            </p>
                            <a href="/">Continue Reading</a>
                        </div>
                    </div>
                    <div className="latestInfo">
                        <img src="https://pinchofyum.com/wp-content/uploads/Creamy-Baked-Orzo-Square-300x300.png" alt="" />
                        <div className="latestIditals">
                            <p className="latestDate">
                                OCTOBER 2, 2023
                            </p>
                            <a href="/"><h4>Chimichurri Shrimp with Tomatoes</h4></a>
                            <p className="latestSum">
                                Saucy, punchy, and delightful Chimichurri Shrimp! Served with a tomato salad, a pile of hot steamy rice, and a dollop of creamy tzatziki.
                            </p>
                            <a href="/">Continue Reading</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="viewAll">
                <a href="/">All Recipies</a>
            </div>
        </>
    )
}

export default Recipes
