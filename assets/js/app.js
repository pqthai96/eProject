'use strict';

var myapp=angular.module("myApp",[
    "ngRoute",
    "ui.bootstrap",
    "myApp.home",
    "myApp.slider",
    "myApp.banner",
    "myApp.shopall",
    "myApp.crystals",
    "myApp.diamond",
    "myApp.quartz",
    "myApp.ruby",
    "myApp.sapphire",
    "myApp.emerald",
    "myApp.jewelry",
    "myApp.necklaces",
    "myApp.ring",
    "myApp.earrings",
    "myApp.newproduct",
    "myApp.product-details",
    "myApp.saleoff",
    "ngCookies",
    "myApp.paginate-filter",
    "myApp.topsell",
    "myApp.blog",
    "myApp.blogDetails",
    "myApp.navBlog",
    "myApp.navBlogDetails",
    "myApp.fqa",
    "myApp.contact",
    "myApp.gallery"
]);

     myapp.config(function($routeProvider){
        $routeProvider
            .when("/",{
                templateUrl:"home.html",controller:"homePrdCtrl"
            })
            .when("/blog/:id",{
                templateUrl:"blog-details.html", controller:"blogDetailsCtrl"
            })
            .when("/blog",{
                templateUrl:"blog-navbar.html", controller:"navBlogCtrl"
            })
            .when("/navBlog/:id",{
                templateUrl:"blog-navbar-details.html", controller:"navBlogDetailsCtrl"
            })
            .when("/shopAll",{
                templateUrl:"shop-all.html",controller:"shopallCtrl"
            })
            .when("/Crystals",{
                templateUrl:"product-crystals.html",controller:"crystalsCtrl"
            })
            .when("/Diamonds",{
                templateUrl:"product-crystals.html",controller:"diamondCtrl"
            })
            .when("/Quartz",{
                templateUrl:"product-crystals.html",controller:"quartzCtrl"
            })
            .when("/Ruby",{
                templateUrl:"product-crystals.html",controller:"rubyCtrl"
            })
            .when("/Sapphire",{
                templateUrl:"product-crystals.html",controller:"sapphireCtrl"
            })
            .when("/Emerald",{
                templateUrl:"product-crystals.html",controller:"emeraldCtrl"
            })
            .when("/Jewelry",{
                templateUrl:"product-jewelry.html",controller:"jewelryCtrl"
            })
            .when("/Necklace",{
                templateUrl:"product-jewelry.html",controller:"necklacesCtrl"
            })
            .when("/Ring",{
                templateUrl:"product-jewelry.html",controller:"ringCtrl"
            })
            .when("/Earrings",{
                templateUrl:"product-jewelry.html",controller:"earringsCtrl"
            })
            .when("/newproduct",{
                templateUrl:"new-prd.html",controller:"newproductCtrl"
            })
            .when("/saleoff",{
                templateUrl:"saleoff.html",controller:"saleoffCtrl"
            })
            .when("/topsell",{
                templateUrl:"top-sell.html",controller:"topsellCtrl"
            })
            .when("/product-details/:productid",{
                templateUrl:"product-details.html",controller:"detailsCtrl"
            })
            .when("/cart",{
                templateUrl:"cart.html"
            })
            .when("/checkout",{
                templateUrl:"checkout.html"
            })
            .when("/wish",{
                templateUrl:"wishlist.html"
            })
            .when("/compare",{
                templateUrl:"compare.html"
            })
            .when("/about",{
                templateUrl:"about.html"
            })
            .when("/gallery",{
                templateUrl:"gallery.html", controller:"galleryCtrl"
            })
            .when("/fqa",{
                templateUrl:"fqa.html", controller:"fqaCtrl"
            })
            .when("/contact",{
                templateUrl:"contact.html", controller:"contactCtrl"
            })
            .otherwise({redirectTo: "/"});
        })

    myapp.controller("ratedCtrl",function($http,$scope){
        $http.get("../assets/json/rated-products.json").then(function(response){
            $scope.ratedlist=response.data;
        })
    })
    myapp.controller("mainCtrl",function($scope, $location,$cookies){
        $scope.search="";
        $scope.submit=function(){
            $scope.search=$scope.txtsearch
        }

        $scope.activePath = null;
        $scope.$on('$routeChangeSuccess', function(){
            $scope.activePath = $location.path();
            console.log($location.path() );
        })
//shopping cart
        $scope.cart = [];
        $scope.total = 0;
        // if(!angular.isUndefined($cookies.get('total'))){
        //     $scope.total = parseFloat($cookies.get('total'));
        //   }
        //   if (!angular.isUndefined($cookies.get('cart'))) {
        //            $scope.cart =  $cookies.getObject('cart');
        //   }
        var expireDate = new Date();
        expireDate.setDate(expireDate.getDate() + 1);
        // $cookies.putObject('cart', $scope.cart,  {'expires': expireDate});
        $scope.cart = $cookies.getObject('cart');
        $scope.countArr=0;
    $scope.addItemToCart = function(product){
            
       
         if ($scope.cart.length === 0){
             product.count = 1;
             $scope.cart.push(product);
             $scope.countArr++;
         } else{
             var repeat = false;
             for(var i = 0; i< $scope.cart.length; i++){
                 if($scope.cart[i].id === product.id){
                     repeat = true;
                     $scope.cart[i].count +=1;
                     $scope.countArr++
                 }
             }
             if (!repeat) {
                 product.count = 1;
                  $scope.cart.push(product);
                  $scope.countArr++;	
             }
         }
            // $cookies.put('total', $scope.total,  {'expires': expireDate});
            $scope.total += parseFloat(product.price);
     };
        
        $scope.removeItemCart = function(product){
       
       if(product.count > 1){
         product.count -= 1;
         $scope.countArr--
       }
       else if(product.count === 1){
         var index = $scope.cart.indexOf(product);
          $scope.cart.splice(index, 1);
          $scope.countArr--
       }
        $scope.total -= parseFloat(product.price);
        // $cookies.put('total', $scope.total,  {'expires': expireDate});
     };
//wishlist
        $scope.wish=[];
        // $cookies.putObject('wish', $scope.wish,  {'expires': expireDate});
        $scope.wish = $cookies.getObject('wish');
        $scope.addItemtoWish=function(product){
 
            if($scope.wish.length===0){
                $scope.wish.push(product);
               
            }
            else{
                var repeat = false;
                for(var i = 0; i< $scope.wish.length; i++){
                    if($scope.wish[i].id === product.id){
                        repeat=true;
                        break;
                    }
                }
                if (!repeat) {
                    $scope.wish.push(product);
                }
            }
           
        }
        
        $scope.removeItemWish=function(product){
            var index = $scope.wish.indexOf(product);
            $scope.wish.splice(index, 1);
        }
//compare
        $scope.compare=[];
        var index=0;
        if (!angular.isUndefined($cookies.get('compare'))) {
                $scope.compare =  $cookies.getObject('compare');
            }
        $scope.addItemToCompare=function(product){
            if($scope.compare.length<3){
                $scope.compare.push(product);
            }
            else{
                var repeat = false;
                for(var i = 0; i< $scope.compare.length; i++){
                    if($scope.compare[i].id === product.id){
                        repeat=true;
                        break;
                    }
                }
                if (!repeat) {
                    $scope.compare = $scope.compare.map((item,i)=>{
                        if(i === index){
                        return product
                        }
                        return item
                        })
                        if(index===2){
                            index=0;
                        }
                        else{
                            index=index + 1;
                        }
                    
                } 
            } 
            $cookies.putObject('compare', $scope.compare,{'expires': expireDate});
            $scope.compare = $cookies.getObject('compare');
        }
        $scope.removeItemCompare=function(product){
            var index = $scope.compare.indexOf(product);
            $scope.compare.splice(index, 1);
            
            $cookies.putObject('compare', $scope.compare, {'expires': expireDate});
            $scope.compare = $cookies.getObject('compare');
        }
});