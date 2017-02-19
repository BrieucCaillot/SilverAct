$(document).ready(function() {
    
    
    //SCROll MENU 
	$(document).on("scroll", function() {

		if($(document).scrollTop()>50) {
			$("header").css("position", "fixed");
			$("header").css("height", "60px");
            
			$("#logoimg").attr("src", "images/firstblock/silveractfixed.svg");
            $("#logoimg").css("width", "20%");
            
			$("#logo").css("width", "15%");
            $("#logo").css("height", "60px");
            
			$("#telephone").hide();
			$("#mail").hide();
            
			$("#img-socialimg").css("width", "10%");
            $("#social").css("height", "60px");
            
			$("#navigation").css("top", "49%");
			$("#navigation").css("border", "none");
            $("#navigation ul li:last-child").css("border", "none");
			$("#navigation").css("height", "99%");
            
		} else {
            
			$("header").css("position", "absolute");
			$("header").css("height", "126px");
            
			$("#logoimg").attr("src", "images/firstblock/logo.svg");
            $("#logoimg").css("width", "65%");
            
			$("#logo").css("width", "15%");
            $("#logo").css("height", "126px");
            
			$("#telephone").show();
			$("#mail").show();
            
			$("#img-socialimg").css("width", "50%");
            $("#social").css("height", "126px");
            
			$("#navigation").css("top", "49%");
			$("#navigation").css("border-top", "2px solid white");
            $("#navigation ul li:last-child").css("border", "none");
			$("#navigation").css("height", "48%");

		}
	});

	$(document).on("scroll", function() {
		
		if($(document).scrollTop()>600) {

			$("#secondblock h1").fadeIn();

		} else {

			$("#secondblock h1").fadeOut();

		}
	});


	$(document).on("scroll", function() {

		if($(document).scrollTop()>750) {

			$("header").css("background-color", "#fff");
			$("header").css("border-bottom", "2px solid #d1d3d4");

            $("#logo").css("border-right", "2px solid #d1d3d4");
            
            $("#social").css("border-left", "2px solid #d1d3d4");
            
			$("#navigation ul li").css("border-right", "2px solid #d1d3d4");
            
            $("#navigation ul li:last-child").css("border", "none");
  
		} else {

			$("header").css("background-color", "rgba(255, 255, 255, 0.5)");
			$("header").css("border-bottom", "");
            $("header").css("z-index", "");
            
            $("#logo").css("border-right", "2px solid #fff");
            
            $("#social").css("border-left", "2px solid #fff");
            
			$("#navigation ul li").css("border-right", "2px solid #fff");
            
            $("#navigation ul li:last-child").css("border", "none");

		}
	});
});