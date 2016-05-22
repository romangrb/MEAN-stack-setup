var express = require('express');
var router = express.Router();

// server routes ===========================================================

// frontend routes =========================================================
// route to handle all angular requests
// GET home page.
router.get('/', function(req, res, next) {
  res.sendfile('./public/index.html');
});

module.exports = router;
