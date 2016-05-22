var db_cfg_constant = require('../model/db_cfg_constant');
var mongoose = require('mongoose');  

var Schema = new mongoose.Schema({  
  name: String,
  val: String
});

mongoose.model(db_cfg_constant.COLLECTION_NAME, Schema);