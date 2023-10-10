import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>

      <footer>
        <div className="footerMain">
          <div className="ighMenu">
            <Link to="/"><h4>I Got Hungry</h4></Link>
            <div className="footerLinks">
              <Link to="/recipes">Recipes</Link>
              <Link to="/recipes/id">Start Here</Link>
              <Link to="/about">About</Link>
              <Link to="/submit">Submit</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>

          <div className="ighLogo">
            <img src="..\logo\logo.png" alt="" />
          </div>

          <div className="ighCat">
            <Link to="/"><h4>Categories</h4></Link>
            <div className="footerLinks">
              <Link to="/">Vegitarian</Link>
              <Link to="/">Healty</Link>
              <Link to="/">Soup</Link>
              <Link to="/">Quick</Link>
              <Link to="/">View All</Link>
            </div>
          </div>


        </div>
        
        <div className="ighSocial">
          <Link to="/"><i className="fa-brands fa-facebook-f"></i></Link>
          <Link to="/"><i className="fa-brands fa-instagram"></i></Link>
          <Link to="/"><i className="fa-brands fa-pinterest"></i></Link>
          <Link to="https://github.com/SKAhire"><i className="fa-brands fa-github"></i></Link>
        </div>

        <div className="ccSection">
          © 2023 I Got Hungry. All Rights Reserved.
        </div>
      </footer>

    </>
  )
}

export default Footer
