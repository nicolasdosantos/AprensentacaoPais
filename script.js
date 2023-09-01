$("#botaoAtiva").on("click", function(){
    $("#inicio").slideUp("slow", function(){
        $("#conteudo").fadeIn("slow", function(){

            
$(function(){  // $(document).ready shorthand
    $('.monster').fadeIn('slow');
  });
  
  $(document).ready(function() {
      
      /* Every time the window is scrolled ... */
      $(window).scroll( function(){
      
          /* Check the location of each desired element */
          $('.hideme').each( function(i){
              
              var bottom_of_object = $(this).position().top + $(this).outerHeight();
              var bottom_of_window = $(window).scrollTop() + $(window).height();
              
              /* If the object is completely visible in the window, fade it it */
              if( bottom_of_window > bottom_of_object ){
                  
                  $(this).animate({'opacity':'1'},1000);
                      
              }
              
          }); 
      
      });
      
  });

        })
    })
})

$(document).ready(function() {

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,

        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })

});

