require('angular')
var GreetCtrl = require('./controllers/greet_ctrl')

var app = angular.module('app', [])
app.controller('GreetCtrl', ['$scope', GreetCtrl])

/* recommended */
/*import { greet_ctrl } from './controllers/greet_ctrl';

angular
    .module('app')
    .controller('greet_ctrl', greet_ctrl);*/