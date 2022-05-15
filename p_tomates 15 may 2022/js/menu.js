     /*JQUERY*/

$(function(){             
			   
             $("#botonMenu").click(function () {
             $("#nav").toggleClass("aparecer");
             });
			   
             $(".apartados").click(function () {
             $("#nav").toggleClass("aparecer");
             });
			   
			 $(".apartados_desplegable").click(function () {
             $(this).children("ul").slideToggle( );
             });
    
             $(".desplegable").click(function () {
             $("#nav").toggleClass("aparecer") ;
             });
			   
             });