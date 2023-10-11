const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const recipesSchema = new Schema({
    title: {
        type: String,
        require: true
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
    cuisine: {
        type: String,
        require: true
    },
    course: {
        type: String,
        require: true
    },
    categoiry: {
        type: Object,
        require: true,
        quick: {
            type: Boolean,
            require: true,
            default: false
        },
        dinner: {
            type: Boolean,
            require: true,
            default: false
        },
        vegetarian: {
            type: Boolean,
            require: true,
            default: false
        },
        healty: {
            type: Boolean,
            require: true,
            default: false
        },
        instantPot: {
            type: Boolean,
            require: true,
            default: false
        },
        vegan: {
            type: Boolean,
            require: true,
            default: false
        },
        mealPrep: {
            type: Boolean,
            require: true,
            default: false
        },
        soup: {
            type: Boolean,
            require: true,
            default: false
        },
        salads: {
            type: Boolean,
            require: true,
            default: false
        },
    },
    steps: {
        type: Array,
        require: true,
        number: {
            type: String,
            require: true
        },

        stitle: {
            type: String,
            require: true
        },
        sdesc: {
            type: String,
            require: true
        },
        simage: {
            type: String,
            require: true
        },
    },
    recipeInfo: {
        type: Object,
        require: true,
        ingredients: {
            type: Array,
            require: true
        },
        instructions: {
            type: Array,
            require: true
        }
    },
    date: {
        type: Date,
        default: Date.now
    }
})

// update recipes.js input method in routes
module.exports = mongoose.model('Recipes', recipesSchema)