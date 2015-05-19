'use strict';

/**
 * @ngdoc overview
 * @name clasicoApp
 * @description
 * # clasicoApp
 *
 * Main module of the application.
 */
var app = angular.module('clasicoApp', [
  //'ngAnimate',
  //'ngCookies',
  //'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch'
]);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .when('/about', {
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});
