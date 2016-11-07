(function(){
    function headerCntrl($scope,$rootScope){
        $scope.cartItems=0;
                $scope.navItems = [{
                name: "Mobiles",
                templateUrl: "app/mobiles/mobile.html"
        },
            {
                name: "Camera",
                templateUrl: "app/camera/camera.html"
        }, {
                name: "LED'S",
                templateUrl: "app/leds/led.html"
        },
                                  {
                name: "Pendrives",
                templateUrl: "app/pendrives/pendrive.html"
        },
            {   name: "Login",
                templateUrl: "app/login/login.html"},
        {   name: "Cart",
                templateUrl: "app/cart/cart.html"}];
                
        
        $scope.brandName="Gadgets";
        $scope.headerUrl = "app/header/header.html";
        $scope.loadPage = function (item) {
            console.log(item);
            $scope.contentUrl=item.templateUrl;
            
        };
        $scope.$on("ITEM_ADDED",function(evt,args)
                      {
            console.log(args);
            $scope.cartItems++;
                    }
                      );
        $scope.$on("ITEM_REMOVED",function(evt, args){
           console.log(args);
            $scope.cartItems--;
        });
        
    };
    
    angular.module("header").controller("headerCntrl",headerCntrl);
    
    
})();