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