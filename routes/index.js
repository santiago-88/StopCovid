var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/registro', function(req, res, next) {
  res.render('registro', { title: 'Express' });
});
router.get('/siteMap', function(req, res, next) {
  res.render('siteMap', { title: 'siteMap' });
});
router.get('/statistics', function(req, res, next) {
  res.render('statistics', { title: 'statistics' });
});
module.exports = router;
