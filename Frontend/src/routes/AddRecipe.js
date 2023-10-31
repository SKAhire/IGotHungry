import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import $ from 'jquery';



const AddRecipe = () => {

  var loop_count = 1;
  const handleAddStep = (e) => {
    e.preventDefault();
    loop_count++;
    var html = "<div className='steps stepCount_loop_count"+loop_count+"'><div className='form-control'><label htmlFor='snumber'>Step Number "+loop_count+"</label><input type='hidden' name='snumber' id='snumber' value={"+loop_count+"} onChange={onChange} /></div>";
    html+= "<div className='form-control'><label htmlFor='stitle'>Step Title</label><input type='text' name='stitle' id='stitle' onChange={onChange} /><p>(*Step Name)</p></div>";
    html+= "<div className='form-control'><label htmlFor='sdesc'>Step Description</label><textarea name='sdesc' id='sdesc' onChange={onChange} ></textarea><p>(Description of the step)</p></div>";
    html+= "<div className='form-control'><label htmlFor='simage'>Step Image</label><input type='file' name='simage' id='simage' onChange={onChange} /><p>(size recommended)</p></div>";
    html+= "<div className='logBtn stepBtn'><button onClick={handleRemoveStep}>Remove Step</button></div></div>"

    $('#addStep').append(html)
  }

  const handleRemoveStep = ()=>{

  }

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

            <form  method='Post'>
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
                  <input type="file" name='image' id='image' onChange={onChange} />
                  <p>(size recommended)</p>
                </div>
                <div className='form-control'>
                  <label htmlFor="cuisine">Recipe cuisine</label>
                  <input type="text" name='cuisine' id='cuisine' onChange={onChange} />

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
                <textarea name='summary' id='summary' onChange={onChange} ></textarea>
                <p>(Description of the recipe)</p>
              </div>

              <div className="stepCont">

                <h3>Recipe Steps</h3>

                <div id="addStep">

                  <div className="steps">

                    <div className='form-control'>
                      <label htmlFor="snumber">Step Number 1</label>
                      <input type="hidden" name='snumber' id='snumber' value={1} onChange={onChange} />
                    </div>
                    <div className='form-control'>
                      <label htmlFor="stitle">Step Title</label>
                      <input type="text" name='stitle' id='stitle' onChange={onChange} />
                      <p>(*Step Name)</p>
                    </div>
                    <div className='form-control'>
                      <label htmlFor="sdesc">Step Description</label>
                      <textarea name='sdesc' id='sdesc' onChange={onChange} ></textarea>
                      <p>(Description of the step)</p>
                    </div>
                    <div className='form-control'>
                      <label htmlFor="simage">Step Image</label>
                      <input type="file" name='simage' id='simage' onChange={onChange} />
                      <p>(size recommended)</p>
                    </div>

                    <div className="logBtn stepBtn">
                      <button onClick={handleRemoveStep}>Remove Step</button>
                    </div>

                  </div>

                </div>

                <div className="logBtn stepBtn">
                  <button onClick={handleAddStep}>Add Step</button>
                </div>
              </div>

              <div className="recIngred">
                <div className='form-control'>
                  <label htmlFor="ingredient">Ingredient Name</label>
                  <input type="text" name='ingredient' id='ingredient' onChange={onChange} />
                  <button>Remove</button>
                  <p>(*Ingredient Name)</p>
                </div>
              </div>
              <div className="recInstru">
                <div className='form-control'>
                  <label htmlFor="instruction">Instruction</label>
                  <input type="text" name='instruction' id='instruction' onChange={onChange} />
                  <button>Remove</button>
                  <p>(Instruction)</p>
                </div>
              </div>

              <h3>Category</h3>
              <div className="recipeCat catCheck">
                <div className='form-control'>
                  <input type="checkbox" name='quick' id='quick' onChange={onChange} />
                  <label htmlFor="quick">Quick</label>
                </div>
                <div className='form-control'>
                  <input type="checkbox" name='salads' id='salads' onChange={onChange} />
                  <label htmlFor="salads">Salads</label>
                </div>
                <div className='form-control'>
                  <input type="checkbox" name='dinner' id='dinner' onChange={onChange} />
                  <label htmlFor="dinner">Dinner</label>
                </div>
                <div className='form-control'>
                  <input type="checkbox" name='vegetarian' id='vegetarian' onChange={onChange} />
                  <label htmlFor="vegetarian">Vegetarian</label>
                </div>
                <div className='form-control'>
                  <input type="checkbox" name='healty' id='healty' onChange={onChange} />
                  <label htmlFor="healty">Healty</label>
                </div>
                <div className='form-control'>
                  <input type="checkbox" name='instantPot' id='instantPot' onChange={onChange} />
                  <label htmlFor="instantPot">Instant Pot</label>
                </div>
                <div className='form-control'>
                  <input type="checkbox" name='vegan' id='vegan' onChange={onChange} />
                  <label htmlFor="vegan">Vegan</label>
                </div>
                <div className='form-control'>
                  <input type="checkbox" name='mealPrep' id='mealPrep' onChange={onChange} />
                  <label htmlFor="mealPrep">Meal Prep</label>
                </div>
                <div className='form-control'>
                  <input type="checkbox" name='soup' id='soup' onChange={onChange} />
                  <label htmlFor="soup">Soup</label>
                </div>

              </div>

              <div className="logBtn">
                <button onSubmit={handleSubmit} type="submit">Submit</button>
              </div>
            </form>


          </div>
        </div>
      </div>

    </>
  )
}

export default AddRecipe
