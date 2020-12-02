$(document).ready(function () {

  $('a[href^="#header"').on('click', function () {

    var href = $(this).attr('href');

    $('html, body').animate({
      scrollTop: $(href).offset().top
    }, 1000);
    return false;
  });

  $('.slider__list').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        }
      }
    ]
  });
  $(window).on("resize", function(){
    var width = $(document).width();

    if (width < 1300) {
      if($('.popular__list').hasClass('slick-initialized')) {
        $('.popular__list').slick('unslick');
        }
    } else {
      $('.popular__list').not('.slick-initialized').slick({
        infinite: true,
      speed: 300,
      slidesToShow: 6,
      slidesToScroll: 1,
      centerPadding: '20px',
      responsive: [
        {
          breakpoint: 1300,
          settings: 'unslick'
        }
      ]
      });
    }
  });
});



