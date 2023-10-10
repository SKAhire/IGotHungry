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
            require: true
        },
        dinner: {
            type: Boolean,
            require: true
        },
        vegetarian: {
            type: Boolean,
            require: true
        },
        healty: {
            type: Boolean,
            require: true
        },
        instantPot: {
            type: Boolean,
            require: true
        },
        vegan: {
            type: Boolean,
            require: true
        },
        mealPrep: {
            type: Boolean,
            require: true
        },
        soup: {
            type: Boolean,
            require: true
        },
        salads: {
            type: Boolean,
            require: true
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

module.exports = mongoose.model('Recipes', recipesSchema)