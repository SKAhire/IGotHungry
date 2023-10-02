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
                <OwlCarousel className='owl-theme' loop margin={10} stagePadding={10} dots={false} nav={false} center={true}>

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
                <div className="latestInfo">
                    
                </div>
            </div>

        </>
    )
}

export default Recipes
