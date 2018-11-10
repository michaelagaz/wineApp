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
        console.log(user);
        if (user.username === $scope.user2.username && user.pwd === $scope.user2.pwd) {
            $location.path('/list');
        }
    };

}]);