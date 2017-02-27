$(document).ready(function() {
    
    //SCROLL MENU 
		$(document).on("scroll", function() {

		if($(document).scrollTop()>50) {
			$("header").css("position", "fixed");
			$("header").css("height", "60px");
            $("header").css("background", "white");
            $("header").css("border-bottom", "2px solid #d1d3d4");

            $("#secondblock").css("top", "100px");

			$("#logoimg").attr("src", "../images/firstblock/silveractfixed.svg");
            $("#logoimg").css("width", "20%");
            
			$("#logo").css("width", "15%");
            $("#logo").css("height", "60px");
            
			$("#telephone").hide();
			$("#mail").hide();
            
			$("#img-social").css("width", "50%");
            $("#social").css("height", "60px");
            
			$("#navigation").css("top", "49%");
			$("#navigation").css("border", "none");
			$("#navigation").css("height", "99%");
            
		} else {
            
			$("header").css("position", "relative");
			$("header").css("height", "126px");
            $("header").css("background", "white");
            $("header").css("border-bottom", "2px solid #d1d3d4");

            $("#secondblock").css("top", "0px");
            
			$("#logoimg").attr("src", "../images/firstblock/logo.svg");
            $("#logoimg").css("width", "65%");
            
			$("#logo").css("width", "15%");
            $("#logo").css("height", "126px");
            
			$("#telephone").show();
			$("#mail").show();
            
			$("#img-social").css("width", "50%");
            $("#social").css("height", "126px");
            
			$("#navigation").css("top", "49%");
			$("#navigation").css("border-top", "2px solid #d1d3d4");
			$("#navigation").css("height", "48%");

		}
	});
});