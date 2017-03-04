$(document).ready(function() {

    // MODIF CSS MENU ACCUEIL ON CLICK
    $("#navigation ul li:first-child a").click(function() {
        $(this).css({
            'background-color' : '#148fad',
            'font-family' : 'Gotham-Bold',
            'color' : '#fff'
        });
    });
    

    //SCROll MENU @50 

    
    $(document).on("scroll", function() {

        if($(document).scrollTop()>50) {
            $("header").css("position", "fixed");
            $("header").css("height", "60px");
            
            $("#content").css("height", "60px");
            
            $("#logoimg").attr("src", "images/firstblock/silveractfixed.svg");
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
            
            $("#logoimg").attr("src", "images/firstblock/logo.svg");
            $("#logoimg").css("width", "70%");
            
            $("#logo").css("width", "15%");
            $("#logo").css("height", "95px");

            $("#img-head").css("width", "90%");
            $("#img-head").css("margin", "35px auto");
            $("header").css("z-index", "");
            
            $("#navigation").css("margin-top", "0px");

        }
    }); 
        
    //PLAY
    
    $("#play").click(function () {
        $("#firstblock").css("display","none");
        $("#thirdblock").css("display","none");
        $("#news").css("display","none");
        $("footer").css("display","none");
        
        $("#video").css("display","block");
        $("#video").addClass("open");
        $("#video").removeClass("close");
        
    });
    
    //QUIT
    
    $("#video img").click(function () {
        $("#firstblock").css("display","block");
        $("#thirdblock").css("display","block");
        $("#news").css("display","block");
        $("footer").css("display","block"); 
        
          
        $("#video").removeClass("open");
        $("#video").addClass("close");
        $("#video").css("display","none");
      
    });

    var i = 0;

    //BIG CARDS : PIC 
    $("#boutton-pic").click(function() {
        $("#carte-pic").removeClass("animate-left");
        $("#carte-pic").addClass("animate_card");
        $("#carte-pic").css("left", "5%");
        $("#carte-coeur").css("display", "none");
        $("#small-pic").css("display","none");
        $("#carte-pic").animate({
                width: "1100px",
            }, 2000, 'easeOutQuint', function () {
            $("#big-card-pic").css("display","block");
        });
    });
    
    //BUTTON BACK PIC
     $("#boutton-retour-pic").click(function() {
        $("#carte-pic").css("left", "100px");
        $("#carte-pic").removeClass("animate_card");
        $("#carte-coeur").css("display", "block");
        $("#big-card-pic").css("display","none");

        $("#carte-pic").animate({
            width: "390px",
        }, 2000, 'easeOutQuint', function () {
            $("#small-pic").css("display","block");
            
        });
    });
    
    //BIG CARD COEUR
        $("#boutton-coeur").click(function() {
        $("#carte-coeur").removeClass("animate-right");
        $("#carte-coeur").removeClass("animate-mouve-small-card");
        $("#carte-coeur").addClass("animate_card2");
        $("#carte-coeur").css("left", "5%");
        $("#carte-pic").css("display", "none");
        $("#small-coeur").css("display","none");
        $("#carte-coeur").animate({
            width: "1100px",
        }, 2000, 'easeOutQuint', function () {
            $("#big-card-coeur").css("display","block");
        });
    });
    
    //BUTTON BACK COEUR
     $("#boutton-retour-coeur").click(function() {
        
        $("#carte-coeur").removeClass("animate_card2");
        $("#big-card-coeur").css("display","none");
        $("#carte-coeur").animate({
            width: "390px",
        }, 2000, 'easeOutQuint', function () {
            $("#small-coeur").css("display","block");
             $("#carte-coeur").addClass("animate-mouve-small-card");
             $("#carte-pic").css("display", "block");
            
        });
    });
    
    //BIG CARD TREFLE
        $("#boutton-treffle").click(function() {
        $("#carte-treffle").removeClass("animate-left");
        $("#carte-treffle").addClass("animate_card1");
        $("#carte-treffle").css("left", "5%");
        $("#carte-carreau").css("display", "none");
        $("#small-trefle").css("display","none");
        $("#carte-treffle").animate({
            width: "1100px",
        }, 2000, 'easeOutQuint', function () {
            $("#big-card-trefle").css("display","block");
        });
    });
    
    //BUTTON BACK TREFLE
    $("#boutton-retour-trefle").click(function() {
         
         $("#carte-treffle").css("left", "100px");
         $("#carte-treffle").removeClass("animate_card1");
         $("#carte-carreau").css("display", "block");
         $("#big-card-trefle").css("display","none");
        
        $("#carte-treffle").animate({
            width: "390px",
        }, 2000, 'easeOutQuint', function () {
        $("#small-trefle").css("display","block");
        });
    });
    
    //BIG CARD CARREAU
        $("#boutton-carreau").click(function() {
        $("#carte-carreau").removeClass("animate-right");
        $("#carte-carreau").removeClass("animate-mouve-small-card");
        $("#carte-carreau").addClass("animate_card1");
        $("#carte-carreau").css("left", "5%");
        $("#carte-treffle").css("display", "none");
        $("#small-carreau").css("display","none");
        $("#carte-carreau").animate({
            width: "1100px",
        }, 1500, 'easeInOutCirc', function () {
            $("#big-card-carreau").css("display","block");
        });
    });
    
    //BUTTON BACK CARREAU
    $("#boutton-retour-carreau").click(function() {
    $("#carte-carreau").removeClass("animate_card1");
    $("#big-card-carreau").css("display","none");
    $("#carte-carreau").animate({
        width: "390px",
    }, 1000, 'easeOutQuint', function () {
        $("#small-carreau").css("display","block");
        $("#carte-carreau").addClass("animate-mouve-small-card");
        $("#carte-treffle").css("display", "block");
        });
    });
    
        //SCROLL
    window.onscroll = function(){
       if (document.body.scrollTop >= 800 && i == 0){
            $('#carte-pic').addClass("animate-left");
           ++i;
            };
        
        if (document.body.scrollTop >= 900 && i == 1){
            $('#carte-coeur').addClass("animate-right");
            ++i;
            };
        
        if (document.body.scrollTop >= 1100 && i == 2){
            $('#carte-treffle').addClass("animate-left");
            ++i;
            };
        
        if (document.body.scrollTop >= 1200 && i == 3){
            $('#carte-carreau').addClass("animate-right");
            ++i;
            };
        };

});