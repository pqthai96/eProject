"use strict";


angular.module("myApp.aboutus", []).controller("aboutCtrl", function($scope, $http){
    $http.get("./assets/json/about-us.json").then(function(response){
        $scope.aboutus = response.data;
        console.log(response.data)
    });
});

angular.module("myApp.contact", []).controller("contactCtrl", function($scope, $http){
    $http.get("./assets/json/contact.json").then(function(response){
        $scope.contact = response.data;
        console.log(response.data)
    });
});

angular.module("myApp.fqa", []).controller("fqaCtrl", function($scope, $http){
    $http.get("./assets/json/FQA.json").then(function(response){
        $scope.fqas = response.data;
        console.log(response.data)
    });
});

angular.module("myApp.gallery", []).controller("galleryCtrl", function($scope, $http){
    $http.get("./assets/json/gallery.json").then(function(response){
        $scope.gallery = response.data;
        console.log(response.data)
    
    // initial image index
    $scope._Index = 0;

    // if a current image is the same as requested image
    $scope.isActive = function (index) {
        return $scope._Index === index;
    };

    // show prev image
    $scope.showPrev = function () {
        $scope._Index = ($scope._Index > 0) ? --$scope._Index : $scope.gallery.length - 1;
    };

    // show next image
    $scope.showNext = function () {
        $scope._Index = ($scope._Index < $scope.gallery.length - 1) ? ++$scope._Index : 0;
    };

    // show a certain image
    $scope.showPhoto = function (index) {
        $scope._Index = index;
    };
    });
});
angular.module("myApp.login", [])
    .controller("loginCtrl", function ($scope,$http) {
    
    // Show Submit Values

    $scope.submit_success = false;
    $scope.call = function () {
        $scope.server = angular.copy($scope.user);
        $scope.submit_success = true;
    };
    $http.get("./assets/json/countries.json").then(function(response){
        $scope.countries = response.data;
        console.log(response.data)
    });
    $scope.login_success=false;
    $scope.login_failed=false;
    $scope.loginUser=function()
    {
        var username=login.usernamelogin.value;
        var password=login.passlogin.value;
        if(username=="admin" && password=="pass")
        {
            $scope.login_success=true;
        }
        else
        {
            $scope.login_failed=true;
        }
    }  
  } 
);
