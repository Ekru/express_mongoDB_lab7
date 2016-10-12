'use strict';
var express = require('express'),
    app = express(),
    ejs = require('ejs'),
    mc = require('mongodb').MongoClient,
    routes = require('./routes/index'),
    crypto = require('crypto'),
    algorithm = 'aes256',
    password = 'asaadsaad';
    

app.set('views', __dirname +'/views');
app.set('view engine', 'ejs');

app.use('/', routes);



 

// app.get('/', function(req, res, next) {
//   res.send(df(readDoc));
//   //console.log(app.decrypt(readDoc));
// });
 
app.listen(8080);
console.log('Server started on 8080');

/*module.exports.df = df;
module.exports.readDoc = readDoc;*/