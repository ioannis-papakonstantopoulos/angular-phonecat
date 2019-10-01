declare var angular: angular.IAngularStatic;

import 'angular-route';
// Define the `phoneDetail` module
angular.module('phoneDetail', ['ngRoute', 'core.phone']);

export default 'phoneDetail';