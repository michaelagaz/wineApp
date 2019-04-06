'use strict';

var app = angular.module('myApp');

// .config(['$routeProvider', function($routeProvider) {
//   $routeProvider.when('/login', {
//     templateUrl: 'login/login.html',
//     controller: 'LoginCtrl'
//   });
// }])
app.controller('ListCtrl', ['$scope', '$location', '$http', function ($scope, $location, $http) {
    // var vm = this;

    $scope.init = function () {
        // $scope.confItems= [{
        //     name: 'Farba', value: 0
        // },
        //     {
        //         name: 'Vona', value: 0
        //     },
        //     {
        //         name: 'Chut', value: 0
        //     }]
        //
        // $scope.items = [{
        //     id: 1,
        //     list:
        //         [{
        //             checked: false,
        //             color: "red",
        //             author: "Blaho",
        //             title: "title1",
        //             description: "desc 1",
        //             disabled: false
        //         },
        //             {
        //                 checked: true,
        //                 color: "red",
        //                 author: "Blaho",
        //                 title: "title2",
        //                 description: "desc 2",
        //                 disabled: false
        //             },
        //             {
        //                 checked: true,
        //                 color: "red",
        //                 author: "Blaho",
        //                 title: "title3",
        //                 description: "desc 3",
        //                 disabled: false
        //             },
        //             {
        //                 checked: true,
        //                 color: "red",
        //                 author: "Blaho",
        //                 title: "title4",
        //                 description: "desc 4",
        //                 disabled: false
        //             },
        //             {
        //                 checked: true,
        //                 color: "red",
        //                 author: "Blaho",
        //                 title: "title5",
        //                 description: "desc 5",
        //                 disabled: false
        //             },
        //             {
        //                 checked: true,
        //                 color: "red",
        //                 author: "Blaho",
        //                 title: "title6",
        //                 description: "desc 6",
        //                 disabled: false
        //             },
        //         ]
        // },
        //     {
        //         id: 2,
        //         list:
        //             [{
        //                 checked: false,
        //                 color: "red",
        //                 author: "Blaho",
        //                 title: "title1",
        //                 description: "desc 1",
        //                 disabled: false
        //             },
        //                 {
        //                     checked: true,
        //                     color: "red",
        //                     author: "Blaho",
        //                     title: "title2",
        //                     description: "desc 2",
        //                     disabled: false
        //                 },
        //                 {
        //                     checked: true,
        //                     color: "red",
        //                     author: "Blaho",
        //                     title: "title3",
        //                     description: "desc 3",
        //                     disabled: false
        //                 },
        //                 {
        //                     checked: true,
        //                     color: "red",
        //                     author: "Blaho",
        //                     title: "title4",
        //                     description: "desc 4",
        //                     disabled: false
        //                 },
        //                 {
        //                     checked: true,
        //                     color: "red",
        //                     author: "Blaho",
        //                     title: "title5",
        //                     description: "desc 5",
        //                     disabled: false
        //                 },
        //                 {
        //                     checked: true,
        //                     color: "red",
        //                     author: "Blaho",
        //                     title: "title6",
        //                     description: "desc 6",
        //                     disabled: false
        //                 },
        //             ]
        //     }
        // ];
        //
        // $scope.allItems = [];
        // $scope.items.forEach(function (item) {
        //     $scope.allItems = $scope.allItems.concat(item.list);
        // });
        $http.get('api/').
        then(function(response) {
            // this callback will be called asynchronously
            // when the response is available
            console.log(response);
        }, function(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });
        $scope.selectAllCheck();
    };
    $scope.selectAllCheck = function () {
        $scope.newArray = $scope.items.filter(function (item) {
            return (item.checked === true);
        });
        $scope.selectAll = $scope.newArray.length === $scope.items.length;
    };

    $scope.onClick = function (index, item) {
        if (!item.disabled)
            $location.path('/detail/' + index);
    };

    $scope.checkAll = function () {
        $scope.items.forEach(function (item) {
            item.checked = $scope.selectAll;
        });
    };

    $scope.disableAllEdits = function (list) {
        console.log('list', list);
        list.forEach(function (item) {
            item.disabled = true;
        });
    };

}]);