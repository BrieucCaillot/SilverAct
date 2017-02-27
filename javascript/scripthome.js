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
            $("header").css("background-color", "rgba(255, 255, 255, 0.8)");
            
            $("#logoimg").attr("src", "images/firstblock/silveractfixed.svg");
            $("#logoimg").css("width", "20%");
            
            $("#logo").css("width", "15%");
            $("#logo").css("height", "60px");
            
            $("#telephone").hide();
            $("#mail").hide();
            
            $("#img-socialimg").css("width", "10%");
            $("#social").css("height", "60px");

            $("#navigation").css("margin-top", "0px");
            
        } else {
            
            $("header").css("position", "absolute");
            $("header").css("height", "126px");
            $("header").css("background-color", "rgba(255, 255, 255, 0.8)");
            
            $("#logoimg").attr("src", "images/firstblock/logo.svg");
            $("#logoimg").css("width", "65%");
            
            $("#logo").css("width", "15%");
            $("#logo").css("height", "126px");
            
            $("#telephone").show();
            $("#mail").show();
            
            $("#img-socialimg").css("width", "50%");
            $("#social").css("height", "126px");
            
            $("#navigation").css("margin-top", "2px");

        }
    });

    // SCROLL MENU @750

    $(document).on("scroll", function() {

        if($(document).scrollTop()>750) {

            $("header").css("background-color", "#fff");
            $("header").css("border-bottom", "2px solid rgb(209, 211, 212)");
  
        } else {

            $("header").css("background-color", "rgba(255, 255, 255, 0.8)");
            $("header").css("border-bottom", "");
            $("header").css("z-index", "");
            
            

        }
    });

    // FADE IN - FADE OUT PRESENTATION TEXTE

    $(document).on("scroll", function() {
        
        if($(document).scrollTop()>600) {

            $("#secondblock h1").fadeIn();

        } else {

            $("#secondblock h1").fadeOut();

        }
    });

    var i = 0;

    //BIG CARDS : PIC 
    $("#boutton-pic").click(function() {
        
        $("#carte-pic").removeClass("animate-left");
        $("#carte-pic").addClass("animate_card");
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
         $("#carte-pic").css("margin-left", "100px");
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
        //$("#carte-coeur").css("left","");
       
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
       if (document.body.scrollTop >= 1000 && i == 0){
            $('#carte-pic').addClass("animate-left");
           ++i;
            };
        
        if (document.body.scrollTop >= 900 && i == 1){
            $('#carte-coeur').addClass("animate-right");
            ++i;
            };
        
        if (document.body.scrollTop >= 2500 && i == 2){
            $('#carte-treffle').addClass("animate-left");
            ++i;
            };
        
        if (document.body.scrollTop >= 2000 && i == 3){
            $('#carte-carreau').addClass("animate-right");
            ++i;
            };
        };


});