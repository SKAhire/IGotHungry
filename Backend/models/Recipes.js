const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const recipesSchema = new Schema({
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
    title: {
        type: String,
        require: true
    },
    veg: {
        type: Boolean,
        require: true
    },
    healty: {
        type: Boolean,
        require: true
    },
    cheap: {
        type: Boolean,
        require: true
    },
    quick: {
        type: Boolean,
        require: true
    },
    sustainable: {
        type: Boolean,
        require: true
    },
    iname: {
        type: String,
        require: true
    },
    inameclean: {
        type: String,
        require: true
    },
    iimage: {
        type: String,
        require: true
    },
    iamount: {
        type: String,
        require: true
    },
    
})

module.exports = mongoose.model('Recipes', recipesSchema)