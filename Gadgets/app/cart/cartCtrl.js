(function (){
    
    function cartCtrl($scope,cartSvc){
        
        
        $scope.getCount=cartSvc.getItems().length;
        //console.log($scope.getCount);
        $scope.getData=cartSvc.getItems();
/*
        $scope.$on("ITEM_ADDED",function(evt,args) {
                     
                        
                    });
//        $scope.$on("ITEM_REMOVED",function(evt, args){
//           
//        });
*/
        
//        
        
    }
    
        
    
    angular.module("cart",[]).controller("cartCtrl",["$scope","cartSvc",cartCtrl]);
})();