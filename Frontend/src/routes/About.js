import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>

      <main>

        <div className="Banner" style={{ 'backgroundImage': `url("../images/banner/banner_2.jpg")` }}>
          <div className="bannerDiv">
          </div>
          <div className="bannerInfo">
            <h1>ABOUT</h1>
            <p className="path">
              <Link to="/">Home</Link>/About
            </p>
            <p>
              Here is the step by step guideance to create RecipeName
            </p>
          </div>
        </div>

      </main>

    </>
  )
}

export default About
