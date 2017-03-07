$(document).ready(function() {
    
    //SCROll MENU @50 

    $(document).on("scroll", function() {

        if($(document).scrollTop()>50) {
            $("header").css("position", "fixed");
            $("header").css("height", "60px");
            $("header").css("z-index", "200");
            $("header").css("padding", "0 0 0 0");

            
            $("#contentheader").css("height", "60px");
            
            $("#logoimg").attr("src", "../images/firstblock/silveractfixed.svg");
            $("#logoimg").css("width", "25%");
            
            $("#logo").css("width", "15%");
            $("#logo").css("height", "60px");
            
            $("#img-head").css("width", "90%");
            $("#img-head").css("margin", "18px auto");
            

            $("#navigation").css("margin-top", "0px");
            
        } else {
            
            $("header").css("position", "relative");
            $("header").css("height", "95px");
            $("header").css("padding", "10px 0 10px 0");
            
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
});
