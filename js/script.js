 
//  burger menu
 $(document).ready(function() {
   $('.header__burger').click(function() {
     $('.header__top-wrapper').toggleClass('active');
     $('body').toggleClass('stop-skroll');
   });
 });
 
