const express = require('express');
const router = express.Router();
const Recipes = require('../models/Recipes');
const RecipesInfo = require('../models/RecipeInfo');
const { header } = require('express-validator');

router.get('/', (req, res) => {
    res.send("this is recipes");
});

router.post('/recipiesinfo', async (req, res, next) => {

    let success = false

    try {
        const { title, veg, cheap, quick, sustainable, iname, inameclean, iimage, iamount } = req.body

        const recipesinfo = await RecipesInfo.create({
            title: title,
            veg: veg,
            cheap: cheap,
            quick: quick,
            sustainable: sustainable,
            iname: iname,
            inameclean: inameclean,
            iimage: iimage,
            iamount: iamount
        });

        const saveRecipesInfo = await recipesinfo.save();
        console.log(saveRecipesInfo)
        success = true
        const { readyInMin, servings, image, summary, dishTypes, instructions, steps } = req.body

    const recipes = await Recipes.create({
        recipeId: recipesinfo.id,
        readyInMin: readyInMin,
        servings: servings,
        image: image,
        summary: summary,
        dishTypes: dishTypes,
        instructions: instructions,
        steps: steps
    });
    const saveRecipes = await recipes.save();
    console.log(saveRecipes)
    success = true
    res.json({ success, saveRecipes })
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error");
    }

});
router.post('/addrecipies/:id', async (req, res) => {
    let success = false
    
});

module.exports = router;