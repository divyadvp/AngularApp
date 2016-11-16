(function(){
    function cameraSvc(){
       this.getCameras=function(){
            
             var cameras=[{Name:"Canon",modelName:"Canon EOS 700D",modelPrice:"₹35,499",imageUrl:"app/camera/images/canon.jpg",description:"20MP, Optical Zoom: 3, size 3-inches, Autofocus"},
                         {Name:"Nikon",modelName:"Coolpix A300",modelPrice:"₹7,553",imageUrl:"app/camera/images/nikon.jpeg",description:"16MP, Optical Zoom: 5x, LCD Size: 2.7 inch"},
                         {Name:"Sony",modelName:"DSC-WX350",modelPrice:"₹18,480",imageUrl:"app/camera/images/sony1.jpg",description:"18.2 MP, Optical Zoom: 20, | LCD Size: 3 inch"}
                        
                        ];
            return cameras;
            
        }
            
        }    
       
    
    
    
    angular.module("camera").service("cameraSvc",cameraSvc); 
    
})();