const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  name: {
    type: String
  },
  snippet: {
    type: String
  },
  ingredients: {
    type: Array
  },
  instructions: {
    type: Array
  }
});

const Recipe = mongoose.model('recipe', recipeSchema);

module.exports = Recipe;