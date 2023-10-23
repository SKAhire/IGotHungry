import React, { useState } from 'react'
import RecipeContext from './RecipeContext';
// import { useNavigate } from 'react-router-dom';


const RecipeState = (props) => {

  const host = "http://localhost:5000";
  // let navigate = useNavigate();
  const recipeInitial = [];
    const [recipes, setRecipe] = useState(recipeInitial);

    // get recipes
    const getRecipes = async ()=>{
      const response = await fetch(`${host}/recipes/get-recipes`,{
          method: 'GET',
      })
      const json = await response.json();
      setRecipe(json)
  }

  return (
    <RecipeContext.Provider value={{recipes, getRecipes}}>
        {props.children}
    </RecipeContext.Provider>
  )
}

export default RecipeState
