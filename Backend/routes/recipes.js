const express = require('express');
const router = express.Router();
const Recipes = require('../models/Recipes');
const { header } = require('express-validator');


//fetch recipes
router.get('/get-recipes', async (req, res) => {
    try {
        const recipes = await Recipes.find();
        res.json(recipes)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});


//Add recipes
router.post('/addrecipies', async (req, res, next) => {

    let success = false

    try {
        const { title,author, readyInMin, servings, image, summary, cuisine, course, categoiry, quick, dinner, vegetarian, healty, instantPot, vegan, mealPrep, soup, salads, steps, number, stitle, sdesc, simage, recipeInfo, ingredients, instructions } = req.body

        const recipes = await Recipes.create({
            title: title,
            author:author,
            readyInMin: readyInMin,
            servings: servings,
            image: image,
            summary: summary,
            cuisine: cuisine,
            course: course,
            categoiry:categoiry,
            quick: quick,
            dinner: dinner,
            vegetarian: vegetarian,
            healty: healty,
            instantPot: instantPot,
            vegan: vegan,
            mealPrep: mealPrep,
            soup: soup,
            salads: salads,
            steps:steps,
            number: number,
            stitle: stitle,
            sdesc: sdesc,
            simage: simage,
            recipeInfo: recipeInfo,
            ingredients: ingredients,
            instructions: instructions,
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


//edit recipes
router.put('/editrecipies/:id', async (req, res) => {
    let success = false

    try {
        const findRecipe = await Recipes.findById(req.params.id);
        if (!findRecipe) {
            return res.status(500).json({ success, error: "Internal Server Error" })
        }
        const { title,author, readyInMin, servings, image, summary, cuisine, course, categoiry, quick, dinner, vegetarian, healty, instantPot, vegan, mealPrep, soup, salads, steps, number, stitle, sdesc, simage, recipeInfo, ingredients, instructions } = req.body

        const editrecipes = await Recipes.findByIdAndUpdate(req.params.id, {
            title: title,
            author:author,
            readyInMin: readyInMin,
            servings: servings,
            image: image,
            summary: summary,
            cuisine: cuisine,
            course: course,
            categoiry:categoiry,
            quick: quick,
            dinner: dinner,
            vegetarian: vegetarian,
            healty: healty,
            instantPot: instantPot,
            vegan: vegan,
            mealPrep: mealPrep,
            soup: soup,
            salads: salads,
            steps:steps,
            number: number,
            stitle: stitle,
            sdesc: sdesc,
            simage: simage,
            recipeInfo: recipeInfo,
            ingredients: ingredients,
            instructions: instructions,
        });

        console.log(editrecipes)
        success = true
        res.json({ success, editrecipes })
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error");
    }

});


//delete recipes

router.delete('/deleterecipes/:id', async (req, res) => {

    let success = false;

    try {
        const findRecipe = await Recipes.findById(req.params.id);
        if (!findRecipe) {
            return res.status(500).json({ success, error: "Internal Server Error" })
        }
        const deleterecipes = await Recipes.findByIdAndDelete(req.params.id)

        if (deleterecipes) {
            res.json({ "Success": "Recipe has been deleted" });
            res.status(200).send()
        }
        console.log(deleterecipes)
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error");
    }
})
module.exports = router;