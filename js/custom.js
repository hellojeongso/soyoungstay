$(function(){

  // Header Scroll change
  // 선택자가 window
  // window에서 스크롤을 했는데 위쪽이 50px보다 높다면~ 
  $(window).scroll(function(){
    if($(window).scrollTop() > 50) {
      $('header').addClass('active')
    }
    else {
      $('header').removeClass('active')
    }
  })


  // slick.js
  $('.myslider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
})