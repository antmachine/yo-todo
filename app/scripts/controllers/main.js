'use strict';

/**
 * @ngdoc function
 * @name yoTodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoTodoApp
 */
angular.module('yoTodoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.todos = [
      'Item 1',
      'Item 2',
      'Karma'
    ];
  });
