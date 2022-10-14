'use strict';

angular.module("myApp.shopall",[]).controller("shopallCtrl",function($http,$scope,$cookies,$cookieStore){
    $http.get("../assets/json/diamond-gemstone.json").then(function(response){
        var data = response.data;
        $scope.allList=data;

        $scope.full_brand=function(){
            $scope.allList=response.data;
        }

        $scope.pandora=function(){
            $scope.allList=[];
            angular.forEach(response.data,function(product){
                if(product.brand=="Pandora"){
                    $scope.allList.push(product);
                }
            })
        }

        $scope.swarovski=function(){
            $scope.allList=[];
            angular.forEach(response.data,function(product){
                if(product.brand=="Swarovski"){
                    $scope.allList.push(product);
                }
            })
        }

        $scope.tiffany=function(){
            $scope.allList=[];
            angular.forEach(response.data,function(product){
                if(product.brand=="Tiffany"){
                    $scope.allList.push(product);
                }
            })
        }
    })

    $scope.currentPage=1;
    $scope.pageSize=18;

    $scope.cart = [];
    $scope.total = 0;
})

