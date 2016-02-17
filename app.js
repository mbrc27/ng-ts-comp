var angular = require('angular');
var angular_1 = require('angular');
angular.module('app', [])
    .component('app', {
    template: "<div>hello world</div>",
    controller: (function () {
        function App() {
        }
        return App;
    })()
});
angular_1.bootstrap(document, ['app']);
