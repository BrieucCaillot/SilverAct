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
    
    
    $('#select-atelier').click(function () {
        console.log($("#select-atelier").val());
        $("#select-sortie option").remove();
        if ($('#select-atelier').val() == "Pic de l'informatique") {
            $('#select-sortie').append("<option>Choix de votre sortie</option><option>Musée des arts et métiers</option><option>Cité des sciences</option><option>Exposition</option>");
            
        } else if ($(this).val() == "Au coeur de l'histoire") {
            $('#select-sortie').append("<option>Choix de votre sortie</option><option>Musée d'Orsay</option><option>Le Louvre</option><option>Musée de la Photographie</option>");
            
         } else if ($(this).val() == "Trèfle joueur") {
            $('#select-sortie').append("<option>Choix de votre sortie</option><option>Le Lac des cygnes</option><option>Nos disques sont rayés</option><option>Moi et François B</option>"); 
             
        } else if ($(this).val() == "Carreau des artistes") {
            $('#select-sortie').append("<option>Choix de votre sortie</option><option>Exposition Maggrit</option><option>Musée d'Orsay</option><option>Moi et François B</option>"); 
        }
    });
});
