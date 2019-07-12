$('.social-net').hover(function () {
  $('.header__follow').toggleClass('header__follow_active');
});

$(document).scroll(() => {
  console.log($(document).scrollTop())
  if ($(document).scrollTop() >= 50) {
    $('.header__lower').addClass('header__lower_active');
  } else if ($(document).scrollTop() < 50) {
    $('.header__lower').removeClass('header__lower_active');
  }
  if ($(document).scrollTop() > 1600) {
    $('.header__lower').removeClass('header__lower_active');
  }

  if ($(document).scrollTop() >= 500) {
    $('.arrow-up').css('opacity', '1');
  } else {
    $('.arrow-up').css('opacity', '0');
  }
})


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
doAnimation('audio-footer', 'swing', 2000, 5000);


$(window).on('load', function () {
  var $preloader = $('#p_prldr'),
    $svg_anm = $preloader.find('.svg_anm');
  $svg_anm.fadeOut();
  $preloader.delay().fadeOut('slow');
});