import React from 'react'
import { Link } from 'react-router-dom'

const Recipes = () => {
  return (
    <>

      <main>
        <div className="Banner" style={{ 'backgroundImage': `url("../images/banner/banner_1.jpg")` }}>
          <div className="bannerDiv">
          </div>
          <div className="bannerInfo">
            <h1>RECIPES</h1>
            <p className="path"><Link to="/">Home</Link>/Recipes</p>
            <p>We’ve organized these recipes every way we could think of so you don't have to!
              no matter how you browse, we’re sure you’ll find just what you were looking for.
            </p>
          </div>
        </div>

        <div className="allRecipes">

          <div className="recCont">
            <div className="popHead">
              <span>
                <em></em>
              </span>
              <h2>All Recipes</h2>
              <p>Here are all of the recipes from I Got Hungry</p>
            </div>

            <div className="recList">
              <div className="recInfo">
                <Link to='/'>
                  <img src="https://pinchofyum.com/wp-content/uploads/Chimichurri-Shrimp-4-400x400.jpg" alt="" />
                  <h2>Chimichurri Shrimp with Tomatoes</h2>
                </Link>
              </div>
              <div className="recInfo">
                <Link to='/'>
                  <img src="https://pinchofyum.com/wp-content/uploads/Chimichurri-Shrimp-4-400x400.jpg" alt="" />
                  <h2>Chimichurri Shrimp with Tomatoes</h2>
                </Link>
              </div>
              <div className="recInfo">
                <Link to='/'>
                  <img src="https://pinchofyum.com/wp-content/uploads/Chimichurri-Shrimp-4-400x400.jpg" alt="" />
                  <h2>Chimichurri Shrimp with Tomatoes</h2>
                </Link>
              </div>
              <div className="recInfo">
                <Link to='/'>
                  <img src="https://pinchofyum.com/wp-content/uploads/Chimichurri-Shrimp-4-400x400.jpg" alt="" />
                  <h2>Chimichurri Shrimp with Tomatoes</h2>
                </Link>
              </div>
              <div className="recInfo">
                <Link to='/'>
                  <img src="https://pinchofyum.com/wp-content/uploads/Chimichurri-Shrimp-4-400x400.jpg" alt="" />
                  <h2>Chimichurri Shrimp with Tomatoes</h2>
                </Link>
              </div>
              <div className="recInfo">
                <Link to='/'>
                  <img src="https://pinchofyum.com/wp-content/uploads/Chimichurri-Shrimp-4-400x400.jpg" alt="" />
                  <h2>Chimichurri Shrimp with Tomatoes</h2>
                </Link>
              </div>
              <div className="recInfo">
                <Link to='/'>
                  <img src="https://pinchofyum.com/wp-content/uploads/Chimichurri-Shrimp-4-400x400.jpg" alt="" />
                  <h2>Chimichurri Shrimp with Tomatoes</h2>
                </Link>
              </div>
              <div className="recInfo">
                <Link to='/'>
                  <img src="https://pinchofyum.com/wp-content/uploads/Chimichurri-Shrimp-4-400x400.jpg" alt="" />
                  <h2>Chimichurri Shrimp with Tomatoes</h2>
                </Link>
              </div>
            </div>
          </div>

        </div>

      </main>

    </>
  )
}

export default Recipes
