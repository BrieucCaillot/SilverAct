/*============================================================
#title            : ANIMATION CARD
#description      : Animation des cartes pour ouverture des informations
#author           : 
#date             : 2017/02/04
#version          : Constantly on progress
#usage            : JAVASCRIPT/JQUERY
#notes            : Only working on search engine
=============================================================*/
$(document).ready(function(){
    
    var i = 0;

    //BIG CARDS : PIC 
    $("#boutton-pic").click(function() {
        $("#carte-pic").removeClass("animate-left");
        $("#carte-pic").addClass("animate_card");
        $("#carte-pic").css("left", "5%");
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
        $("#carte-pic").css("left", "5%");
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
        $("#carte-coeur").css("left", "50%");
        $("#carte-coeur").removeClass("animate_card2");
        $("#carte-pic").css("display", "block");
         $("#big-card-coeur").css("display","none");
        
        $("#carte-coeur").animate({
            width: "390px",
        }, 2000, 'easeOutQuint', function () {
            $("#small-coeur").css("display","block");
            
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
         
        $("#carte-treffle").css("left", "5%");
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
        $("#carte-carreau").css("left", "55%");
        $("#carte-carreau").removeClass("animate_card1");
        $("#carte-treffle").css("display", "block");
         $("#big-card-carreau").css("display","none");
        
        $("#carte-carreau").animate({
            width: "390px",
        }, 1000, 'easeOutQuint', function () {
            $("#small-carreau").css("display","block");
            
        });
    });
    
        //SCROLL
    window.onscroll = function(){
       if (document.body.scrollTop >= 700 && i == 0){
            $('#carte-pic').addClass("animate-left");
           ++i;
            }; 
        
        if (document.body.scrollTop >= 600 && i == 1){
            $('#carte-coeur').addClass("animate-right");
            ++i;
            };
        
        if (document.body.scrollTop >= 900 && i == 2){
            $('#carte-treffle').addClass("animate-left");
            ++i;
            };
        
        if (document.body.scrollTop >= 800 && i == 3){
            $('#carte-carreau').addClass("animate-right");
            ++i;
            };
        };
    

});
    