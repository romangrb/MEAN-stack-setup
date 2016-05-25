require('angular')

var GreetCtrl = require('./controllers/greet_ctrl')

angular
    .module('app', [])
    .controller('GreetCtrl', GreetCtrl)
