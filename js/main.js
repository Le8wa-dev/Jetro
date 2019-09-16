$('.slider__inner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.slider__mini'
  });
  $('.slider__mini').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider__inner',
    dots: true,
    focusOnSelect: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },

    ]
  });

  $('.header__menu-btn').on('click',function(){
      $('.header__menu > ul').slideToggle();
  })
                  
