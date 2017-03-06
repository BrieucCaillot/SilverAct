$(document).ready(function() {

    // MODIF CSS MENU ACCUEIL ON CLICK
    $("#navigation ul li:first-child a").click(function() {

        $(this).css({
            "background-color": "148fad",
            "color": "fff",
            "font-family" : "Gotham-Medium"
        });
        $("#navigation ul li:first-child").removeClass('hvr-sweep-to-top');
            $("#navigation ul li:nth-child(2)").addClass('hvr-sweep-to-top');
            $("#navigation ul li:nth-child(2) a").css({
                "color" : "#148fad",
                "font-family" : "Gotham-Light" 
            });
            $("#navigation ul li:nth-child(2) a").removeAttr('style');
    });

    // BUTTON PLAY 
    
    $("#button-play").hover(
        function(){
            $("#circle-play").animate({width : "145px"});
        },
        function(){
            $("#circle-play").animate({width : "40px"});
    });



    // MODIF CSS MENU ACTIVITÉ ON CLICK
    $("#navigation ul li:nth-child(2) a").click(function() {

        $(this).css({
            "background-color": "148fad",
            "color": "fff",
            "font-family" : "Gotham-Medium"
        });
        $("#navigation ul li:nth-child(2)").removeClass('hvr-sweep-to-top');
            $("#navigation ul li:first-child").addClass('hvr-sweep-to-top');
            $("#navigation ul li:first-child a").css({
                "color" : "#148fad",
                "font-family" : "Gotham-Light" 
            });
            $("#navigation ul li:first-child a").removeAttr('style');


    });

    // SMOOTH SCROLL TO ACTIVITÉ
    
    $("#navigation ul li:nth-child(2)").click(function() {
    $('html, body').animate({
        scrollTop: $("#thirdblock").offset().top
        }, 2000);
    });

    // SMOOTH SCROLL TO ACTIVITÉ

    
    $("#navigation ul li:nth-child(2)").click(function() {
    $('html, body').animate({
        scrollTop: $("#thirdblock").offset().top
        }, 2000);
    });
    // SMOOTH SCROLL TO ACCUEIL
    
    $("#navigation ul li:first-child").click(function() {
    $('html, body').animate({
        scrollTop: $("#firstblock").offset().top
        }, 2000);
    });

    
    //SCROll MENU @50 

    
    $(document).on("scroll", function() {

        if($(document).scrollTop()>50) {
            $("header").css("position", "fixed");
            $("header").css("height", "60px");
            $("header").css("z-index", "200");
            $("header").css("padding", "0 0 0 0");
            
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
            $("header").css("padding", "10px 0 10px 0");
            
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

    //BIG CARDS : PEAK
    $("#button-peak").click(function() {
        $("#card-peak").removeClass("animate-left");
        $("#card-peak").addClass("animate_card");
        $("#card-peak").css("left", "5%");
        $("#card-heart").css("display", "none");
        $("#small-peak").css("display","none");
        $("#card-peak").animate({
                width: "1100px",
            }, 1000, 'easeInOutCirc', function () {
            $("#big-card-peak").css("display","block");
        });
    });
    
    //BUTTON BACK PEAK
     $("#button-back-peak").click(function() {
        $("#card-peak").css("left", "100px");
        $("#card-peak").removeClass("animate_card");
        $("#card-heart").css("display", "block");
        $("#big-card-peak").css("display","none");

        $("#card-peak").animate({
            width: "390px",
        }, 1000, 'easeOutQuint', function () {
            $("#small-peak").css("display","block");
            
        });
    });
    
    //BIG CARD HEART
        $("#button-heart").click(function() {
        $("#card-heart").removeClass("animate-right");
        $("#card-heart").removeClass("animate-mouve-small-card");
        $("#card-heart").addClass("animate_card2");
        $("#card-heart").css("left", "5%");
        $("#card-peak").css("display", "none");
        $("#small-heart").css("display","none");
        $("#card-heart").animate({
            width: "1100px",
        }, 1000, 'easeInOutCirc', function () {
            $("#big-card-heart").css("display","block");
        });
    });
    
    //BUTTON BACK HEART
     $("#button-back-heart").click(function() {
        
        $("#card-heart").removeClass("animate_card2");
        $("#big-card-heart").css("display","none");
        $("#card-heart").animate({
            width: "390px",
        }, 1000, 'easeOutQuint', function () {
            $("#small-heart").css("display","block");
             $("#card-heart").addClass("animate-mouve-small-card");
             $("#card-peak").css("display", "block");
            
        });
    });
    
    //BIG CARD CLOVER
        $("#button-clover").click(function() {
        $("#card-clover").removeClass("animate-left");
        $("#card-clover").addClass("animate_card1");
        $("#card-clover").css("left", "5%");
        $("#card-tile").css("display", "none");
        $("#small-clover").css("display","none");
        $("#card-clover").animate({
            width: "1100px",
        }, 1000, 'easeInOutCirc', function () {
            $("#big-card-clover").css("display","block");
        });
    });
    
    //BUTTON BACK CLOVER
    $("#button-back-clover").click(function() {
         
         $("#card-clover").css("left", "100px");
         $("#card-clover").removeClass("animate_card1");
         $("#card-tile").css("display", "block");
         $("#big-card-clover").css("display","none");
        
        $("#card-clover").animate({
            width: "390px",
        }, 1000, 'easeOutQuint', function () {
        $("#small-clover").css("display","block");
        });
    });
    
    //BIG CARD TILE
        $("#button-tile").click(function() {
        $("#card-tile").removeClass("animate-right");
        $("#card-tile").removeClass("animate-mouve-small-card");
        $("#card-tile").addClass("animate_card1");
        $("#card-tile").css("left", "5%");
        $("#card-clover").css("display", "none");
        $("#small-tile").css("display","none");
        $("#card-tile").animate({
            width: "1100px",
        }, 1000, 'easeInOutCirc', function () {
            $("#big-card-tile").css("display","block");
        });
    });
    
    //BUTTON BACK TILE
    $("#button-back-tile").click(function() {
    $("#card-tile").removeClass("animate_card1");
    $("#big-card-tile").css("display","none");
    $("#card-tile").animate({
        width: "390px",
    }, 1000, 'easeOutQuint', function () {
        $("#small-tile").css("display","block");
        $("#card-tile").addClass("animate-mouve-small-card");
        $("#card-clover").css("display", "block");
        });
    });
    
    
        //SCROLL
    window.onscroll = function(){
       if (document.body.scrollTop >= 500 && i == 0){
            $('#card-peak').addClass("animate-left");
           ++i;
            };
        
        if (document.body.scrollTop >= 600 && i == 1){
            $('#card-heart').addClass("animate-right");
            ++i;
            };
        
        if (document.body.scrollTop >= 800 && i == 2){
            $('#card-clover').addClass("animate-left");
            ++i;
            };
        
        if (document.body.scrollTop >= 900 && i == 3){
            $('#card-tile').addClass("animate-right");
            ++i;
            };
        };
    
  
});