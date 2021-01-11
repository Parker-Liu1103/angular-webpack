import page1 from './page1/page1.html'
import node from './node/node.html'

angular.module('mainApp')
    .config(['$routeProvider', '$locationProvider', ($routeProvider, $locationProvider) => {
        $routeProvider
            .when('/Angular', {
                templateUrl: '/app/page1/page1.html',
                controller: 'page1Controller'
            })
            .when('/Node', {
                templateUrl: '/app/node/node.html',
                // controller: 'appController'
                controller: 'nodeController'
            });
        $locationProvider.html5Mode({enabled: true, requireBase: false});
        // $locationProvider.hashPrefix('!');
    }]);
