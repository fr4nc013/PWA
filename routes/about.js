var express = require('express');
var router = express.Router();
const quotes = [
  "Gloria al bravo pueblo que el yugo lanzo la ley respetando la virtud y honor",
  "Prueba con express generator",
  "Repiblica Dominicana",
  "Republica Bolivariana de venezuela",
];

/* GET home page. */
router.get('/', function(req, res, next) {
  const params = req.query
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  res.render('about', { nombre:params?.nombre,quote:randomQuote } );

  res.render('index', { title: 'Express' });
});

module.exports = router;
