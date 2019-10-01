declare var angular: angular.IAngularStatic;

// Define the `phonecatApp` module
angular.module('phonecatApp', ['ngAnimate', 'ngRoute', 'core', 'phoneDetail', 'phoneList']);

export default angular.module('phonecatApp');
