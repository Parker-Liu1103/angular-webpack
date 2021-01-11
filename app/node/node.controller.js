angular.module('nodeController')
    .controller('nodeController', function ($scope) {

        $scope.tutorial = [
            { Name: "Promises", Description: "Power of Promises" },
            { Name: "Event", Description: "Event of Node.js" },
            { Name: "Modules", Description: "Modules in Node.js" }
        ]
    });