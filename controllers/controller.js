const Recipe = require('../models/Recipe');

module.exports.home_get = async (req, res ) => {
  const recipes = await Recipe.find();
  if(recipes) {
    res.render('index', { title: 'Home', recipes, lists: [], })
  }

}

module.exports.recipe_get = (req, res) => {
  res.render('recipe',  { title: 'recipe' });
}

module.exports.create_get = (req, res) => {
  res.render('create',  { title: 'Add new recipe', lists: ['Create']});
}

module.exports.create_post = async (req, res) => {
  const { recipeName, recipeSnippet, recipeBy, recipeIngredients, recipeInstructions } = req.body;
  
  try {
    const recipe = await new Recipe({ recipeName, recipeSnippet, recipeBy, recipeIngredients, recipeInstructions });
    const savedRecipe = await recipe.save();
    if(savedRecipe) {
      res.status(200).json({ recipe: recipe._id });
    }
  }
  catch(err){
    console.log(err);
  }
}