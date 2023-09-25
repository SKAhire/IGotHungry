const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const RecipeInfoSchema = new Schema({
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

module.exports = mongoose.model('RecipeInfo', RecipeInfoSchema)