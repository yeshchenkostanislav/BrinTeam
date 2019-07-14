$('.social-net').hover(function () {
  $('.header__follow').toggleClass('header__follow_active');
});

$(document).scroll(() => {

  if ($(document).scrollTop() >= 50) {
    $('.header__lower').addClass('header__lower_active');
  } else if ($(document).scrollTop() < 50) {
    $('.header__lower').removeClass('header__lower_active');
  }
  if ($(document).scrollTop() > 1650) {
    $('.header__lower').removeClass('header__lower_active');
  }

  if ($(document).scrollTop() >= 500) {
    $('.arrow-up').css('opacity', '1');
  } else {
    $('.arrow-up').css('opacity', '0');
  }
})


$('.audio').click(soundClick);

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
doAnimation('audio-footer', 'swing', 2000, 5000);


$(window).on('load', function () {
  var $preloader = $('#p_prldr'),
    $svg_anm = $preloader.find('.svg_anm');
  //$svg_anm.fadeOut();
  $preloader.delay().fadeOut('slow');
});

$('.burger').click(() => {
  $('.header .nav').toggleClass('nav_active');
})



if ($(window).width() < 768) {
  $('.burger').click(function () {

    $(this).toggleClass('burger_active');
  })
}



//проверка был ли скролл вверх или вних и подсвечиваем пункты в меню
var lastScrollTop = 0;

$(window).scroll(function () {

  var st = $(this).scrollTop();
  if (st > lastScrollTop) { //если прокрутка вних

    var $sections = $('.section'); //секции в которых якорные ссылки

    $sections.each(function (i, el) {
      var top = $(el).offset().top - 120;
      var bottom = top + $(el).height();
      var scroll = $(window).scrollTop();
      var id = $(el).attr('id');
      if (scroll > top && scroll < bottom) {
        $('.header a').removeClass('nav__link_active');
        $(' .nav_header a[href="#' + id + '"]').addClass('nav__link_active');
      } else if (st < 700) {
        $('.nav_header a:first').addClass('nav__link_active');
      }
    })

  } else { // если прокрутка вверх

    var $sections = $('.section'); //секции в которых якорные ссылки

    $sections.each(function (i, el) {
      var top = $(el).offset().top - 120;
      var bottom = top + $(el).height();
      var scroll = $(window).scrollTop();
      var id = $(el).attr('id');
      if (scroll > top && scroll < bottom) {
        $('.header a').removeClass('nav__link_active');
        $(' .nav_header a[href="#' + id + '"]').addClass('nav__link_active');
      } else if (st < 700) {
        $('.nav_header a:first').addClass('nav__link_active');
      }
    })

  }

  lastScrollTop = st;

});