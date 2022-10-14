'use strict';

angular.module("myApp.crystals",[]).controller("crystalsCtrl",function($scope,$http){
    $http.get("../assets/json/diamond-gemstone.json").then(function(response){
        $scope.productList=[];
        angular.forEach(response.data,function(product){
            if(product.type=="Crystals"){
                $scope.productList.push(product);
            }
        })
    })
    $scope.currentPage=1;
    $scope.pageSize=24;
    $scope.cart = [];
    $scope.total = 0;
})

angular.module("myApp.diamond",[]).controller("diamondCtrl",function($scope,$http){
    $http.get("../assets/json/diamond-gemstone.json").then(function(response){
        $scope.productList=[];
        angular.forEach(response.data,function(product){
            if(product.stone=="Diamonds"&&product.type=="Crystals"){
                $scope.productList.push(product);
            }
        })
    })
    $scope.currentPage=1;
    $scope.pageSize=12;
    $scope.cart = [];
    $scope.total = 0;
})

angular.module("myApp.quartz",[]).controller("quartzCtrl",function($scope,$http){
    $http.get("../assets/json/diamond-gemstone.json").then(function(response){
        $scope.productList=[];
        angular.forEach(response.data,function(product){
            if(product.stone=="Quartz"&&product.type=="Crystals"){
                $scope.productList.push(product);
            }
        })
    })
    $scope.currentPage=1;
    $scope.pageSize=12;
    $scope.cart = [];
    $scope.total = 0;
})

angular.module("myApp.ruby",[]).controller("rubyCtrl",function($scope,$http){
    $http.get("../assets/json/diamond-gemstone.json").then(function(response){
        $scope.productList=[];
        angular.forEach(response.data,function(product){
            if(product.stone=="Ruby"&&product.type=="Crystals"){
                $scope.productList.push(product);
            }
        })
    })
    $scope.currentPage=1;
    $scope.pageSize=12;
    $scope.cart = [];
    $scope.total = 0;
})

angular.module("myApp.sapphire",[]).controller("sapphireCtrl",function($scope,$http){
    $http.get("../assets/json/diamond-gemstone.json").then(function(response){
        $scope.productList=[];
        angular.forEach(response.data,function(product){
            if(product.stone=="Sapphire"&&product.type=="Crystals"){
                $scope.productList.push(product);
            }
        })
    })
    $scope.currentPage=1;
    $scope.pageSize=12;
    $scope.cart = [];
    $scope.total = 0;
})

angular.module("myApp.emerald",[]).controller("emeraldCtrl",function($scope,$http){
    $http.get("../assets/json/diamond-gemstone.json").then(function(response){
        $scope.productList=[];
        angular.forEach(response.data,function(product){
            if(product.stone=="Emerald"&&product.type=="Crystals"){
                $scope.productList.push(product);
            }
        })
    })
    $scope.currentPage=1;
    $scope.pageSize=12;
    $scope.cart = [];
    $scope.total = 0;
})

angular.module("myApp.jewelry",[]).controller("jewelryCtrl",function($scope,$http){
    $http.get("../assets/json/diamond-gemstone.json").then(function(response){
        $scope.productList=[];
        angular.forEach(response.data,function(product){
            if(product.categories=="Jewelry"){
                $scope.productList.push(product);
            }
        })
    })
    $scope.currentPage=1;
    $scope.pageSize=24;
    $scope.cart = [];
    $scope.total = 0;
})

angular.module("myApp.necklaces",[]).controller("necklacesCtrl",function($scope,$http){
    $http.get("../assets/json/diamond-gemstone.json").then(function(response){
        $scope.productList=[];
        angular.forEach(response.data,function(product){
            if(product.type=="Necklace"){
                $scope.productList.push(product);
            }
        })
    })
    $scope.currentPage=1;
    $scope.pageSize=24;
    $scope.cart = [];
    $scope.total = 0;
})

angular.module("myApp.ring",[]).controller("ringCtrl",function($scope,$http){
    $http.get("../assets/json/diamond-gemstone.json").then(function(response){
        $scope.productList=[];
        angular.forEach(response.data,function(product){
            if(product.type=="Ring"){
                $scope.productList.push(product);
            }
        })
    })
    $scope.currentPage=1;
    $scope.pageSize=24;
    $scope.cart = [];
    $scope.total = 0;
})

angular.module("myApp.earrings",[]).controller("earringsCtrl",function($scope,$http){
    $http.get("../assets/json/diamond-gemstone.json").then(function(response){
        $scope.productList=[];
        angular.forEach(response.data,function(product){
            if(product.type=="Earrings"){
                $scope.productList.push(product);
            }
        })
    })
    $scope.currentPage=1;
    $scope.pageSize=24;
    $scope.cart = [];
    $scope.total = 0;
})

angular.module("myApp.newproduct",[]).controller("newproductCtrl",function($scope,$http){
    $http.get("../assets/json/diamond-gemstone.json").then(function(response){
        $scope.productList=[];
        angular.forEach(response.data,function(product){
            if(product.newPrd=="New Product"){
                $scope.productList.push(product);
            }
        })
    })
    $scope.currentPage=1;
    $scope.pageSize=12;
    $scope.cart = [];
    $scope.total = 0;
})

angular.module("myApp.saleoff",[]).controller("saleoffCtrl",function($scope,$http){
    $http.get("../assets/json/diamond-gemstone.json").then(function(response){
        $scope.productList=[];
        angular.forEach(response.data,function(product){
            if(product.sale=="Sale Off"){
                $scope.productList.push(product);
            }
        })
    })
    $scope.currentPage=1;
    $scope.pageSize=12;
    $scope.cart = [];
    $scope.total = 0;
})