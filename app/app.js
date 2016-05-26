
require("angular")

import GreetCtrl from './controllers/greet_ctrl'

angular
    .module('app', [])
    .controller('GreetCtrl', GreetCtrl)
