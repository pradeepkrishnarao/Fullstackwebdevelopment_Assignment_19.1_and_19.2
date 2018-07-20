var myObj = require('../api/myProfile.json');
var express = require('express');
/* An instance of Express Router is created */
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {title: "myObj"});
});

module.exports = router;
