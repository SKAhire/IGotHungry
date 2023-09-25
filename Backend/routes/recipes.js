const express = require('express');
const router = express.Router();
const Recipes = require('../models/Recipes');
const { header } = require('express-validator');

router.get('/', (req, res) => {
    res.send("this is recipes");
});

router.post('/addrecipies', async (req, res, next) => {

    let success = false

    try {
        const { title, veg, cheap, quick, sustainable, iname, inameclean, iimage, iamount, readyInMin, servings, image, summary, dishTypes, instructions, steps } = req.body

        const recipes = await Recipes.create({
            title: title,
            veg: veg,
            cheap: cheap,
            quick: quick,
            sustainable: sustainable,
            iname: iname,
            inameclean: inameclean,
            iimage: iimage,
            iamount: iamount,
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
router.put('/editrecipies/:id', async (req, res) => {
    let success = false

    try {
        const findRecipe = await Recipes.findById(req.params.id);
        if (!findRecipe) {
            return res.status(500).json({ success, error: "Internal Server Error" })
        }
        const { title, veg, cheap, quick, sustainable, iname, inameclean, iimage, iamount, readyInMin, servings, image, summary, dishTypes, instructions, steps } = req.body

        const editrecipes = await Recipes.findByIdAndUpdate(req.params.id,{
            title: title,
            veg: veg,
            cheap: cheap,
            quick: quick,
            sustainable: sustainable,
            iname: iname,
            inameclean: inameclean,
            iimage: iimage,
            iamount: iamount,
            readyInMin: readyInMin,
            servings: servings,
            image: image,
            summary: summary,
            dishTypes: dishTypes,
            instructions: instructions,
            steps: steps
        });

        console.log(editrecipes)
        success = true
        res.json({ success, editrecipes })
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error");
    }

});

router.delete('/deleterecipes/:id', async (req, res) => {

    let success = false;
    
    try {
        const findRecipe = await Recipes.findById(req.params.id);
        if (!findRecipe) {
            return res.status(500).json({ success, error: "Internal Server Error" })
        }
        const deleterecipes = await Recipes.findByIdAndDelete( req.params.id)

        if(deleterecipes){
            res.json({ "Success": "Recipe has been deleted"});
            res.status(200).send()
        }
        console.log(deleterecipes)
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error");
    }
})
module.exports = router;