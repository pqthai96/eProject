'use strict';

angular.module("myApp.home",[]).controller("homePrdCtrl",function($scope,$http){
    $http.get("../assets/json/diamond-gemstone.json").then(function(response){
        var data = response.data;
        $scope.homelist= data;
        console.log(response.data)
    })
    $scope.cart = [];
    $scope.total = 0;
})

angular.module("myApp.slider",[]).controller("sliderCtrl",function($scope,$http){
    $http.get("../assets/json/slider.json").then(function(response){
        $scope.slider=response.data;
        console.log(response.data)
    })
})

angular.module("myApp.banner",[]).controller("bannerCtrl",function($scope,$http){
    $http.get("../assets/json/banner.json").then(function(response){
        $scope.banner=response.data;
        console.log(response.data)
    })
})

angular.module("myApp.blog",[]).controller("blogCtrl",function($scope,$http){
    $http.get("assets/json/blog.json").then(function(response){
        $scope.blogs=response.data;
        console.log(response.data)
    })
})