$(function(){
  // Trigger 
  $('.trigger').click(function(){
    $(this).toggleClass('active')
    $('.gnb').toggleClass('active')
  })

  $('.gnb a').click(function(){
    $('.gnb, .trigger').removeClass('active')
  })

  // Sliding Jquery
$('.gnb a').click(function(e){
  $.scrollTo(this.hash || 0, 800);
  e.preventDefault();
})

  // Header Scroll change
  // 선택자가 window
  // window에서 스크롤을 했는데 위쪽이 50px보다 높다면~ 
  $(window).scroll(function(){
    if($(window).scrollTop() > 50) {
      $('header, .gototop').addClass('active')
    }
    else {
      $('header, .gototop').removeClass('active')
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
    ]
  });

  $('.mainslider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    fade: true,
    cssEase: 'linear'
  });
})