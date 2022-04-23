const express = require('express');
const PORT = process.env.PORT || 4000

const app = express();

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));

// middleware and static files
app.use(express.static('static'));
app.use(express.urlencoded({ extended: true}));

// register view engine
app.set('view engine', 'ejs');

// routes
app.get('/', (req, res) => {
  res.render('index', { title: 'home', lists: []});
});

app.get('/recipes', (req, res) => {
  res.render('recipe',  { title: 'recipe' });
});

app.get('/create', (req, res) => {
  res.render('create',  { title: 'Add new recipe', lists: ['Create']});
});

// 404
app.use((req, res) => {
  res.status(404).render('404', { title: '404'});
});