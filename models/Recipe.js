const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  recipeName: {
    type: String,
    required: True
  },
  recipeSnippet: {
    type: String,
    required: True
  },
  recipeBy: {
    type: String ,
    required: True 
  },
  recipeIngredients: {
    type: Array,
    required: True
  },
  recipeInstructions: {
    type: Array,
    required: True
  },
  cookTime: {
    type: Number,
    required: True
  },
  prepTime: {
    type: Number,
    required: True
  }
}, { timestamps: true});

const Recipe = mongoose.model('recipe', recipeSchema);

module.exports = Recipe;