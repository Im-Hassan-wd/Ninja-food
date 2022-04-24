const express = require('express');
const mongoose = require('mongoose');
const Recipe = require('./models/Recipe');
const { home_get, recipe_get, create_get, create_post } = require('./controllers/controller')
const PORT = process.env.PORT || 4000

const app = express();


// register view engine
app.set('view engine', 'ejs');

// middleware and static files
app.use(express.static('public'));
app.use(express.json());

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
// database connection
const dbURI = "mongodb+srv://weird:test123@cluster0.ud8op.mongodb.net/node-auth" 
mongoose.connect(dbURI)
  .then((result) => {
    console.log('connected')
  })
  .catch((err) => console.log(err));


// routes
app.get('/', home_get);
app.get('/recipes', recipe_get);
app.get('/create', create_get);
app.post('/create', create_post)

// 404
// app.use((req, res) => {
//   res.status(404).render('404', { title: '404'});
// });
