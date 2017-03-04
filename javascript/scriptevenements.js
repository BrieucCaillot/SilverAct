
$(document).ready(function() {
    
    //SCROll MENU @50 

    
    $(document).on("scroll", function() {

        if($(document).scrollTop()>50) {
            $("header").css("position", "fixed");
            $("header").css("height", "60px");
            
            $("#content").css("height", "60px");
            
            $("#logoimg").attr("src", "../images/firstblock/silveractfixed.svg");
            $("#logoimg").css("width", "25%");
            
            $("#logo").css("width", "15%");
            $("#logo").css("height", "60px");
            
            $("#img-head").css("width", "90%");
            $("#img-head").css("margin", "18px auto");
            $("header").css("z-index", "200");

            $("#navigation").css("margin-top", "0px");
            
        } else {
            
            $("header").css("position", "relative");
            $("header").css("height", "95px");
            
            $("#content").css("height", "auto");
            
            $("#logoimg").attr("src", "../images/firstblock/logo.svg");
            $("#logoimg").css("width", "70%");
            
            $("#logo").css("width", "15%");
            $("#logo").css("height", "95px");

            $("#img-head").css("width", "90%");
            $("#img-head").css("margin", "35px auto");
            $("header").css("z-index", "");
            
            $("#navigation").css("margin-top", "0px");

        }
    });
			/*$(window).scroll(function(){   
			   if ( $(window).scrollTop() > 50 ) {
			   		extraPadding = $(window).scrollTop() - 50;
			    	$('#secondblock #left').css( "padding-top", extraPadding );
			   } else {
			     	$('#secondblock #left').css( "padding-top", "0" );
			   }
			});*/

			var bodyleft = document.getElementsByTagName("body");
			var left = document.getElementById("left");

			window.onscroll = function(){
			    if (document.body.scrollTop < 100){
			        left.style.position = "absolute";
			        left.style.top = "0em";
			    }   
			    else if (document.body.scrollTop >= 750 && document.body.scrollTop <= 1400){
			        left.style.position = "fixed";
			        left.style.top = "118px";
			    }
			    else if (document.body.scrollTop > 1400){
			        left.style.position = "absolute";
			        left.style.top = "170px"; 
			    }
	};
});
