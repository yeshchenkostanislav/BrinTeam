var swiperBanner = new Swiper($('[data-slider="swiperBanner"]'), {
  speed: 400,
  slidesPerView: 1,
  loop: true,
  initialSlide: 1,
  preventInteractionOnTransition: false,

  navigation: {
    prevEl: $('.banner-prev-slide'),

    nextEl: $('.banner-next-slide')
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  breakpoints: {
    992: {
      slidesPerView: 1
    }
  }
});

$(document).scroll(() => {
  if ($(document).scrollTop() >= 50) {
    $('.header__lower').addClass('header__lower_active');
  } else if ($(document).scrollTop() < 50) {
    $('.header__lower').removeClass('header__lower_active');
  }

  if ($(document).scrollTop() >= 500) {
    $('.arrow-up').css('opacity', '1');
  } else {
    $('.arrow-up').css('opacity', '0');
  }
})

$(".header__nav a, .arrow-up").on("click", function (event) {
  //отменяем стандартную обработку нажатия по ссылке
  event.preventDefault();

  //забираем идентификатор бока с атрибута href
  var id = $(this).attr('href'),

    //узнаем высоту от начала страницы до блока на который ссылается якорь
    top = $(id).offset().top;

  //анимируем переход на расстояние - top за 1500 мс
  $('body,html').animate({
    scrollTop: top
  }, 1500);
});

AOS.init();

/* swiperBanner.on('slideChange', function () {
 
}); */

/* AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 100, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-center', // defines which position of the element regarding to window should trigger the animation

}); */