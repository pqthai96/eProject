'use strict';

angular.module("myApp.product-details",["ngCookies",]).controller("detailsCtrl",function($http,$scope,$routeParams){
        $scope.product_detail={}; 
        $scope.cart = [];
        $scope.total = 0;
        $http.get("../assets/json/diamond-gemstone.json").then(function(response){
            angular.forEach(response.data,function(product){
                if(product.id==$routeParams.productid)
                {
                    $scope.product_detail=product;

                    if($scope.product_detail.type=="Ring"){
                        $scope.relatedProduct=[];
                        angular.forEach(response.data,function(value){
                            if(value.type=="Ring"){
                                $scope.relatedProduct.push(value)
                            }
                        }) 
                    }
                    if($scope.product_detail.type=="Earrings"){
                        $scope.relatedProduct=[];
                        angular.forEach(response.data,function(value){
                            if(value.type=="Earrings"){
                                $scope.relatedProduct.push(value)
                            }
                        })
                    }
                    if($scope.product_detail.type=="Necklace"){
                        $scope.relatedProduct=[];
                        angular.forEach(response.data,function(value){
                            if(value.type=="Necklace"){
                                $scope.relatedProduct.push(value)
                            }
                        })
                    }
                    if($scope.product_detail.type=="Crystals"){
                        $scope.relatedProduct=[];
                        angular.forEach(response.data,function(value){
                            if(value.type=="Crystals"){
                                $scope.relatedProduct.push(value)
                            }
                        })
                    }
                }
        });
    });
    $scope.displayImg=true;
    $scope.displayImg1=function(){
        $scope.displayImg=true;
    }
    $scope.displayImg2=function(){
        $scope.displayImg=false;
    }
})

angular.module("myApp.product-details").controller('reviewCtrl',function($scope,$http,$cookies){
    $http.get('../assets/json/review.json').then(function(response){
        $scope.review=response.data;
        console.log(response.data)

    if (!angular.isUndefined($cookies.get('review'))) {
        $scope.review =  $cookies.getObject('review');
    }
    
        $scope.submitReview=function(){
        $scope.review.push(angular.copy($scope.reviewUse));
        alert('Thank you for rating the product !')
        var expireDate = new Date();
        expireDate.setDate(expireDate.getDate() + 1);
        $cookies.putObject('review', $scope.review,{'expires': expireDate});
        $scope.review = $cookies.getObject('review');
    }
    })
    $scope.date=new Date();
})


