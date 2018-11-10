'use strict';

var app =angular.module('myApp');

// .config(['$routeProvider', function($routeProvider) {
//   $routeProvider.when('/login', {
//     templateUrl: 'login/login.html',
//     controller: 'LoginCtrl'
//   });
// }])

app.controller('ListCtrl', ['$scope', '$location', function($scope, $location) {
    // var vm = this;
   $scope.items = [{color: "red", author: "Blaho", title: "title1", description: "desc 1"},
       {color: "red", author: "Blaho", title: "title2", description: "desc 2"},
       {color: "red", author: "Blaho", title: "title3", description: "desc 3"},
       {color: "red", author: "Blaho", title: "title4", description: "desc 4"},
       {color: "red", author: "Blaho", title: "title5", description: "desc 5"},
       {color: "red", author: "Blaho", title: "title6", description: "desc 6"},
   ];

   $scope.onClick = function(index){
       $location.path('/detail/'+index);
   };

}]);