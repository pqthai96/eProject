"use strict";

angular.module("myApp.blogDetails", []).controller("blogDetailsCtrl", [
  "$scope",
  "$filter",
  "$http",
  "$routeParams",
  function ($scope, $filter, $http, $routeParams) {
    $scope.blogId = $routeParams.id;

    $http.get("./assets/json/blog.json").then(function (response) {
      var data = response.data;
      $scope.blog = $filter("filter")(
        data,
        { id: parseInt($scope.blogId) },
        true
      )[0];
      console.log($scope.blog);
    });
  },
]);

angular.module("myApp.navBlogDetails", []).controller("navBlogDetailsCtrl", [
  "$scope",
  "$filter",
  "$http",
  "$routeParams",
  function ($scope, $filter, $http, $routeParams) {
    $scope.navBlogId = $routeParams.id;

    $http.get("./assets/json/blog.json").then(function (response) {
      var data = response.data;
      $scope.navbarBlogs = $filter("filter")(
        data,
        { id: parseInt($scope.navBlogId) },
        true
      )[0];
      console.log($scope.navbarBlogs);
    });
  },
]);

angular.module("myApp.navBlog",[]).controller("navBlogCtrl",function($scope,$http){
  $http.get("./assets/json/blog.json").then(function(response){
      $scope.navblogs=response.data;
      console.log(response.data)
  })
})

