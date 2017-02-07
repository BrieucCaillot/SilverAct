/*============================================================
#title            : ANIMATION CARD
#description      : Animation des cartes pour ouverture des informations
#author           : DUPRE Anthony
#date             : 2017/02/04
#version          : Constantly on progress
#usage            : JAVASCRIPT/JQUERY
#notes            : Only working on search engine
=============================================================*/
$(document).ready(function(){

    $("#button-card").click(function() {
        $("#card1").addClass("animate_card");    
        $("#card1").animate({
            width: "740px",
        }, 2500, 'easeOutQuint', function () {
            
            $("#card1").append("<p> BONJOUR JE SUIS LE TEXTE QUI SERA ICI. VOUS POUVEZ AJOUTER N'IMPORTE QUEL BALISE !! BON COURAGE</p>");
            
            $("#card1").append("<p> BOUHHHH</p>");
        });
    });
});
    