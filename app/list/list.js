'use strict';

var app = angular.module('myApp');

// .config(['$routeProvider', function($routeProvider) {
//   $routeProvider.when('/login', {
//     templateUrl: 'login/login.html',
//     controller: 'LoginCtrl'
//   });
// }])
app.controller('ListCtrl', ['$scope', '$location', function ($scope, $location, $timeout, location, Excel) {
    // var vm = this;

    $scope.init = function () {
        $scope.items = [{
            id: 1,
            list:
                [{checked: false, color: "red", author: "Blaho", title: "title1", description: "desc 1"},
                    {checked: true, color: "red", author: "Blaho", title: "title2", description: "desc 2"},
                    {checked: true, color: "red", author: "Blaho", title: "title3", description: "desc 3"},
                    {checked: true, color: "red", author: "Blaho", title: "title4", description: "desc 4"},
                    {checked: true, color: "red", author: "Blaho", title: "title5", description: "desc 5"},
                    {checked: true, color: "red", author: "Blaho", title: "title6", description: "desc 6"},
                ]
        },
            {
                id: 2,
                list:
                    [{checked: false, color: "red", author: "Blaho", title: "title1", description: "desc 1"},
                        {checked: true, color: "red", author: "Blaho", title: "title2", description: "desc 2"},
                        {checked: true, color: "red", author: "Blaho", title: "title3", description: "desc 3"},
                        {checked: true, color: "red", author: "Blaho", title: "title4", description: "desc 4"},
                        {checked: true, color: "red", author: "Blaho", title: "title5", description: "desc 5"},
                        {checked: true, color: "red", author: "Blaho", title: "title6", description: "desc 6"},
                    ]
            }
        ];

        $scope.allItems = [];
        $scope.items.forEach(function(item){
            $scope.allItems = $scope.allItems.concat(item.list);
        });
        $scope.selectAllCheck();
    };
    $scope.selectAllCheck = function () {
        $scope.newArray = $scope.items.filter(function (item) {
            return (item.checked === true);
        });
        $scope.selectAll = $scope.newArray.length === $scope.items.length;
    };

    $scope.onClick = function (index) {
        $location.path('/detail/' + index);
    };

    $scope.checkAll = function () {
        $scope.items.forEach(function (item) {
            item.checked = $scope.selectAll;
        });
    };

}]);