const express = require('express');
const app = express();

const nunjucks = require('nunjucks');

const videos = require('./data.js');
const data = require('./about_data.js');

app.use(express.static('public'));

app.set('view engine','njk');

nunjucks.configure('views', {
  express:app,
  autoescape: false
});

app.get('/',(req,res) => {


  return res.render('about', {item:data});
});

app.get('/portfolio', (req,res) => {
  return res.render('portfolio', {items:videos, about:data});
});

app.listen(5000, () => {
  console.log('Server is running!');
});