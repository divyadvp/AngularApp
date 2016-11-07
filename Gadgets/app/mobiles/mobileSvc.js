(function(){
    function mobileSvc(){
        this.getMobiles=function(){
            
            var mobiles=[
                {
                    Name:"Moto",
                    modelName   : "Moto X Play(With Turbo Charger) (Black, 16 GB)",
                   imageUrl    : "app/mobiles/images/1.jpg",
                   modelPrice  : 15499,
                    contact:9965845699,
                   featureList : [ "2 GB RAM | 16 GB ROM |",
                                     "Expandable Upto 128 GB |",
                                     " 5.5 inch Full HD Display 21 MP Primary Camera |",
                                     "5 MP Front |",
                                     "3630 mAh Li - Ion Battery |Qualcomm Snapdragon 615 Processor" ] },
                { 
                    Name:"SAMSUNG",
                    modelName   : "SAMSUNG Galaxy On5 (Gold, 8 GB)",
                   imageUrl    : "app/mobiles/images/2.jpeg",
                   modelPrice  : 7490,
                    contact:9010256987,
                   featureList : [ "1.5 GB RAM | 8 GB ROM |",
                                     0,
                                     "8MP Primary Camera |",
                                     "5MP Front 2600 mAh Li-Ion Battery |",
                                     "Exynos 3475 ProcessorServices" ] },
                
                
                
                { Name:"Redmi",
                    modelName   : "Redmi Note 3 (Dark Grey, 32 GB)",
                   imageUrl    : "app/mobiles/images/3.jpeg",
                   modelPrice  : 10999,
                 contact:9912548977,
                   featureList : [ "3 GB RAM | 32 GB ROM |",
                                     "Expandable Upto 32 GB |",
                                     "5.5 inch Full HD Display |",
                                     "16MP Primary Camera |",
                                     "5MP Front | 4050 mAh Li-Polymer Battery Battery |Qualcomm Snapdragon 650 64-bit Processor" ] },
                { Name:"Apple",
                    modelName   : "Apple iPhone 7 (Black, 128 GB)",
                   imageUrl    : "app/mobiles/images/5.jpg",
                   modelPrice  : 70000,
                 contact:9989654789,
                   featureList : [ "128 GB ROM |",
                                     "4.7 inch Retina HD Display |",
                                     "12MP Primary Camera |",
                                     "7MP Front |Li-Ion Battery |",
                                     "A10 Fusion Chip with 64-bit Architecture and Embedded M10 Motion Co-processor Processor" ] },
                
                { Name:"Nexus",
                    modelName   : "Nexus 6P Special Edition (Gold, 64 GB)",
                   imageUrl    : "app/mobiles/images/9.jpeg",
                   modelPrice  : 36498,
                 contact:8965412569,
                   featureList : [ "3 GB RAM | 64 GB ROM |",
                                     "5.7 inch Quad HD Display |",
                                     "12.3MP Primary Camera |",
                                     "8MP Front |",
                                     "3450 mAh Li-Polymer Battery |",
                                     "Qualcomm Snapdragon 810 v2.1 64-bit Processor" ] },
                 { 
                      Name:"Gionee",
                     modelName   : "Gionee P5L (White, 16 GB)",
                   imageUrl    : "app/mobiles/images/10.jpeg",
                   modelPrice  : 8840,
                     contact:0945625987,
                   featureList : [ "1 GB RAM | 16 GB ROM |",
                                     "Expandable Upto 128 GB |",
                                     "5 inch HD Display |",
                                     "8MP Primary Camera |",
                                     "5MP Front2300 mAh Li-Ion Polymer Battery" ] },
                 { 
                     Name:"Sony",
                     modelName   : "Sony Xperia E1 Dual 4GB Black",
                   imageUrl   : "app/mobiles/images/11.jpeg",
                   modelPrice  : 9000,
                     contact:8965155269,
                   featureList : [ " 1 Year Brand Warranty |",
                                     "Android v4.3 (Jelly Bean) OS |",
                                     "3 MP Primary Camera  |",
                                     "Dual SIM (GSM + GSM)" ] }
                
                
                
                
                         ];
            return mobiles;
            
        }
        
    }
    
    angular.module("mobiles").service("mobileSvc",mobileSvc); 
    
    
})();