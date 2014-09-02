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
    $scope.todos = [];
    
    // Add error checking for todos with same name or two empty items
		$scope.addTodo = function(){
			$scope.todos.push($scope.todo);
			$scope.todo = '';
		};
		$scope.removeTodo = function(index){
			$scope.todos.splice(index, 1);
		};
  });
