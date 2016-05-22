  var express   = require('express');
  var app       = express();
  var path      = require('path');
  var routes    = require('./routes/index');

  var dbConfig  = require('./model/db');
  var dbModel   = require('./model/db_schema');

  app.use(express.static(path.join(__dirname, 'public')));
  app.use(express.static('./'));
  
  // view engine setup
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'jade');
  
  app.use('/', routes);

  module.exports = app;