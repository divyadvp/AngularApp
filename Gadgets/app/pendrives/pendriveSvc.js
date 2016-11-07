(function(){
    function pendriveSvc(){
        this.getPendrives=function(){
            
            var pendrives=[{Name:"Sandisk",Capacity:"2Gb",Price:"452₹",imageUrl:"app/mobiles/images/c3010.jpg"},
                         {Name:"Hp",Capacity:"1Gb",Price:"650₹",imageUrl:"app/mobiles/images/on7.jpg"},
                         {Name:"Samsung",Capacity:"8Gb",Price:"1100₹",imageUrl:"app/mobiles/images/on5.jpg"},
                         {Name:"Apex",Capacity:"2Gb",Price:"500₹",imageUrl:"app/mobiles/images/nokia.jpg"}
                        ];
            return pendrives;

        };
        
    }
    
    angular.module("pendrive").service("pendriveSvc",pendriveSvc);
    
    
    
})();