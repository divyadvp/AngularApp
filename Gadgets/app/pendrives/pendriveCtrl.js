(
function(){
   function pendriveCtrl($scope,pendriveSvc){
    $scope.getPendriveList=pendriveSvc.getPendrives();   
       
       
   }
    
    angular.module("pendrive").controller("pendriveCtrl",["$scope","pendriveSvc",pendriveCtrl]);
    
    
})();