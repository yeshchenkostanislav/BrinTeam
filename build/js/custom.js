'use strict';

$('document').ready(function () {
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

  $(document).scroll(function () {
    if ($(document).scrollTop() >= 50) {
      $('.header__lower').addClass('header__lower_active');
    } else if ($(document).scrollTop() < 50) {
      $('.header__lower').removeClass('header__lower_active');
    }
  });

  $(".header__nav a").on("click", function (event) {
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
  $('.social-net').hover(function () {
    $('.header__follow').toggleClass('header__follow_active');
  });

  $('.header__audio').click(soundClick);

  function soundClick() {
    var audio = new Audio(); // Создаём новый элемент Audio
    audio.src = 'http://d.zaix.ru/dbxE.mp3'; // Указываем путь к звуку "клика"
    audio.autoplay = true; // Автоматически запускаем
  }
  //soundClick();

  function doAnimation(id, animName, duration, delay) {
    var el = document.getElementById(id);
    var timer;

    function addClass() {
      el.classList.add(animName);
    }

    function removeClass() {
      el.classList.remove(animName);
    }
    setInterval(function () {
      clearTimeout(timer);
      addClass();
      timer = setTimeout(removeClass, duration);
    }, duration + delay);
  }

  doAnimation('audio', 'swing', 2000, 5000);
  var hotelGallery = new Kmodal('#hotelGallery');
});