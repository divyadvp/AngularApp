(function(){
    function cameraCtrl($scope,cameraSvc){
        $scope.
        cameraData=cameraSvc.getCameras();
        
        
    };
    angular.module("camera").controller("cameraCtrl",["$scope","cameraSvc",cameraCtrl]);
    
    
    
    
})();