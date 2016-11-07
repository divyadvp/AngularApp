(function(){
    function mobileCntrl($scope,$rootScope,mobileSvc, cartSvc){
        $scope.Models=mobileSvc.getMobiles();
        $scope.limit=2;
        $scope.showmore=function()
        {
            if($scope.limit>7)
                {
                    alert("No products Available");
                }
         $scope.limit+=1;   
           
        };
        $scope.showless=function()
        {
            if($scope.limit==1){
                alert("You cant View Less");
            }
         if($scope.limit > 1) {
             $scope.limit-=1;
         }   
        };
        
                $scope.orderByPrice=function(){
          if($scope.priceorder=="modelPrice")
              {
              $scope.priceorder=
                  "-modelPrice";                  
              }
            else{
                
                $scope.priceorder="modelPrice";
            }
            
        };
        
        $scope.addToCart = function(item) {
            item.selected = true;
            cartSvc.addItemsToCart(item);
            $rootScope.$broadcast("ITEM_ADDED", {
                product: item
            });
        };
        $scope.removeFromCart=function(item){
            item.selected =false;
            $rootScope.$broadcast("ITEM_REMOVED",
                                 {
                product:item
            });
    
            
        };
            
        
        };
    
    angular.module("mobiles").controller("mobileCntrl",["$scope","$rootScope","mobileSvc", "cartSvc", mobileCntrl]);
    
    
})();