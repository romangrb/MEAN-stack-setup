var db_constant = require('../model/db_model_constant');
var mongoose = require('mongoose');  

var Schema = new mongoose.Schema({  
  name: String,
  val: String,
});

mongoose.model(db_constant.COLLECTION_NAME, Schema);