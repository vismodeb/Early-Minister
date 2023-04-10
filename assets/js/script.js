$(document).ready(function(){
   // Mobile Menu Icon
  $(document).ready(function(){
     $('#nav-icon').click(function(){
        $(this).toggleClass('open');
        $('.mobileNav').toggleClass('active');
     });
  });


  // owlCarousel
  $('.testimonials_content').owlCarousel({
     items:3,
     loop:true,
     margin:30,
     dots:true,
     autoplay:true,
     smartSpeed:500,
     responsive : {
      // breakpoint from 0 up
      0 : {
         items:1,
      },
      // breakpoint from 480 up
      768 : {
         items:2,
      },
      // breakpoint from 768 up
      991 : {
        items:3, 
      }
   }
  });

});


// ScrollBar
$(window).scroll(function () {
   const scrollBar = $(window).scrollTop();
   if (scrollBar > 300) {
     $(".header-area").addClass("header-fixed");
   } else {
     $(".header-area").removeClass("header-fixed");
   }
 });
