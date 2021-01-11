angular.module('page1Controller')
    .controller('page1Controller', ['$scope', function($scope){
        $scope.title = '';
        $scope.$watch('title', (newVal, oldVal) => {
            $scope.newVal = newVal;
            $scope.oldVal = oldVal;
        });

    }])

