import React from 'react';

const HomeMain = () => {
    return (
        <>

            <div className="Categories">

                {/* Popular Categories */}
                <div className="popDiv">

                    <div className="popContainer">
                        {/* Head line */}
                        <div className="popHead">
                            <span>
                                <em></em>
                            </span>
                            <h2>Popular Categories</h2>
                            <p>Here are some of the most poplular from I Got Hungry</p>
                        </div>
                        {/* Popular card section */}
                        <div className='popCardCont'>
                            <a href="/">
                                <div className="popCard" style={{ backgroundImage: `url("../images/popImage/sample1.jpg")` }}>
                                    <div className="cardInfo">
                                        <p>Vegitarian</p>
                                    </div>
                                </div>
                            </a>
                            <a href="/">
                                <div className="popCard" style={{ backgroundImage: `url("../images/popImage/sample2.jpg")` }}>
                                    <div className="cardInfo">
                                        <p>Healty</p>
                                    </div>
                                </div>
                            </a>
                            <a href="/">
                                <div className="popCard" style={{ backgroundImage: `url("../images/popImage/sample3.jpg")` }}>
                                    <div className="cardInfo">
                                        <p>Soup</p>
                                    </div>
                                </div>
                            </a>
                            <a href="/">
                                <div className="popCard" style={{ backgroundImage: `url("../images/popImage/sample4.jpg")` }}>
                                    <div className="cardInfo">
                                        <p>Quick</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>

                </div>
                {/* All Categories */}
                <div className="allCat">
                    <div className="popHead">
                        <span>
                            <em></em>
                        </span>
                        <h2>All Categories</h2>
                        <p>Here are all of the categories from I Got Hungry</p>
                    </div>
                    <div className="allCatCont">
                        <a href="/">
                            <div className="allCatElement">
                                <img src="../images/allCat/allCat9.jpg" alt="" />
                                <p>Salads</p>
                            </div>
                        </a>
                        <a href="/">
                            <div className="allCatElement">
                                <img src="../images/allCat/allCat8.jpg" alt="" />
                                <p>Soup</p>
                            </div>
                        </a>
                        <a href="/">
                            <div className="allCatElement">
                                <img src="../images/allCat/allCat7.jpg" alt="" />
                                <p>Meal Prep</p>
                            </div>
                        </a>
                        <a href="/">
                            <div className="allCatElement">
                                <img src="../images/allCat/allCat6.jpg" alt="" />
                                <p>Vigan</p>
                            </div>
                        </a>
                        <a href="/">
                            <div className="allCatElement">
                                <img src="../images/allCat/allCat5.jpg" alt="" />
                                <p>Instant Pot</p>
                            </div>
                        </a>
                        <a href="/">
                            <div className="allCatElement">
                                <img src="../images/allCat/allCat4.webp" alt="" />
                                <p>Healty</p>
                            </div>
                        </a>
                        <a href="/">
                            <div className="allCatElement">
                                <img src="../images/allCat/allCat3.webp" alt="" />
                                <p>Vegitarian</p>
                            </div>
                        </a>
                        <a href="/">
                            <div className="allCatElement">
                                <img src="../images/allCat/allCat2.jpg" alt="" />
                                <p>Dinner</p>
                            </div>
                        </a>
                        <a href="/">
                            <div className="allCatElement">
                                <img src="../images/allCat/allCat1.jpg" alt="" />
                                <p>Quick & Easy</p>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="viewAll">
                    <a href="/">All Recipies</a>
                </div>

            </div>

        </>
    )
}

export default HomeMain
