import React from 'react'
import { Link } from 'react-router-dom'

const Categories = () => {
    return (
        <>

            {/* Popular Categories */}
            <div className="popDiv">

                <div className="popContainer">
                    {/* Head line */}
                    <div className="popHead">
                        <span>
                            <em></em>
                        </span>
                        <h2>Popular Categories</h2>
                        <p>Here are some of the most poplular categories from I Got Hungry</p>
                    </div>
                    {/* Popular card section */}
                    <div className='popCardCont'>
                        <Link to="/">
                            <div className="popCard" style={{ backgroundImage: `url("../images/popImage/sample1.jpg")` }}>
                                <div className="cardInfo">
                                    <p>Vegitarian</p>
                                </div>
                            </div>
                        </Link>
                        <Link to="/">
                            <div className="popCard" style={{ backgroundImage: `url("../images/popImage/sample2.jpg")` }}>
                                <div className="cardInfo">
                                    <p>Healty</p>
                                </div>
                            </div>
                        </Link>
                        <Link to="/">
                            <div className="popCard" style={{ backgroundImage: `url("../images/popImage/sample3.jpg")` }}>
                                <div className="cardInfo">
                                    <p>Soup</p>
                                </div>
                            </div>
                        </Link>
                        <Link to="/">
                            <div className="popCard" style={{ backgroundImage: `url("../images/popImage/sample4.jpg")` }}>
                                <div className="cardInfo">
                                    <p>Quick</p>
                                </div>
                            </div>
                        </Link>
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
                    <Link to="/">
                        <div className="allCatElement">
                            <img src="../images/allCat/allCat9.jpg" alt="" />
                            <p>Salads</p>
                        </div>
                    </Link>
                    <Link to="/">
                        <div className="allCatElement">
                            <img src="../images/allCat/allCat8.jpg" alt="" />
                            <p>Soup</p>
                        </div>
                    </Link>
                    <Link to="/">
                        <div className="allCatElement">
                            <img src="../images/allCat/allCat7.jpg" alt="" />
                            <p>Meal Prep</p>
                        </div>
                    </Link>
                    <Link to="/">
                        <div className="allCatElement">
                            <img src="../images/allCat/allCat6.jpg" alt="" />
                            <p>Vigan</p>
                        </div>
                    </Link>
                    <Link to="/">
                        <div className="allCatElement">
                            <img src="../images/allCat/allCat5.jpg" alt="" />
                            <p>Instant Pot</p>
                        </div>
                    </Link>
                    <Link to="/">
                        <div className="allCatElement">
                            <img src="../images/allCat/allCat4.webp" alt="" />
                            <p>Healty</p>
                        </div>
                    </Link>
                    <Link to="/">
                        <div className="allCatElement">
                            <img src="../images/allCat/allCat3.webp" alt="" />
                            <p>Vegitarian</p>
                        </div>
                    </Link>
                    <Link to="/">
                        <div className="allCatElement">
                            <img src="../images/allCat/allCat2.jpg" alt="" />
                            <p>Dinner</p>
                        </div>
                    </Link>
                    <Link to="/">
                        <div className="allCatElement">
                            <img src="../images/allCat/allCat1.jpg" alt="" />
                            <p>Quick & Easy</p>
                        </div>
                    </Link>
                </div>
            </div>

            <div className="viewAll">
                <Link to="/recipes">All Recipies</Link>
            </div>

        </>
    )
}

export default Categories
