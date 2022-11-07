$(function () {
  //헤더 전체메뉴
  $('#header .gnb')
    .on('mouseenter', function () {
      $('#header').addClass('on');
    })
    .on('mouseleave', function () {
      $('#header').removeClass('on');
    });

  // 메인슬라이더
  var mainSlider = new Swiper('.main_slider', {
    loop: true,
    speed: 1000,
    simulateTouch: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  });

  // family site
  $('.family_wrap').on('click', function () {
    $(this).find('.family').slideToggle();
  });

  // office - btn
  $(function () {
    $('.office_search').on('click', function () {
      $(this).find('.lang').slideToggle();
    });
    $('.office_search2').on('click', function () {
      $(this).find('.lang2').slideToggle();
    });

    // 탭 - brand
    $('.brand_list_tab li').on('click', function (e) {
      e.preventDefault();

      $(this).addClass('active').siblings().removeClass('active');
    });

    // 탭 - road
    $('.road_list_tab li').on('click', function (e) {
      e.preventDefault();

      $(this).addClass('active').siblings().removeClass('active');
    });

    // 탭 - faq
    $('.faq_list_tab li').on('click', function (e) {
      e.preventDefault();

      $(this).addClass('active').siblings().removeClass('active');
    });

    // faq 열고 닫기
    $('.faq_list_wrap').on('click', function () {
      if ($(this).hasClass('active')) {
        $(this).removeClass('active');
      } else {
        $('.faq_list_wrap').removeClass('active');
        $(this).addClass('active');
      }
      return false;
    });

    $('.menu1').click(function () {
      $('.menu2').slideUp();
      if ($(this).children('.menu2').is(':hidden')) {
        $(this).children('.menu2').slideDown();
      } else {
        $(this).children('.menu2').slideUp();
      }
    });
  });
});
