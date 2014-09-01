'use strict';

/**
 * @ngdoc function
 * @name yoTodoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yoTodoApp
 */
angular.module('yoTodoApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
