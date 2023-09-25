const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const recipesSchema = new Schema({
    recipeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'recipesinfo'
    },
    readyInMin: {
        type: String,
        require: true
    },
    servings: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    summary: {
        type: String,
        require: true
    },
    dishTypes: {
        type: String,
        require: true
    },
    instructions: {
        type: String,
        require: true
    },
    steps: {
        type: Array,
        require: true
    },
    step: {
        type: String,
        require: true
    },
    
    
})

module.exports = mongoose.model('Recipes', recipesSchema)