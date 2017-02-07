/* Shopright */

var body = document.getElementsByTagName("body");
var shop = document.getElementById("shopright");

window.onscroll = function(){
    if (document.body.scrollTop < 750){
        shop.style.position = "absolute";
        shop.style.top = "-560px";
    }   
    else if (document.body.scrollTop >= 750 && document.body.scrollTop <= 1400){
        shop.style.position = "fixed";
        shop.style.top = "118px";
    }
    else if (document.body.scrollTop > 1400){
        shop.style.position = "absolute";
        shop.style.top = "170px"; 
    }
};
