const express = require('express');
const mongoose = require('mongoose');
const Recipe = require('./models/Recipe');
const PORT = process.env.PORT || 4000

const app = express();


// register view engine
app.set('view engine', 'ejs');

// middleware and static files
app.use(express.static('public'));
app.use(express.json());

// database connection
const dbURI = "mongodb+srv://weird:test123@cluster0.ud8op.mongodb.net/node-auth" 
mongoose.connect(dbURI)
  .then((result) => {
    app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
  })
  .catch((err) => console.log(err));


// routes
app.get('/', (req, res) => {
  Recipe.find().sort({ createdAt: -1})
   .then((result) => {
     console.log(result)
     res.render('index', { title: 'Home', recipes: result, lists: [], }) ;
   })
   .catch((err) => {
     console.log(err);
   })

  res.render('index', { title: 'home', lists: []});
});

app.get('/recipes', (req, res) => {
  res.render('recipe',  { title: 'recipe' });
});

app.get('/create', (req, res) => {
  res.render('create',  { title: 'Add new recipe', lists: ['Create']});
});

app.post('/create', (req, res) => {
  const recipe = new Recipe(req.body)

  recipe.save()
   .then(result => res.status(200).json({ recipe: recipe._id }))
   .catch(err => console.log(err))
})

// 404
// app.use((req, res) => {
//   res.status(404).render('404', { title: '404'});
// });
