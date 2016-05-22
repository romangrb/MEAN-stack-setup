var mongoose = require('mongoose');  

var Schema = new mongoose.Schema({  
  name: String,
  val: String,
});

/*mongoose.model(up_config.COLLECTION_NAME, Schema);*/