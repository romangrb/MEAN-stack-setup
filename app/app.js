require('angular')
var greet_ctrl = require('./controllers/greet_ctrl')

var app = angular.module('app', [])
app.controller('greet_ctrl', ['$scope', greet_ctrl])

/* recommended */
/*import { greet_ctrl } from './controllers/greet_ctrl';

angular
    .module('app')
    .controller('greet_ctrl', greet_ctrl);*/