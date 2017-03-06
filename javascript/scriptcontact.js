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
            $("header").css("z-index", "200");
            $("header").css("padding", "0 0 0 0");
            $("header").css("margin-top", "-100px");

            $("#content").css("height", "60px");
            
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
            $("header").css("margin-top", "0");
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
    
    
    $('#select-workshop').change(function () {
        console.log($("#select-workshop").val());
        if ($('#select-workshop').val() == "Pic de l'informatique") {
            $('#select-exit .tile').css("display", "none"); 
            $('#select-exit .clover').css("display", "none"); 
            $('#select-exit .heart').css("display", "none");
            $('#select-exit .peak').css("display", "block");
            
            
        } else if ($(this).val() == "Au coeur de l'histoire") {
            $('#select-exit .tile').css("display", "none"); 
            $('#select-exit .clover').css("display", "none"); 
            $('#select-exit .heart').css("display", "block");
            $('#select-exit .peak').css("display", "none");
            
         } else if ($(this).val() == "Trèfle joueur") {
            $('#select-exit .tile').css("display", "none"); 
            $('#select-exit .clover').css("display", "block"); 
            $('#select-exit .heart').css("display", "none");
            $('#select-exit .peak').css("display", "none");
             
        } else if ($(this).val() == "Carreau des artistes") {
            $('#select-exit .tile').css("display", "block"); 
            $('#select-exit .clover').css("display", "none"); 
            $('#select-exit .heart').css("display", "none");
            $('#select-exit .peak').css("display", "none");
        }
    });
    
    //GETCOOKIES
        
        var PEAK1 = getCookie("PEAK1"),
            HEART1 = getCookie("HEART1"),
            CLOVER1 = getCookie("CLOVER1"),
            TILE1 = getCookie("TILE1");
             console.log(PEAK1);
    
        //PEAK
        if (PEAK1 == $('#select-exit #peak1').val()) {
            console.log($('#select-exit #peak1').val());
            $('#select-workshop #peak').attr("selected", "selected");
            $('#select-exit #peak1').attr("selected", "selected");
            
            $('#select-exit .tile').css("display", "none"); 
            $('#select-exit .clover').css("display", "none"); 
            $('#select-exit .heart').css("display", "none");
            $('#select-exit .peak').css("display", "block");
        }
    
        if (PEAK1 == $('#select-exit #peak2').val()) {
            console.log($('#select-exit #peak2').val());
            $('#select-workshop #peak').attr("selected", "selected");
            $('#select-exit #peak2').attr("selected", "selected");
            
            $('#select-exit .tile').css("display", "none"); 
            $('#select-exit .clover').css("display", "none"); 
            $('#select-exit .heart').css("display", "none");
            $('#select-exit .peak').css("display", "block");
        }
    
        if (PEAK1 == $('#select-exit #peak3').val()) {
            console.log($('#select-exit #peak3').val());
            $('#select-workshop #peak').attr("selected", "selected");
            $('#select-exit #peak3').attr("selected", "selected");
            
            $('#select-exit .tile').css("display", "none"); 
            $('#select-exit .clover').css("display", "none"); 
            $('#select-exit .heart').css("display", "none");
            $('#select-exit .peak').css("display", "block");
        }
        
        //HEART
    
        if (HEART1 == $('#select-exit #heart1').val()) {
            console.log($('#select-exit #heart1').val());
            $('#select-workshop #heart').attr("selected", "selected");
            $('#select-exit #heart1').attr("selected", "selected");
            
            $('#select-exit .tile').css("display", "none"); 
            $('#select-exit .clover').css("display", "none"); 
            $('#select-exit .heart').css("display", "block");
            $('#select-exit .peak').css("display", "none");
        }
    
        if (HEART1 == $('#select-exit #heart2').val()) {
            console.log($('#select-exit #heart2').val());
            $('#select-workshop #heart').attr("selected", "selected");
            $('#select-exit #heart2').attr("selected", "selected");
            
            $('#select-exit .tile').css("display", "none"); 
            $('#select-exit .clover').css("display", "none"); 
            $('#select-exit .heart').css("display", "block");
            $('#select-exit .peak').css("display", "none");
        }
    
        if (HEART1 == $('#select-exit #heart3').val()) {
            console.log($('#select-exit #heart3').val());
            $('#select-workshop #heart').attr("selected", "selected");
            $('#select-exit #heart3').attr("selected", "selected");
            
            $('#select-exit .tile').css("display", "none"); 
            $('#select-exit .clover').css("display", "none"); 
            $('#select-exit .heart').css("display", "block");
            $('#select-exit .peak').css("display", "none");
        }
    
        //CLOVER
    
        if (CLOVER1 == $('#select-exit #clover1').val()){
            console.log($('#select-exit #clover1').val());
            $('#select-workshop #clover').attr("selected", "selected");
            $('#select-exit #clover1').attr("selected", "selected");
            
            $('#select-exit .clover').css("display", "block"); 
            $('#select-exit .heart').css("display", "none");
            $('#select-exit .peak').css("display", "none");
        }
    
        if (CLOVER1 == $('#select-exit #clover2').val()) {
            console.log($('#select-exit #clover2').val());
            $('#select-workshop #clover').attr("selected", "selected");
            $('#select-exit #clover2').attr("selected", "selected");
            
            $('#select-exit .clover').css("display", "block"); 
            $('#select-exit .heart').css("display", "none");
            $('#select-exit .peak').css("display", "none");
        }
    
        if (CLOVER1 == $('#select-exit #clover3').val()) {
            console.log($('#select-exit #clover3').val());
            $('#select-workshop #clover').attr("selected", "selected");
            $('#select-exit #clover3').attr("selected", "selected");

            $('#select-exit .clover').css("display", "block"); 
            $('#select-exit .heart').css("display", "none");
            $('#select-exit .peak').css("display", "none");
        }
    
    
        //TILE
    
        if (TILE1 == $('#select-exit #tile1').val()) {
            console.log($('#select-exit #tile1').val());
            $('#select-workshop #tile').attr("selected", "selected");
            $('#select-exit #tile1').attr("selected", "selected");
            
            $('#select-exit .tile').css("display", "block"); 
            $('#select-exit .clover').css("display", "none"); 
            $('#select-exit .heart').css("display", "none");
            $('#select-exit .peak').css("display", "none");
        }
    
        if (TILE1 == $('#select-exit #tile2').val()) {
            console.log($('#select-exit #tile2').val());
            $('#select-workshop #tile').attr("selected", "selected");
            $('#select-exit #tile2').attr("selected", "selected");
            
            $('#select-exit .tile').css("display", "block"); 
            $('#select-exit .clover').css("display", "none"); 
            $('#select-exit .heart').css("display", "none");
            $('#select-exit .peak').css("display", "none");
        }
    
        if (TILE1 == $('#select-exit #tile3').val()) {
            console.log($('#select-exit #tile3').val());
            $('#select-workshop #tile').attr("selected", "selected");
            $('#select-exit #tile3').attr("selected", "selected");
            
            $('#select-exit .tile').css("display", "block"); 
            $('#select-exit .clover').css("display", "none"); 
            $('#select-exit .heart').css("display", "none");
            $('#select-exit .peak').css("display", "none");
        }
    
    $("#div-button-go").click(function() {
        eraseCookie("PEAK1");
        eraseCookie("HEART1");
        eraseCookie("CLOVER1");
        eraseCookie("TILE1");
        console.log("cookie");
    });
    
});
