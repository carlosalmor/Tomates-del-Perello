            $(function(){
           
                $(".slider").css("margin-left", "-" + 100 + "%");
           
                function adelante(){
                    $(".slider").animate({
                        marginLeft: "-" + 200 + "%"
                    }, 500, function(){
                    
                    $(".slider .slidersection:first-child").insertAfter(".slider .slidersection:last-child"); 
                    $(".slider").css("margin-left", "-" + 100 + "%");
                    });
                }
                
                function atras(){
                    $(".slider").animate({
                        marginLeft: 0
                    }, 500, function(){
                    
                    $(".slider .slidersection:last-child").insertBefore(".slider .slidersection:first-child"); 
                    $(".slider").css("margin-left", "-" + 100 + "%");
                    });
                }
                
                function autoplay(){
                    tiempoDuracion = setInterval(function(){
                        adelante();
                    }, 3000);
                }
                autoplay();
                
                $("#btn-next").click(function(){
                    adelante();
                    clearInterval(tiempoDuracion);
                    autoplay();
                });
                
                
                $("#btn-prev").click(function(){
                    atras();
                    clearInterval(tiempoDuracion);
                    autoplay();
                });
             
            })

			  /* PRIMERA FUNCION: BOTON SUBIR SCROLL */
			  
                $(function(){
                    
                    $("#subir").click(function(){
                        
                        $("body, html").animate({
                            scrollTop: "0px"
                        }, 400);    
                    });
                    
                    
                /* SEGUNDA FUNCIÓN: MENU ANCLADO AL APARTADO CORRESPONDIENTE */
                    
                    $(".scroll").click(function(){
                         
                        var topApartado = $($(this).attr("href")).offset().top
           
                        $("body, html").animate({
                            scrollTop: topApartado
                        }, 400);  
                    });
                    
                })
        
     

