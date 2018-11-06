'use strict';

var app =angular.module('myApp');

// .config(['$routeProvider', function($routeProvider) {
//   $routeProvider.when('/login', {
//     templateUrl: 'login/login.html',
//     controller: 'LoginCtrl'
//   });
// }])

app.controller('LoginCtrl', ['$scope', '$location', function($scope, $location) {
    // var vm = this;
    console.log($scope);
    $scope.user2 = {
        username: 'test',
        pwd: 'test'
    };

    $scope.submit = function (user) {
        console.log('click');
        if (user === $scope.user2) {
            $location.path('/list');
        }
    };

}]);