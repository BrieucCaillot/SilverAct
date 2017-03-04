$(document).ready(function() {
<<<<<<< HEAD
    
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
=======

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
            $("header").css("margin-top", "-100px");
            
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
            $("header").css("margin-top", "0");
            
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
>>>>>>> Brieuc
    
    
    $('#select-atelier').click(function () {
        console.log($("#select-atelier").val());
        $("#select-sortie option").remove();
        if ($('#select-atelier').val() == "Pic de l'informatique") {
            $('#select-sortie').append("<option>Choix de votre sortie</option><option>blabla</option>");
        } else if ($(this).val() == "Au coeur de l'histoire") {
            $('#select-sortie').append("<option>Choix de votre sortie</option><option>toto</option>"); 
        } else if ($(this).val() == "Carreau des artistes") {
            $('#select-sortie').append("<option>Choix de votre sortie</option><option>tata</option>"); 
        }
    });
});