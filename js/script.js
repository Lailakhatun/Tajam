$(function () {
    //slick slider 
  $('.image').slick({
      
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        dots:true,
        prevArrow:'<i class="fas fa-chevron-left prev_arrow"></i>',
        nextArrow:'<i class="fas fa-chevron-right next_arrow"></i>',
      
      });

      // mix it up
      var containerEl = document.querySelector('.r-part');

            var mixer = mixitup(containerEl);

            // mix it up
            $('.peo-banner').slick({
              arrows:false,
              dots:true,
            });
            // sticky manu
           var navOff =  $('.navigation').offset().top;
           $(window).scroll(function(){
            var scrolling =  $(this).scrollTop();

            if(scrolling > navOff){
              $('.navigation').addClass('manu-fix');
            }else{
              $('.navigation').removeClass('manu-fix');
            }
           });

          //  back to top
          $('.back-to-top').click(function(){
            $('html,body').animate({
              scrollTop:0,
            },1000);
          });

          $(window).scroll(function(){
           var scrolling2 =  $(this).scrollTop();

           if(scrolling2 > 150){
             $('.back-to-top').fadeIn();
           }else{
             $('.back-to-top').fadeOut();
           }
          });
});