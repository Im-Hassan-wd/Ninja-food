const express = require('express');

const app = express();

app.listen(4000);

// middleware and static files
app.use(express.static('static'));
app.use(express.urlencoded({ extended: true}));

// register view engine
app.set('view engine', 'ejs');

// routes
app.get('/', (req, res) => {
  res.render('index', { title: 'home' });
});

app.get('/recipes', (req, res) => {
  res.render('recipe',  { title: 'recipe' });
});

app.get('/create', (req, res) => {
  res.render('create',  { title: 'Add new recipe' });
});

// 404
app.use((req, res) => {
  res.status(404).render('404', { title: '404'});
});