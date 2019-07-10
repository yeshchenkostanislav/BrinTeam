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