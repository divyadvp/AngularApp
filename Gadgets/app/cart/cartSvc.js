(function (){
    
    function cartSvc(){
        var itemsCart=[];
        this.addItemsToCart=function(data){
            itemsCart.push(data);
            
        };
        this.removeCartItems=function(data)
        {
            var index=itemsCart.indexOf(data);
           itemsCart.splice(index, 1);
             /*itemsCart.pop(data);*/
            
        };
        this.getItems=function(){
             return itemsCart;
        };
        
        
        
    }
    
    
    
    angular.module("cart").service("cartSvc",cartSvc);
})();