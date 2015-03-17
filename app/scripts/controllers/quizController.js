'use strict';

/**
 * @ngdoc function
 * @name netrunnerQuizApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the netrunnerQuizApp
 */
angular.module('netrunnerQuizApp')
  .controller('QuizCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.ice = {
      "id": "101"
    }

    $scope.shown = true;

    $scope.isShown = function() {
      return $scope.shown;
    }

    $scope.reveal = function() {
      $scope.shown  = false;
    }
  });
