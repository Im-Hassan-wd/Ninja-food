const Recipe = require('../models/Recipe');

module.exports.home_get = (req, res ) => {
  Recipe.find().sort({ createdAt: -1})
    .then((result) => {
      console.log(result)
      res.render('index', { title: 'Home', recipes: result, lists: [], }) ;
    })
    .catch((err) => {
      console.log(err);
    });

    res.render('index', { title: 'home', lists: []});
}

module.exports.recipe_get = (req, res) => {
  res.render('recipe',  { title: 'recipe' });
}

module.exports.create_get = (req, res) => {
  res.render('create',  { title: 'Add new recipe', lists: ['Create']});
}

module.exports.create_post = (req, res) => {
  const recipe = new Recipe(req.body)

  recipe.save()
   .then(result => res.status(200).json({ recipe: recipe._id }))
   .catch(err => console.log(err))
}