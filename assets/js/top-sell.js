'use strict';

angular.module("myApp.topsell",[]).controller("topsellCtrl",function($http,$scope){
    $http.get("../assets/json/topsell.json").then(function(response){
        $scope.topList=response.data
    })
    $scope.currentPage=1;
    $scope.pageSize=12;
    $scope.cart = [];
    $scope.total = 0;
})