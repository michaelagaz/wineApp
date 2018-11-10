'use strict';

var app = angular.module('myApp');

// .config(['$routeProvider', function($routeProvider) {
//   $routeProvider.when('/login', {
//     templateUrl: 'login/login.html',
//     controller: 'LoginCtrl'
//   });
// }])

app.controller('DetailCtrl', ['$scope', '$location', function ($scope, $location) {
    // var vm = this;
    var sum = 0;
    $scope.item ={id: 0, title: "title1"};
    $scope.items = [
        {value: 30, checkbox: false, name: "name1"},
        {value: 50, checkbox: false, name: "name2"},
        {value: 23, checkbox: false, name: "name3"},
        {value: 34, checkbox: false, name: "name4"},
        {value: 10, checkbox: false, name: "name5"},
        {value: 15, checkbox: false, name: "name6"},
    ];

    var getItem = function (index) {
        return $scope.items[index];
    };

    $scope.onCheckboxChange = function (index) {
        var item = getItem(index);
        sum = item.checkbox ? sum + item.value : sum - item.value;
        console.log(item.value);
        console.log(sum);
    };

}]);