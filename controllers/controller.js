const Recipe = require('../models/Recipe');

module.exports.home_get = async (req, res ) => {
  const recipes = await Recipe.find().sort({ createdAt: -1});
  if(recipes) {
    res.render('index', { title: 'Home', recipes, lists: [], })
  }
}

module.exports.recipe_get = (req, res) => {
  res.redirect('/');
}

module.exports.create_get = (req, res) => {
  res.render('create',  { title: 'Add new recipe', lists: ['Create']});
}

module.exports.recipe_details_get = (req, res) => {
  const id = req.params.id;
    const recipe = Recipe.findById(id)
      .then(result => {
        res.render('details', { title: 'Recipe details', recipe: result}); 
      })
      .catch(err => console.log(err))
    // if(recipe){
    //   console.log(recipe, recipe.paths)
    // }
}

module.exports.create_post = async (req, res) => {
  const { recipeName, recipeSnippet, recipeBy, cookTime, prepTime, recipeIngredients, recipeInstructions } = req.body;
  
  try {
    const recipe = await new Recipe({ recipeName, recipeSnippet, recipeBy, cookTime, prepTime, recipeIngredients, recipeInstructions });
    const savedRecipe = await recipe.save();
    if(savedRecipe) {
      res.status(200).json({ recipe: recipe._id });
    }
  }
  catch(err){
    console.log(err);
  }
}