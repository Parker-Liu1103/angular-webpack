import angular from 'angular';

const mainApp =
    angular.module('mainApp', []);
mainApp.controller('appController', ['$scope', ($scope) => {
  $scope.title = '';
  $scope.$watch('title', (newVal, oldVal) => {
    $scope.newVal = newVal;
    $scope.oldVal = oldVal;
  });
}]);
