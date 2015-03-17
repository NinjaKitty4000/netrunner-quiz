'use strict';

/**
 * @ngdoc overview
 * @name netrunnerQuizApp
 * @description
 * # netrunnerQuizApp
 *
 * Main module of the application.
 */
angular
  .module('netrunnerQuizApp', [
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/cardQuiz', {
        templateUrl: 'views/cardQuiz.html',
        controller: 'QuizCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
