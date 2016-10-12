var express = require('express');
var router = express.Router();
var dataPromise = require('../data.js')();
var decrypt = require('../decrypt.js');
var data;

dataPromise.then(function(dt){
    console.log(`data: ${dt}`);
    data = dt;
})

/* GET home page. */
router.get('/index', function(req, res, next) {
  var msg = decrypt(data);
  console.log(msg);
  res.render('index', { title: msg });
  console.log('app.decrypt(readDoc)');
});

module.exports = router;