const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  recipeName: {
    type: String,
    required: true
  },
  recipeSnippet: {
    type: String,
    required: true
  },
  recipeBy: {
    type: String ,
    required: true 
  },
  recipeIngredients: {
    type: Array,
    required: true
  },
  recipeInstructions: {
    type: Array,
    required: true
  },
  cookTime: {
    type: Number,
    required: true
  },
  prepTime: {
    type: Number,
    required: true
  }
}, { timestamps: true});

const Recipe = mongoose.model('recipe', recipeSchema);

module.exports = Recipe;