const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  recipeName: {
    type: String
  },
  recipeSnippet: {
    type: String
  },
  recipeBy: {
    type: String  
  },
  recipeIngredients: {
    type: Array
  },
  recipeInstructions: {
    type: Array
  },
  cookTime: {
    type: Number
  },
  prepTime: {
    type: Number
  }
});

const Recipe = mongoose.model('recipe', recipeSchema);

module.exports = Recipe;