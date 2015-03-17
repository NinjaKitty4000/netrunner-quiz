'use strict';

/**
 * @ngdoc function
 * @name netrunnerQuizApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the netrunnerQuizApp
 */
angular.module('netrunnerQuizApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
