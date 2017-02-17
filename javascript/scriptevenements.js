
$(document).ready(function() {
	$(document).on("scroll", function() {

		if($(document).scrollTop()>100) {
			$("#header").css("position", "fixed");
			$("#header").css("height", "4em");
			$("#logoimg").attr("src", "../images/firstblock/silveractfixed.png");
			$("#logo").css("width", "3%");
			$("#logo").css("padding-left", "8.5%");
			$("#telephone").hide();
			$("#mail").hide();
			$("#facebookimg").attr("src", "../images/firstblock/facebook.svg");
			$("#twitterimg").attr("src", "../images/firstblock/twitter.svg");
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
			$("#logoimg").attr("src", "../images/firstblock/logo.png");
			$("#logo").css("width", "15%");
			$("#logo").css("padding-left", "3.5%");
			$("#telephone").show();
			$("#mail").show();
			$("#facebookimg").attr("src", "../images/firstblock/facebook.svg");
			$("#twitterimg").attr("src", "../images/firstblock/twitter.svg");
			$("#facebook").css("top", "2em");
			$("#facebook").css("width", "23%");
			$("#twitter").css("top", "2em");
			$("#twitter").css("width", "23%");
			$("#twitter").css("right", "3.5em");
			$("#navigation").css("top", "");
			$("#navigation").css("height", "");

		}
	});
});