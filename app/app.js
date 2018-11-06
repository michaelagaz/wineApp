'use strict';
 angular.module("myApp", ['ngMaterial', "ngRoute", 'ngMessages'])

    // $routeProvider,
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when("/", {
                controller: "LoginCtrl",
                templateUrl: "/login/login.html",
                controllerAs: 'vm'
            })
            .when("/list", {
                controller: "ListCtrl",
                templateUrl: "/list/list.html",
                controllerAs: 'vm'
            });
        $locationProvider.html5Mode(true);
    });

// function AppCtrl($scope, $location) {
// ;
// }

// app.controller('AppCtrl', ['$scope', '$location', AppCtrl]);
//
// function AppCtrl($scope, $location) {
//
//     $scope.users = [{
//         UserName: 'chandra',
//         Password: 'hello'
//     }, {
//         UserName: 'Harish',
//         Password: 'hi'
//     }, {
//         UserName: 'Chinthu',
//         Password: 'hi'
//     }];
//
//     $scope.LoginCheck = function() {
//         $location.path("SuccessPage");
//     };
//
//     $scope.go = function(path) {
//         $location.path("/login");
//     };
// }

// (function() {
//     'use strict';
//
//     angular.module('navBarDemoBasicUsage', ['ngMaterial'])
//         .controller('AppCtrl', AppCtrl);
//
//     function AppCtrl($scope) {
//         $scope.currentNavItem = 'page1';
//     }
// })();

// angular.module('myApp', ['ngMaterial', 'ngMessages']);