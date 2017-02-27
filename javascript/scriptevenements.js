
$(document).ready(function() {

		$("header").css("border-bottom", "2px solid rgb(209, 211, 212)");
		$("#navigation").css("margin-top", "2px");
    
    //SCROLL MENU 
		$(document).on("scroll", function() {

		if($(document).scrollTop()>50) {
			$("header").css("position", "fixed");
			$("header").css("height", "60px");
            $("header").css("background", "white");

            $("#secondblock").css("top", "100px");

			$("#logoimg").attr("src", "../images/firstblock/silveractfixed.svg");
            $("#logoimg").css("width", "20%");
            
			$("#logo").css("width", "15%");
            $("#logo").css("height", "60px");
            
			$("#telephone").hide();
			$("#mail").hide();
            
			$("#img-social").css("width", "50%");
            $("#social").css("height", "60px");

            $("#navigation").css("margin-top", "0px");
            
		} else {
            
			$("header").css("position", "relative");
			$("header").css("height", "126px");
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
            
			$("#navigation").css("margin-top", "2px");

		}
	});
			$(window).scroll(function(){   
			   if ( $(window).scrollTop() > 50 ) {
			   		extraPadding = $(window).scrollTop() - 50;
			    	$('#secondblock #left').css( "padding-top", extraPadding );
			   } else {
			     	$('#secondblock #left').css( "padding-top", "0" );
			   }
			});

	/*window.onscroll = function(){
      if (document.body.scrollTop < 50 && document.body.scrollTop < 100){
        console.log('toto')
           $('#secondblock #left').css({
               position : "absolute",
               top : "118px",
               left : "30px"
           });
      }
       else if (document.body.scrollTop >= 100 && document.body.scrollTop <= 500){
      	console.log('brieuc tu es moche');
          $('#left').css({
               position : "fixed",
           });
      }
      else if (document.body.scrollTop > 500){
       	  console.log('tata')
          $('#secondblock #left').css({
               position : "absolute",
               top : "780px",
               left : "30px",
           });
      }
   }*/
			
});