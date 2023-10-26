import React from 'react'
import { Link, useNavigate } from 'react-router-dom'



const AddRecipe = () => {


  const navigate = useNavigate();
  const onChange = (e) => {
    e.preventDefault();
  }

  const handleSubmit = () => {
    localStorage.removeItem('token')
    navigate('/')
  }

  return (
    <>

      <div className="Banner" style={{ 'backgroundImage': `url("../images/banner/banner_2.jpg")` }}>
        <div className="bannerDiv">
        </div>
        <div className="bannerInfo">
          <h1>Add Recipes</h1>
          <p className="path">
            <Link to="/">Home</Link>/<Link to="/my-profile/recipes">Recipes</Link>/Add Recipes
          </p>
          <p>
            Here is the step by step guideance to create RecipeName
          </p>
        </div>
      </div>

      <div className="recipeCont">
        <div className="loginF">
          <div className="lComment">
            <h3>Add Recipe</h3>

            <form onSubmit={handleSubmit} method='Post'>
              <div className='form-control'>
                <label htmlFor="title">Recipe Title</label>
                <input type="text" name='title' id='title' onChange={onChange} />
                <p>(*Recipe Name)</p>
              </div>
              <div className="recipeCat">
                <div className='form-control'>
                  <label htmlFor="readyInMin">Ready In Minutes</label>
                  <select name='readyInMin' id='readyInMin' onChange={onChange} >
                    <option value="5 min">5 min</option>
                    <option value="10 min">10 min</option>
                    <option value="15 min">15 min</option>
                    <option value="30 min">30 min</option>
                    <option value="45 min">45 min</option>
                    <option value="1 hrs">1 hrs</option>
                    <option value="2 hrs">2 hrs</option>
                    <option value="2 hrs +">2 hrs +</option>
                  </select>
                  <p>(Approce time require)</p>
                </div>
                <div className='form-control'>
                  <label htmlFor="servings">Recipe Servings</label>
                  <input type="number" name='servings' id='servings' onChange={onChange} min={0} max={20} />
                  <p>(based on quantity of the ingredients)</p>
                </div>
                <div className='form-control'>
                  <label htmlFor="image">Recipe Image</label>
                  <input type="file" name='image' id='image' onChange={onChange} min={0} max={20} />
                  <p>(size recommended)</p>
                </div>
                <div className='form-control'>
                  <label htmlFor="cuisine">Recipe cuisine</label>
                  <input type="text" name='cuisine' id='cuisine' onChange={onChange} min={0} max={20} />

                </div>
                <div className='form-control'>
                  <label htmlFor="course">Recipe Course</label>
                  <select name='course' id='course' onChange={onChange} >
                    <option value="Main Course">Main Course</option>
                    <option value="Starter Course">Starter Course</option>
                    <option value="Disert Course">Disert Course</option>
                    <option value="Other">Other</option>
                  </select>

                </div>
              </div>

              <div className='form-control'>
                <label htmlFor="summary">Recipe Summary</label>
                <textarea type="file" name='summary' id='summary' onChange={onChange} ></textarea>
                <p>(Description of the recipe)</p>
              </div>



              <div className="logBtn">
                <button type="submit">Submit</button>
              </div>
            </form>


          </div>
        </div>
      </div>

    </>
  )
}

export default AddRecipe
