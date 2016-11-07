(function(){
    function cameraSvc(){
        this.getCameras=function(){
            
             var cameras=[{Name:"Canon",Model:"c3010",Price:3000,imageUrl:"app/camera/images/c3010.jpg"},
                         {Name:"Nikon",Model:"ON7",Price:10000,imageUrl:"app/mobiles/images/on7.jpg"},
                         {Name:"Coolpix",Model:"c543",Price:12000,imageUrl:"app/mobiles/images/on5.jpg"},
                         {Name:"Nokia",Model:"c1010",Price:5500,imageUrl:"app/mobiles/images/nokia.jpg"}
                        ];
            return cameras;
            
        }
            
        }    
        
    
    
    
    angular.module("camera").service("cameraSvc",cameraSvc); 
    
})();