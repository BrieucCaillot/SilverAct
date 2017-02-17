
$(document).ready(function() {
	$(document).on("scroll", function() {

		if($(document).scrollTop()>100) {
			$("#header").css("position", "fixed");
			$("#header").css("height", "4em");
			$("#logoimg").attr("src", "images/firstblock/silveractfixed.png");
			$("#logo").css("width", "3%");
			$("#logo").css("padding-left", "8.5%");
			$("#telephone").hide();
			$("#mail").hide();
			$("#facebookimg").attr("src", "images/firstblock/facebook.svg");
			$("#twitterimg").attr("src", "images/firstblock/twitter.svg");
			$("#facebook").css("top", "0.75em");
			$("#facebook").css("width", "16%");
			$("#twitter").css("top", "0.75em");
			$("#twitter").css("width", "16%");
			$("#twitter").css("right", "4.5em");
			$("#navigation").css("top", "49%");
			$("#navigation").css("border", "");
			$("#navigation").css("height", "99%");
		} else {
			$("#header").css("position", "absolute");
			$("#header").css("height", "8em");
			$("#logoimg").attr("src", "images/firstblock/logo.png");
			$("#logo").css("width", "15%");
			$("#logo").css("padding-left", "3.5%");
			$("#telephone").show();
			$("#mail").show();
			$("#facebookimg").attr("src", "images/firstblock/facebook.svg");
			$("#twitterimg").attr("src", "images/firstblock/twitter.svg");
			$("#facebook").css("top", "2em");
			$("#facebook").css("width", "23%");
			$("#twitter").css("top", "2em");
			$("#twitter").css("width", "23%");
			$("#twitter").css("right", "3.5em");
			$("#navigation").css("top", "");
			$("#navigation").css("height", "");

		}
	});

	$(document).on("scroll", function() {

		if($(document).scrollTop()>750) {
			$("#header").css("background-color", "#fff");
			$("#header").css("border-bottom", "2px solid #d1d3d4");
			$("#navigation").css("border-left", "2px solid #d1d3d4");
			$("#navigation").css("border-right", "2px solid #d1d3d4");
			$("#navigation ul li:nth-child(1)").css("border-right", "2px solid #d1d3d4");
			$("#navigation ul li:nth-child(2)").css("border-right", "2px solid #d1d3d4");
			$("#navigation ul li:nth-child(3)").css("border-right", "2px solid #d1d3d4");
			$("#navigation ul li:nth-child(4)").css("border-right", "2px solid #d1d3d4");
		} else {
			$("#header").css("background-color", "rgba(255, 255, 255, 0.5)");
			$("#header").css("border-bottom", "");
			$("#navigation ul li:nth-child(1)").css("border-right", "2px solid #fff");
			$("#navigation ul li:nth-child(2)").css("border-right", "2px solid #fff");
			$("#navigation ul li:nth-child(3)").css("border-right", "2px solid #fff");
			$("#navigation ul li:nth-child(4)").css("border-right", "2px solid #fff");
		}
	});
});