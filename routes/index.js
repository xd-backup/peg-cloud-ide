var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'peg-cloud-ide', app_name: 'entry' });
});

module.exports = router;
