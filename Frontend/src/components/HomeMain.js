import React from 'react';

const HomeMain = () => {
    return (
        <>

            <div className="popDiv">

                <div className="popContainer">
                    <div className="popHead">
                        <span>
                            <em></em>
                        </span>
                        <h2>Popular Categories</h2>
                        <p>Here are some of the most poplular from I Got Hungry</p>
                    </div>
                    <div className='popCardCont'>
                        <a href="/">
                            <div className="popCard" style={{ backgroundImage: `url("../popImage/sample1.jpg")` }}>
                                <div className="cardInfo">
                                    <p>Vegitarian</p>
                                </div>
                            </div>
                        </a>
                        <a href="/">
                            <div className="popCard" style={{ backgroundImage: `url("../popImage/sample2.jpg")` }}>
                                <div className="cardInfo">
                                    <p>Healty</p>
                                </div>
                            </div>
                        </a>
                        <a href="/">
                            <div className="popCard" style={{ backgroundImage: `url("../popImage/sample3.jpg")` }}>
                                <div className="cardInfo">
                                    <p>Soup</p>
                                </div>
                            </div>
                        </a>
                        <a href="/">
                            <div className="popCard" style={{ backgroundImage: `url("../popImage/sample4.jpg")` }}>
                                <div className="cardInfo">
                                    <p>Quick</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="viewAll">
                        <a href="/">All Recipies</a>
                    </div>
                </div>

            </div>

        </>
    )
}

export default HomeMain
