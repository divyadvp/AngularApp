(function (){
    
    function cartSvc(){
        var itemsCart=[];
        this.addItemsToCart=function(data){
            itemsCart.push(data);
        };
        this.getItems=function(){
             return itemsCart;
        };
        
        
    }
    
    
    
    angular.module("cart").service("cartSvc",cartSvc);
})();