const express = require('express');

const app = express();

app.listen(4000);

// middleware and static files
app.use(express.static('static'));
app.use(express.urlencoded({ extended: true}));

// register view engine
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
})