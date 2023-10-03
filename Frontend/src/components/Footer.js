import React from 'react'

const Footer = () => {
  return (
    <>

      <footer>
        <div className="footerMain">
          <div className="ighMenu">
            <a href="/"><h4>I Got Hungry</h4></a>
            <div className="footerLinks">
              <a href="/">Recipes</a>
              <a href="/">Start Here</a>
              <a href="/">About</a>
              <a href="/">Submit</a>
              <a href="/">Contact</a>
            </div>
          </div>

          <div className="ighLogo">
            <img src="..\logo\logo.png" alt="" />
          </div>

          <div className="ighCat">
            <a href="/"><h4>Categories</h4></a>
            <div className="footerLinks">
              <a href="/">Vegitarian</a>
              <a href="/">Healty</a>
              <a href="/">Soup</a>
              <a href="/">Quick</a>
              <a href="/">View All</a>
            </div>
          </div>


        </div>
        
        <div className="ighSocial">
          <a href="/"><i className="fa-brands fa-facebook-f"></i></a>
          <a href="/"><i className="fa-brands fa-instagram"></i></a>
          <a href="/"><i className="fa-brands fa-pinterest"></i></a>
          <a href="https://github.com/SKAhire"><i className="fa-brands fa-github"></i></a>
        </div>

        <div className="ccSection">
          © 2023 I Got Hungry. All Rights Reserved.
        </div>
      </footer>

    </>
  )
}

export default Footer
