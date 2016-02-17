import * as angular from 'angular';
import {bootstrap} from 'angular';
angular.module('app', [ ])
.component('app', {
  template: `<div>hello world</div>`,
  controller: class App {}
});
bootstrap(document, ['app']);