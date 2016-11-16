(function(){
    function cameraCtrl($scope,cameraSvc,cartSvc){
        
        $scope.camData=cameraSvc.getCameras();
        
        $scope.buy=function(item){
            item.selected=true;
            cartSvc.addItemsToCart(item);
            
        };
        
    };
    angular.module("camera").controller("cameraCtrl",["$scope","cameraSvc","cartSvc",cameraCtrl]);
    
    
    
    
})();