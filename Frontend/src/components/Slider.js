import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const Slider = () => {
    const images = [
        "http://www.ansonika.com/foogra/revolution-slider/assets/images/slide_3.jpg",
        "http://www.ansonika.com/foogra/revolution-slider/assets/images/slide_2.jpg",
        "http://www.ansonika.com/foogra/revolution-slider/assets/images/slide_1.jpg",
    ];

    return (
        <Slide className="slider">
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                    <div className="sliderDiv">
                    </div>
                    <div className="slideInfo">
                        <p>SIMPLE RECIPES MADE FOR
                            real, actual, everyday life.</p>
                        <a href="/">All Recipies</a>
                    </div>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                    <div className="sliderDiv">
                    </div>
                    <div className="slideInfo">
                    <p>We’ve organized these recipes every way we could think of so you don't have to! <br />no matter how you browse, we’re sure you’ll find just what you were looking for</p>
                        <a href="/">All Recipies</a>
                    </div>
                    
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                    <div className="sliderDiv">
                    </div>
                    <div className="slideInfo">
                    <p>Out of all the many recipes on I Got Hungry, these are our shining stars - <br />the recipes we come back to again and again (and again).</p>
                        <a href="/">All Recipies</a>
                    </div>
                    
                </div>
            </div>
        </Slide>
    );
}

export default Slider
